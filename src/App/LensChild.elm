module LensChild exposing (..)

import Monocle.Lens exposing (Lens)
import Return exposing (Return, ReturnF)
import Html exposing (Html)


type alias Component get cmsg set pmsg cb =
    { lens : Lens get set
    , lift : pmsg -> cmsg
    , cb : cb
    }



-- Preparing to automatic Clild over internal 'effect module' mechanisms
--
-- , view : sm -> Html a
-- component : (s -> a) -> (a -> s -> s) -> (am -> sm) -> Component s sm a am


component :
    (pmod -> cmod)
    -> (cmod -> pmod -> pmod)
    -> (pmsg -> cmsg)
    -> cb
    -> Component pmod cmsg cmod pmsg cb
component get set lift cb =
    Component (Lens get set) lift cb


init : Lens pmod cmod -> (Lens pmod cmod -> cmsg -> pmsg) -> Return cmsg cmod -> Return pmsg cmod
init lens mergeBack fx =
    fx
        |> Return.mapCmd (mergeBack lens)


initComponent c =
    init c.lens c.lift c.cb.init



-- import Return.Optics exposing (refractl)
-- refractl do exact some as update


update : Lens pmod cmod -> (Lens pmod cmod -> cmsg -> pmsg) -> (cmod -> Return cmsg cmod) -> ReturnF pmsg pmod
update lens mergeBack fx ( model, cmd ) =
    lens.get model
        |> fx
        |> Return.mapBoth (mergeBack lens) (flip lens.set model)
        |> Return.command cmd


view : Lens pmod cmod -> (Lens pmod cmod -> cmsg -> pmsg) -> (cmod -> Html cmsg) -> pmod -> Html pmsg
view lens mergeBack fx =
    .get lens
        >> fx
        >> Html.map (mergeBack lens)



-- viewComponent : Lens pmod cmod -> Html pcmd
-- viewComponent : Component pmod cmsg cmod pmsg (Html cmsg) -> pmod -> Html pmsg
-- TODO: Type


viewComponent :
    { a
        | lens : Lens pmod cmod
        , lift : Lens pmod cmod -> cmsg -> pmsg
        , cb :
            { init : ( cmod, Cmd cmsg )
            , update : cmsg -> cmod -> ( cmod, Cmd cmsg )
            , view : cmod -> Html cmsg
            , subscriptions : cmod -> Sub cmsg
            }
    }
    -> pmod
    -> Html pmsg
viewComponent c =
    view c.lens c.lift c.cb.view


subs : Lens pmod cmod -> (Lens pmod cmod -> cmsg -> pmsg) -> (cmod -> Sub cmsg) -> pmod -> Sub pmsg
subs lens mergeBack fx =
    .get lens
        >> fx
        >> Sub.map (mergeBack lens)


subsComponent c =
    subs c.lens c.lift c.cb.subscriptions



-- |> Return.mapBoth (mergeBack lens) (flip lens.set model)
