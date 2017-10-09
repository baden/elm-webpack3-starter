module Components.TimeLine.Item
    exposing
        ( item
        , item_content
        , item_event
        , item_subtitle
        , item_title
        , item_title_content
        )

import Components.TimeLine.Event exposing (event_duration)
import Html exposing (Html, a, div, span, text)
import Html.Attributes exposing (attribute, class, href, tabindex)
import Html.Events exposing (onClick)


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
    div
        [ class "edit-dialog-select moment-edit-control place-visit timeline-item-title-content"
        , attribute "role" "button"
        , tabindex 0
        ]


item_event : ( String, ( String, String ) ) -> Html msg
item_event ( v, dur ) =
    div [ class "timeline-item-text child-place-visit" ]
        [ a
            [ class "child-place-visit-content"
            , href "/maps/place/tbd"
            ]
            [ div
                [ class "child-place-visit-icon"
                , attribute "style" "background-image:url(https://maps.gstatic.com/mapsactivities/icons/poi_icons/30_visited/tree_2x.png)"
                ]
                []
            , span [ class "child-place-visit-title" ]
                [ text v ]
            ]
        , event_duration dur
        ]
