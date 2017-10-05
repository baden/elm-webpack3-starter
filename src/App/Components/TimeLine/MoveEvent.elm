module Components.TimeLine.MoveEvent exposing (moveEvent, MoveEvent)

import Html exposing (Html, div, text, i, hr, span, a)
import Html.Attributes exposing (class, tabindex, attribute, title, href)
import Svg exposing (svg, line)
import Svg.Attributes as S exposing (version, viewBox, x, y, x1, y1, x2, y2, strokeLinecap)
import Components.TimeLine.Event exposing (event_duration)
import Components.TimeLine.ActivityIcon
import Components.TimeLine.Item exposing (item, item_content, item_title, item_title_content, item_event)
import Components.TimeLine.Icons as I


type alias MoveEvent =
    {}



-- Public API
-- TODO: events


moveEvent : ( ( String, String ), String, List ( String, String ) ) -> Html msg
moveEvent ( ( event, value ), duration, events ) =
    let
        visits =
            events
                |> List.map
                    (\( t, d ) ->
                        item_event ( t, ( d, "" ) )
                    )
    in
        div []
            [ div [ class "activity-segment-outer" ]
                [ (item "place-history-moment-outer" Nothing)
                    [ activity_svg_line
                    , activity_add_contol
                    , (item_content True)
                        ((div []
                            [ item_title
                                [ activity_place ( event, value )
                                , event_duration ( duration, "" )
                                ]
                            ]
                         )
                            :: visits
                        )
                    , hr [ class "moment-divider" ] []
                    ]
                ]
            ]



-- Private


activity_place : ( String, String ) -> Html msg
activity_place ( title, distance ) =
    item_title_content
        [ Components.TimeLine.ActivityIcon.icon Components.TimeLine.ActivityIcon.ActivityIconMove
        , span [ class "activity-type" ]
            [ text title ]
        , div [ class "distance-text", attribute "style" "" ]
            [ text distance ]
        ]


activity_add_contol : Html msg
activity_add_contol =
    div [ class "add-a-place" ]
        [ I.add_a_place
        , div [ class "add-a-place-text tooltip" ]
            [ text "Новое место" ]
        ]


activity_svg_line : Html msg
activity_svg_line =
    svg [ S.class "timeline-item-svg" ]
        [ line [ S.class "timeline-item-svg-line", attribute "style" "stroke: rgb(1, 87, 155);", x1 "7", x2 "7", y1 "0", y2 "100%" ]
            []
        ]
