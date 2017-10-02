module Pages.Home
    exposing
        ( Model
        , Msg
        , init
        , subscriptions
        , update
        , view
        )

import Html exposing (Html, div, text)
import Time exposing (Time, second)


type alias Model =
    { counter : Time }


init : ( Model, Cmd Msg )
init =
    ( { counter = 0 }, Cmd.none )


type Msg
    = Tick Time
    | NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        Tick newTime ->
            ( { model | counter = newTime }, Cmd.none )


view : Model -> Html Msg
view model =
    div [] [ text <| "HOME: WIP" ++ toString model ]


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.batch
        [ Time.every second Tick
        ]
