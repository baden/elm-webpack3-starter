module IncDec exposing (Model, Msg, init, subscriptions, update, view)

import Html exposing (Html, button, div, text)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)
import Task
import Time exposing (Time, second)


type alias Model =
    { value : Int
    , time : Time
    }


defaultModel : Model
defaultModel =
    { value = 0
    , time = 0
    }


type Msg
    = Increment
    | Decrement
    | Tick Time


init : ( Model, Cmd Msg )
init =
    ( defaultModel, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Increment ->
            ( { model | value = model.value + 1 }, Cmd.none )

        Decrement ->
            ( { model | value = model.value - 1 }, Cmd.none )

        Tick newTime ->
            ( { model | time = newTime }, Cmd.none )


view : Model -> Html Msg
view model =
    div [ class "component" ]
        [ div [] [ text "IncDec component" ]
        , button [ onClick Decrement ] [ text "-" ]
        , div [] [ text (toString model.value) ]
        , button [ onClick Increment ] [ text "+" ]
        , div [] [ text "time:", text (toString model.time) ]
        ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Time.every second Tick
        ]
