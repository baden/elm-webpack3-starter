module Components.Loader exposing (hideLoader, loader, showLoader)

import Animation exposing (..)
import Html exposing (Html, div, text)
import Html.Attributes exposing (class)


loader : Animation.State -> Html msg
loader style =
    div (Animation.render style ++ [ class "loader-container" ])
        [ div [ class "loader" ] [ text "Loading..." ] ]


showLoader =
    Animation.interrupt
        [ Animation.set
            [ Animation.display Animation.flex ]
        , Animation.set
            [ Animation.opacity 1 ]
        ]


hideLoader =
    Animation.interrupt
        [ Animation.to
            [ Animation.opacity 0 ]
        , Animation.set
            [ Animation.display Animation.none ]
        ]
