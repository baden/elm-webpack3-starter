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
-- init :
--     { e
--         | cb :
--             { c
--                 | init : Return cmsg model
--             }
--         , lens : Lens pmod cmod
--         , lift : String -> Lens pmod cmod -> cmsg -> pmsg
--     }
--     -> Return pmsg model


init :
    { f
        | cb : { d | init : Return cmsg model, update : c }
        , lens : Lens pmod cmod
        , lift : c -> Lens pmod cmod -> cmsg -> pmsg
    }
    -> Return pmsg model
init c =
    c.cb.init
        |> Return.mapCmd (c.lift c.cb.update c.lens)



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
-- update : Lens pmod cmod -> (Lens pmod cmod -> cmsg -> pmsg) -> (cmod -> Return cmsg cmod) -> ReturnF pmsg pmod


update updater lens subMsg mergeBack ( model, cmd ) =
    let
        fx =
            \m -> updater subMsg m
    in
    lens.get model
        |> fx
        |> Return.mapBoth (mergeBack updater lens) (flip lens.set model)
        |> Return.command cmd



-- dropP : ( mod, cmd, pcmd ) -> ( mod, cmd )
-- dropP ( m, c, p ) =
--     ( m, c )
-- updateP : Lens pmod cmod -> (Lens pmod cmod -> cmsg -> pmsg) -> (cmod -> Return cmsg cmod) -> ReturnF pmsg pmod


updateP updater lens subMsg mergeBack effect ( model, cmd ) =
    let
        _ =
            Debug.log "updateP" ( lens, mergeBack, fx, effect, ( model, cmd ) )

        fx =
            \m -> updater subMsg m

        cmod =
            lens.get model

        ( newCMod, newCmsg, newPmsg ) =
            fx cmod
    in
    ( newCMod, newCmsg )
        |> Return.mapBoth (mergeBack updater lens) (flip lens.set model)
        |> Return.command cmd
        |> effect newPmsg



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
-- view :
--     { e
--         | cb : { d | view : cmod -> Html cmsg }
--         , lift : String -> Lens pmod cmod -> cmsg -> pmsg
--         , lens : Lens pmod cmod
--     }
--     -> pmod
--     -> Html pmsg
-- view :
--     { f
--         | cb : { e | update : d, view : b -> Html cmsg }
--         , lift : d -> { c | get : pmod -> b } -> cmsg -> pmsg
--         , lens : { c | get : pmod -> b }
--     }
--     -> pmod
--     -> Html pmsg


view c =
    .get c.lens
        >> c.cb.view
        >> Html.map (c.lift c.cb.update c.lens)



-- updater lens subMsg pMsg effect =
--     updateP lens pMsg (\m -> lens.cb.update subMsg m) effect
-- viewWithEvents e c =
--     .get c.lens
--         -- >> c.cb.view (\e -> Cmd.map e)
--         >> c.cb.view e
--         >> Html.map (c.lift c.lens)


return r ( m, c ) =
    ( m, c, r )


program m =
    m



-- subs : Lens pmod cmod -> (Lens pmod cmod -> cmsg -> pmsg) -> (cmod -> Sub cmsg) -> pmod -> Sub pmsg
-- subs lens mergeBack fx =
--     .get lens
--         >> fx
--         >> Sub.map (mergeBack lens)
-- subscriptions :
--     { e
--         | cb : { d | subscriptions : cmod -> Sub cmsg }
--         , lift : String -> Lens pmod cmod -> cmsg -> pmsg
--         , lens : Lens pmod cmod
--     }
--     -> pmod
--     -> Sub pmsg


subscriptions c =
    .get c.lens
        >> c.cb.subscriptions
        >> Sub.map (c.lift c.cb.update c.lens)


updateComponent c subMsg =
    update c.lens c.lift <| c.cb.update subMsg



-- |> Return.mapBoth (mergeBack lens) (flip lens.set model)
