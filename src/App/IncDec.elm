module IncDec exposing (Model, Msg, init, subscriptions, update, view)

import Html exposing (Html, button, div, text)
import Html.Attributes exposing (class, type_)
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
    let
        t =
            floor (model.time / 1000)
    in
    div [ class "component jumbotron" ]
        [ div [] [ text "IncDec component" ]
        , button [ type_ "button", class "btn btn-primary", onClick Decrement ] [ text "-" ]
        , div [] [ text (toString model.value) ]
        , button [ type_ "button", class "btn btn-primary", onClick Increment ] [ text "+" ]
        , div [] [ text "time:", text (toString t) ]
        ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Time.every second Tick
        ]
