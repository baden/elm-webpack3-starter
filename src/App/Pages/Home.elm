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
import Return.Optics exposing (refractl)


type alias Model =
    { counter : Time
    , incdec1 : IncDec.Model
    , incdec2 : IncDec.Model
    }


type IncDecs
    = First
    | Second


incdec1l : Lens Model IncDec.Model
incdec1l =
    Lens .incdec1 <| \u m -> { m | incdec1 = u }


incdec2l : Lens Model IncDec.Model
incdec2l =
    Lens .incdec2 <| \u m -> { m | incdec2 = u }


type Msg
    = Tick Time
    | IncDecMessage IncDecs IncDec.Msg
    | NoOp


init : ( Model, Cmd Msg )
init =
    let
        ( incdec1Model, incdec1Cmd ) =
            IncDec.init
                |> Return.mapCmd (IncDecMessage First)

        ( incdec2Model, incdec2Cmd ) =
            IncDec.init
                |> Return.mapCmd (IncDecMessage Second)
    in
        Return.singleton
            { counter = 0
            , incdec1 = incdec1Model
            , incdec2 = incdec2Model
            }
            |> Return.command incdec1Cmd
            |> Return.command incdec2Cmd


update : Msg -> Model -> ( Model, Cmd Msg )
update msg =
    Return.singleton
        >> case msg of
            NoOp ->
                Return.zero

            Tick newTime ->
                Return.map <| \model -> { model | counter = newTime }

            IncDecMessage index subMsg ->
                let
                    incdecl =
                        case index of
                            First ->
                                incdec1l

                            Second ->
                                incdec2l
                in
                    refractl incdecl (IncDecMessage index) <| IncDec.update subMsg


view : Model -> Html Msg
view model =
    div []
        [ text <| "HOME: WIP" ++ toString model
        , div [ class "row" ]
            [ div [ class "col-sm-6" ]
                [ IncDec.view model.incdec1 |> Html.map (IncDecMessage First)
                ]
            , div
                [ class "col-sm-6" ]
                [ IncDec.view model.incdec2 |> Html.map (IncDecMessage Second)
                ]
            ]
        ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Time.every second Tick
        , IncDec.subscriptions model.incdec1 |> Sub.map (IncDecMessage First)
        , IncDec.subscriptions model.incdec2 |> Sub.map (IncDecMessage Second)
        ]
