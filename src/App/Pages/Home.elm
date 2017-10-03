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
    , incdec : IncDec.Model
    }


incdecl : Lens Model IncDec.Model
incdecl =
    Lens .incdec <| \u m -> { m | incdec = u }


type Msg
    = Tick Time
    | IncDecMessage IncDec.Msg
    | NoOp


init : ( Model, Cmd Msg )
init =
    let
        ( incdecModel, incdecCmd ) =
            IncDec.init
                |> Return.mapCmd IncDecMessage
    in
        Return.singleton { counter = 0, incdec = incdecModel }
            |> Return.command incdecCmd


update : Msg -> Model -> ( Model, Cmd Msg )
update msg =
    Return.singleton
        >> case msg of
            NoOp ->
                Return.zero

            Tick newTime ->
                Return.map <| \model -> { model | counter = newTime }

            IncDecMessage subMsg ->
                refractl incdecl IncDecMessage <| IncDec.update subMsg


view : Model -> Html Msg
view model =
    div []
        [ text <| "HOME: WIP" ++ toString model
        , div [ class "row" ]
            [ div [ class "col-sm-6" ]
                [ IncDec.view model.incdec |> Html.map IncDecMessage
                ]
            , div
                [ class "col-sm-6" ]
                [ IncDec.view model.incdec |> Html.map IncDecMessage
                ]
            ]
        ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Time.every second Tick
        , IncDec.subscriptions model.incdec
            |> Sub.map IncDecMessage
        ]
