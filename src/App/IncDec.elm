module IncDec exposing (Model, Msg, init, subscriptions, update, view)

import Html exposing (Html, button, div, text)
import Html.Attributes exposing (class, type_)
import Html.Events exposing (onClick)
import Task
import Monocle.Lens as Lens exposing (Lens)
import Return exposing (Return)


type alias Model =
    { value : Int
    }


defaultModel : Model
defaultModel =
    { value = 0
    }


value : Lens Model Int
value =
    Lens .value <| \u m -> { m | value = u }


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
    Return.return defaultModel (send Increment)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg =
    Return.singleton
        << case msg of
            Increment ->
                Lens.modify value ((+) 1)

            Decrement ->
                Lens.modify value ((+) -1)


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
