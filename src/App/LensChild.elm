module LensChild exposing (..)

import Html exposing (Html)
import Monocle.Lens exposing (Lens)
import Return exposing (Return, ReturnF)


type alias Component get cmsg set pmsg cb =
    { lens : Lens get set
    , lift : pmsg -> cmsg
    , cb : cb
    }


type Lift pmod cmod cmsg
    = Lift (Lens pmod cmod) cmsg



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



-- init :
--     Lens pmod cmod
--     -> (Lens pmod cmod -> cmsg -> pmsg)
--     -> Return cmsg cmod
--     -> Return pmsg cmod
-- init lens mergeBack fx =
--     fx
--         |> Return.mapCmd (mergeBack lens)


init :
    { e
        | cb :
            { c
                | init : Return cmsg model
            }
        , lens : Lens pmod cmod
        , lift : Lens pmod cmod -> cmsg -> pmsg
    }
    -> Return pmsg model
init c =
    c.cb.init
        |> Return.mapCmd (c.lift c.lens)



-- initComponent :
--     { b
--         | cb : { a | init : Return cmsg cmod }
--         , lens : Lens pmod cmod
--         , lift : Lens pmod cmod -> cmsg -> pmsg
--     }
--     -> Return pmsg cmod
-- type alias Component get cmsg set pmsg cb =
--     { lens : Lens get set
--     , lift : pmsg -> cmsg
--     , cb : cb
--     }
-- initComponent :
--     Component pmod pmsg cmod (Lens pmod cmod -> cmsg -> pmsg) { a | init : Return cmsg cmod }
--     -> Return pmsg cmod
-- import Return.Optics exposing (refractl)
-- refractl do exact some as update


update : Lens pmod cmod -> (Lens pmod cmod -> cmsg -> pmsg) -> (cmod -> Return cmsg cmod) -> ReturnF pmsg pmod
update lens mergeBack fx ( model, cmd ) =
    lens.get model
        |> fx
        |> Return.mapBoth (mergeBack lens) (flip lens.set model)
        |> Return.command cmd



-- view :
--     Lens pmod cmod
--     -> (Lens pmod cmod -> cmsg -> pmsg)
--     -> (cmod -> Html cmsg)
--     -> pmod
--     -> Html pmsg
-- view lens mergeBack fx =
--     .get lens
--         >> fx
--         >> Html.map (mergeBack lens)
-- viewComponent :
--     { a
--         | lens : Lens pmod cmod
--         , lift : Lens pmod cmod -> cmsg -> pmsg
--         , cb :
--             { init : ( cmod, Cmd cmsg )
--             , update : cmsg -> cmod -> ( cmod, Cmd cmsg )
--             , view : cmod -> Html cmsg
--             , subscriptions : cmod -> Sub cmsg
--             }
--     }
--     -> pmod
--     -> Html pmsg


view :
    { e
        | cb : { d | view : cmod -> Html cmsg }
        , lift : Lens pmod cmod -> cmsg -> pmsg
        , lens : Lens pmod cmod
    }
    -> pmod
    -> Html pmsg
view c =
    .get c.lens
        >> c.cb.view
        >> Html.map (c.lift c.lens)


viewWithEvents e c =
    .get c.lens
        >> c.cb.view e
        >> Html.map (c.lift c.lens)



-- subs : Lens pmod cmod -> (Lens pmod cmod -> cmsg -> pmsg) -> (cmod -> Sub cmsg) -> pmod -> Sub pmsg
-- subs lens mergeBack fx =
--     .get lens
--         >> fx
--         >> Sub.map (mergeBack lens)


subscriptions :
    { e
        | cb : { d | subscriptions : cmod -> Sub cmsg }
        , lift : Lens pmod cmod -> cmsg -> pmsg
        , lens : Lens pmod cmod
    }
    -> pmod
    -> Sub pmsg
subscriptions c =
    .get c.lens
        >> c.cb.subscriptions
        >> Sub.map (c.lift c.lens)


updateComponent c subMsg =
    update c.lens c.lift <| c.cb.update subMsg



-- |> Return.mapBoth (mergeBack lens) (flip lens.set model)
