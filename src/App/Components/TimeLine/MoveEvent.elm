module Components.TimeLine.MoveEvent exposing (MoveEvent, moveEvent)

import Components.TimeLine.ActivityIcon
import Components.TimeLine.Event exposing (event_duration)
import Components.TimeLine.Icons as I
import Components.TimeLine.Item exposing (item, item_content, item_event, item_title, item_title_content)
import Html exposing (Html, div, hr, span, text)
import Html.Attributes exposing (attribute, class)
import Svg exposing (line, svg)
import Svg.Attributes as S exposing (x1, x2, y1, y2)


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
            [ item "place-history-moment-outer"
                Nothing
                [ activity_svg_line
                , activity_add_contol
                , item_content True
                    (div []
                        [ item_title
                            [ activity_place ( event, value )
                            , event_duration ( duration, "" )
                            ]
                        ]
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
        [ Components.TimeLine.ActivityIcon.icon Components.TimeLine.ActivityIcon.Move
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
