module App exposing (..)

import Html exposing (Html, beginnerProgram, button, div, text)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)


type alias Model =
    Int


model : Model
model =
    0


type Msg
    = Increment
    | Decrement


update : Msg -> Model -> Model
update msg model =
    case msg of
        Increment ->
            model + 1

        Decrement ->
            model - 1


view : Model -> Html Msg
view model =
    div [ class "component" ]
        [ div [] [ text "Header:" ]
        , button [ onClick Decrement ] [ text "-" ]
        , div [] [ text (toString model) ]
        , button [ onClick Increment ] [ text "+" ]
        ]


main : Program Never Model Msg
main =
    beginnerProgram { model = model, view = view, update = update }
