module Pages.Home
    exposing
        ( Model
        , Msg
        , init
        , subscriptions
        , update
        , view
        )

import Components.IncDec as IncDec
import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Time exposing (Time, second)
import Monocle.Lens exposing (Lens)
import Return exposing (Return)
import LensChild as L


type alias Model =
    { counter : Time
    , incdec1 : IncDec.Model
    , incdec2 : IncDec.Model
    }


incdec1l : Lens Model IncDec.Model
incdec1l =
    Lens .incdec1 <| \u m -> { m | incdec1 = u }


incdec2l : Lens Model IncDec.Model
incdec2l =
    Lens .incdec2 <| \u m -> { m | incdec2 = u }


type Msg
    = Tick Time
    | IncDecMessage (Lens Model IncDec.Model) IncDec.Msg
    | NoOp


initModel : IncDec.Model -> IncDec.Model -> Model
initModel i1 i2 =
    { counter = 0
    , incdec1 = i1
    , incdec2 = i2
    }


init : ( Model, Cmd Msg )
init =
    Return.map2 initModel
        (L.init incdec1l IncDecMessage IncDec.init)
        (L.init incdec2l IncDecMessage IncDec.init)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg =
    Return.singleton
        >> case msg of
            NoOp ->
                Return.zero

            Tick newTime ->
                Return.map <| \model -> { model | counter = newTime }

            IncDecMessage lens subMsg ->
                L.update lens IncDecMessage <| IncDec.update subMsg


view : Model -> Html Msg
view model =
    div []
        [ text <| "HOME: WIP" ++ toString model
        , div [ class "row" ]
            [ div [ class "col-sm-6" ]
                [ L.view incdec1l IncDecMessage IncDec.view model
                ]
            , div
                [ class "col-sm-6" ]
                [ L.view incdec2l IncDecMessage IncDec.view model
                ]
            ]
        ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Time.every second Tick
        , L.subs incdec1l IncDecMessage IncDec.subscriptions model
        , L.subs incdec2l IncDecMessage IncDec.subscriptions model
        ]
