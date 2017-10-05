module Components.TimeLine.TravelEvent
    exposing
        ( travel_event
        , defaultTravelEvent
        , TravelEvent
        , toggleEvent
        )

import Html exposing (Html, button, div, text, i, span, hr, node, img, a)
import Html.Attributes exposing (class, type_, tabindex, attribute, title, src, href)
import Svg exposing (svg, line)
import Svg.Attributes as S exposing (version, viewBox, x, y, x1, y1, x2, y2, strokeLinecap)
import Components.TimeLine.ActivityIcon
import Components.TimeLine.Event exposing (event_duration)
import Components.TimeLine.Item exposing (item, item_content, item_title)
import Components.TimeLine.Icons as I


type alias TravelEvent =
    { expanded : Bool
    }


defaultTravelEvent : TravelEvent
defaultTravelEvent =
    { expanded = False
    }



-- TODO: use Lens?


toggleEvent : TravelEvent -> TravelEvent
toggleEvent e =
    { e | expanded = not e.expanded }



-- Public API


travel_event : TravelEvent -> msg -> List (Html msg) -> Html msg
travel_event model msg moments =
    div []
        [ div
            [ class <|
                "travel-segment"
                    ++ if model.expanded then
                        " expanded"
                       else
                        ""
            ]
            [ travel_segment msg
            , hr [ class "moment-divider" ] []
            , div [ class "activities-wrapper" ] moments
            ]
        ]



-- Private


travel_segment : msg -> Html msg
travel_segment msg =
    (item "travel-segment-summary" (Just msg))
        [ activity_svg_line
        , travel_segment_expander
        , (item_content False)
            [ item_title
                [ div [ class "travel-segment-summary-itmes" ]
                    [ travel_segment_item Components.TimeLine.ActivityIcon.ActivityIconMove
                    , travel_segment_item Components.TimeLine.ActivityIcon.ActivityIconCamp
                    ]
                , event_duration ( "3 часа 52 минуты", "" )
                ]
            ]
        ]


activity_svg_line : Html msg
activity_svg_line =
    svg [ S.class "timeline-item-svg" ]
        [ line [ S.class "timeline-item-svg-line", attribute "style" "stroke: rgb(1, 87, 155);", x1 "7", x2 "7", y1 "0", y2 "100%" ]
            []
        ]


travel_segment_expander : Html msg
travel_segment_expander =
    div [ class "activity-expand-toggle" ]
        [ I.upper
        , I.lower
        ]


travel_segment_item : Components.TimeLine.ActivityIcon.ActivityIcon -> Html msg
travel_segment_item tit =
    div [ class "travel-segment-summary-item" ]
        [ Components.TimeLine.ActivityIcon.icon tit
        , I.right
        ]
