module Components.TimeLine.CampEvent exposing (CampEvent, campEvent)

import Components.TimeLine.Event exposing (event_duration)
import Components.TimeLine.Icons as I
import Components.TimeLine.Item exposing (item, item_content, item_event, item_subtitle, item_title, item_title_content)
import Html exposing (Html, div, hr, text)
import Html.Attributes exposing (attribute, class)
import Svg exposing (line, svg)
import Svg.Attributes as S exposing (strokeLinecap, x1, x2, y1, y2)


type alias CampEvent =
    {}



-- Public API


campEvent : ( ( Bool, Bool ), Html msg, String, ( String, String ), String ) -> Html msg
campEvent ( ( before, after ), place_icon, place, ( from, to ), address ) =
    let
        visits =
            [ item_event ( "Выключено зажигание", ( "10:20", "" ) )
            , item_event ( "Включено зажигание", ( "14:43", "" ) )
            ]
    in
    div []
        [ item "place-history-moment-outer"
            Nothing
            [ timeline_svg ( before, after )
            , div [ class "segment-divider" ] []
            , place_icon
            , item_content True
                (div []
                    [ item_title
                        [ event_place place
                        , event_duration ( from, to )
                        ]
                    , item_subtitle address
                    ]
                    :: visits
                )

            -- , event_history low_confidence
            , hr [ class "moment-divider" ] []
            ]
        ]



-- Private


event_place : String -> Html msg
event_place title =
    item_title_content
        [ div [ attribute "style" "display:none" ]
            []
        , div [ class "place-visit-title" ]
            [ text title ]
        , I.drop_down
        ]


timeline_svg : ( Bool, Bool ) -> Html msg
timeline_svg ( t, b ) =
    svg [ S.class "timeline-item-svg" ]
        [ line
            (if t then
                [ S.class "timeline-item-svg-line"
                , strokeLinecap "round"
                , attribute "style" "stroke: rgb(1, 87, 155);"
                , x1 "7"
                , x2 "7"
                , y1 "0"
                , y2 "41"
                ]
             else
                [ S.class "", attribute "style" "display:none" ]
            )
            []
        , line
            (if b then
                [ S.class "timeline-item-svg-line"
                , strokeLinecap "round"
                , attribute "style" "stroke: rgb(1, 87, 155);"
                , x1 "7"
                , x2 "7"
                , y1 "41"
                , y2 "100%"
                ]
             else
                [ S.class "", attribute "style" "display:none" ]
            )
            []
        ]
