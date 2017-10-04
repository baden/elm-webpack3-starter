module Components.TimeLine.MoveEvent exposing (moveEvent, MoveEvent)

import Html exposing (Html, div, text, i, hr, span, a)
import Html.Attributes exposing (class, tabindex, attribute, title, href)
import Svg exposing (svg, line)
import Svg.Attributes as S exposing (version, viewBox, x, y, x1, y1, x2, y2, strokeLinecap)
import Components.TimeLine.Event exposing (event_duration)
import Components.TimeLine.ActivityIcon


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
                        activity_place_visit ( t, d )
                    )
    in
        div []
            [ div [ class "activity-segment-outer" ]
                [ div [ class "timeline-item place-history-moment-outer" ]
                    [ activity_svg_line
                    , activity_add_contol
                    , div [ class "place-history-moment-content timeline-item-content primary multi-line" ]
                        ((div []
                            [ div [ class "timeline-item-title" ]
                                [ activity_place ( event, value )
                                , event_duration ( duration, "" )
                                , activity_place_control False
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
    div [ class "edit-dialog-select moment-edit-control timeline-item-title-content", attribute "role" "button", attribute "tabindex" "0" ]
        [ Components.TimeLine.ActivityIcon.icon Components.TimeLine.ActivityIcon.ActivityIconMove
        , span [ class "activity-type" ]
            [ text title ]
        , div [ class "distance-text", attribute "style" "" ]
            [ text distance ]
        ]


activity_place_visit : ( String, String ) -> Html msg
activity_place_visit ( titl, time ) =
    div [ class "timeline-item-text child-place-visit" ]
        [ a [ class "child-place-visit-content", href "/maps/place//data=!4m2!3m1!1s0x40dbdb09a36b4a29:0x8a3bd0a3bedb89d3?authuser=0&hl=ru&gl=ua" ]
            [ div [ class "child-place-visit-icon", attribute "style" "background-image:url(https://maps.gstatic.com/mapsactivities/icons/poi_icons/30_visited/tree_2x.png)" ]
                []
            , span [ class "child-place-visit-title" ]
                [ text titl ]
            ]
        , event_duration ( time, "" )
        , i [ class "child-place-visit-button material-icons-extended material-icon-with-ripple", title "Удалить запись", attribute "role" "button", attribute "tabindex" "0" ]
            [ text "delete" ]
        ]


activity_add_contol : Html msg
activity_add_contol =
    div [ class "add-a-place" ]
        [ i [ class "material-icons-extended add-a-place-icon" ]
            [ text "add_circle" ]
        , div [ class "add-a-place-text tooltip" ]
            [ text "Новое место" ]
        ]


activity_svg_line : Html msg
activity_svg_line =
    svg [ S.class "timeline-item-svg" ]
        [ line [ S.class "timeline-item-svg-line", attribute "style" "stroke: rgb(1, 87, 155);", x1 "7", x2 "7", y1 "0", y2 "100%" ]
            []
        ]


activity_place_control : Bool -> Html msg
activity_place_control b =
    div
        [ attribute "style"
            (if b then
                ""
             else
                "display:none"
            )
        ]
        [ i [ title "Привязать к дороге", class " sp-icon material-icons-extended", attribute "role" "button", attribute "style" "", attribute "tabindex" "0" ]
            [ text "auto_fix" ]
        , i [ title "Воспроизвести на карте", attribute "style" "", class " sp-icon material-icons-extended", attribute "role" "button", attribute "tabindex" "0" ]
            [ text "play_arrow" ]
        ]
