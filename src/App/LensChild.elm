module LensChild exposing (..)

import Monocle.Lens exposing (Lens)
import Return exposing (Return, ReturnF)
import Html exposing (Html)


init : Lens pmod cmod -> (Lens pmod cmod -> cmsg -> pmsg) -> Return cmsg cmod -> Return pmsg cmod
init lens mergeBack fx =
    fx
        |> Return.mapCmd (mergeBack lens)



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


subs : Lens pmod cmod -> (Lens pmod cmod -> cmsg -> pmsg) -> (cmod -> Sub cmsg) -> pmod -> Sub pmsg
subs lens mergeBack fx =
    .get lens
        >> fx
        >> Sub.map (mergeBack lens)



-- |> Return.mapBoth (mergeBack lens) (flip lens.set model)
