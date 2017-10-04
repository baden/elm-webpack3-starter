module Components.TimeLine.Event exposing (event_duration)

import Html exposing (Html, div, text, i, hr, span)
import Html.Attributes exposing (class, tabindex, attribute, title)


event_duration : ( String, String ) -> Html msg
event_duration ( f, t ) =
    if t == "" then
        div [ class "duration-text", attribute "role" "button", tabindex 0 ]
            [ text f ]
    else
        div [ class "duration-text", attribute "role" "button", tabindex 0 ]
            [ span [ attribute "style" "" ]
                [ span [ class "segment-duration-part" ]
                    [ text f ]
                , text " – "
                , span [ class "segment-duration-part" ]
                    [ text t ]
                ]
            ]
