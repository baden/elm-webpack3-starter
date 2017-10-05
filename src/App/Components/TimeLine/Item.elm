module Components.TimeLine.Item
    exposing
        ( item
        , item_content
        , item_title
        , item_subtitle
        , item_title_content
        , item_event
        )

import Html exposing (Html, div, a, text, i, span)
import Html.Attributes exposing (class, attribute, tabindex, title, href)
import Html.Events exposing (onClick)
import Components.TimeLine.Event exposing (event_duration)


item : String -> Maybe msg -> List (Html msg) -> Html msg
item subclass m_msg =
    case m_msg of
        Nothing ->
            div [ class <| "timeline-item " ++ subclass ]

        Just msg ->
            div
                [ class <| "timeline-item " ++ subclass
                , attribute "role" "button"
                , attribute "tabindex" "0"
                , onClick msg
                ]


item_content : Bool -> List (Html msg) -> Html msg
item_content multiline =
    div
        [ class <|
            "timeline-item-content primary "
                ++ (if multiline then
                        " multi-line"
                    else
                        ""
                   )
        ]


item_title : List (Html msg) -> Html msg
item_title =
    div [ class "timeline-item-title" ]


item_subtitle : String -> Html msg
item_subtitle t =
    div [ class "timeline-item-text" ] [ text t ]


item_title_content : List (Html msg) -> Html msg
item_title_content =
    div [ class "edit-dialog-select moment-edit-control place-visit timeline-item-title-content", attribute "role" "button", tabindex 0 ]


item_event : ( String, ( String, String ) ) -> Html msg
item_event ( v, dur ) =
    div [ class "timeline-item-text child-place-visit" ]
        [ a [ class "child-place-visit-content", href "/maps/place//data=!4m2!3m1!1s0x40dbdb09a36b4a29:0x8a3bd0a3bedb89d3?authuser=0&hl=ru&gl=ua" ]
            [ div [ class "child-place-visit-icon", attribute "style" "background-image:url(https://maps.gstatic.com/mapsactivities/icons/poi_icons/30_visited/tree_2x.png)" ]
                []
            , span [ class "child-place-visit-title" ]
                [ text v ]
            ]
        , event_duration dur
        ]
