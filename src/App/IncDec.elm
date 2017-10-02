module IncDec exposing (Model, Msg, init, subscriptions, update, view)

import Html exposing (Html, button, div, text)
import Html.Attributes exposing (class, type_)
import Html.Events exposing (onClick)
import Task


type alias Model =
    { value : Int
    }


defaultModel : Model
defaultModel =
    { value = 0
    }


type Msg
    = Increment
    | Decrement



-- Warning! This method is not recomended. This is for example only.
-- Look https://medium.com/elm-shorts/how-to-turn-a-msg-into-a-cmd-msg-in-elm-5dd095175d84


send : msg -> Cmd msg
send msg =
    Task.succeed msg
        |> Task.perform identity


init : ( Model, Cmd Msg )
init =
    ( defaultModel
    , Cmd.batch
        [ send Increment
        ]
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Increment ->
            ( { model | value = model.value + 1 }, Cmd.none )

        Decrement ->
            ( { model | value = model.value - 1 }, Cmd.none )


view : Model -> Html Msg
view model =
    div [ class "component jumbotron" ]
        [ div [] [ text "IncDec component" ]
        , button [ type_ "button", class "btn btn-primary", onClick Decrement ] [ text "-" ]
        , div [] [ text (toString model.value) ]
        , button [ type_ "button", class "btn btn-primary", onClick Increment ] [ text "+" ]
        ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none
