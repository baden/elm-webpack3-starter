module Components.Loader exposing (loader)

-- import Animation exposing (..)

import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Html.Events exposing (on)
import Json.Decode


loader : Bool -> msg -> Html msg
loader visible msg1 =
    div
        [ class <|
            "loader-container"
                ++ (if visible then
                        " show"
                    else
                        " hide"
                   )
        , on "transitionend" <|
            Json.Decode.succeed msg1
        ]
        [ div [ class "loader" ] [ text "Loading..." ] ]
