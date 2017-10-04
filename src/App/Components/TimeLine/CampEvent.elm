module Components.TimeLine.CampEvent exposing (campEvent, CampEvent)

import Html exposing (Html, div, text, i, hr, span, a)
import Html.Attributes exposing (class, tabindex, attribute, title, href)
import Svg exposing (svg, line)
import Svg.Attributes as S exposing (version, viewBox, x, y, x1, y1, x2, y2, strokeLinecap)
import Components.TimeLine.Event exposing (event_duration)
import Components.TimeLine.Item exposing (item, item_content, item_title, item_title_content, item_event, item_subtitle)


type alias CampEvent =
    {}



-- Public API


campEvent : ( Bool, ( Bool, Bool ), Html msg, String, ( String, String ), String ) -> Html msg
campEvent ( low_confidence, ( before, after ), place_icon, place, ( from, to ), address ) =
    let
        b_class l =
            if l then
                " low-confidence"
            else
                ""

        visits =
            [ item_event ( "Выключено зажигание", ( "10:20", "" ) )
            , item_event ( "Включено зажигание", ( "10:20", "" ) )
            ]
    in
        div []
            [ (item ("place-history-moment-outer" ++ (b_class low_confidence)) Nothing)
                [ timeline_svg ( before, after )
                , div [ class "segment-divider" ] []
                , place_icon
                , (item_content True)
                    ((div []
                        [ item_title
                            [ event_place place
                            , event_duration ( from, to )
                            , event_params
                            ]
                        , item_subtitle address
                        ]
                     )
                        :: visits
                    )
                , event_history low_confidence
                , hr [ class "moment-divider" ] []
                ]
            ]



-- Private


event_history : Bool -> Html msg
event_history l =
    (item_content False)
        [ div [ class "photo-grid-wrapper", attribute "style" "display:none" ]
            [ div [ class "photo-grid" ]
                [ text "Заправка 30л"
                ]
            ]
        , div [ attribute "style" "display:none" ]
            []
        , div
            [ class "confirm-place-visit-button material-raised-button material-raised-button-default"
            , attribute "style"
                (if l then
                    ""
                 else
                    "display:none"
                )
            , attribute "role" "button"
            , tabindex 0
            ]
            [ text "Подтвердить" ]
        ]


event_params : Html msg
event_params =
    div [ attribute "aria-expanded" "false", attribute "aria-haspopup" "true", attribute "aria-label" "Параметры", class "place-visit-overflow-menu-button material-icons-extended material-icon-with-ripple goog-inline-block goog-menu-button", attribute "role" "menu", attribute "style" "user-select: none;", attribute "tabindex" "0" ]
        [ div [ class "goog-inline-block goog-menu-button-outer-box" ]
            [ div [ class "goog-inline-block goog-menu-button-inner-box" ]
                [ div [ class "goog-inline-block goog-menu-button-caption" ]
                    [ text "more_vert" ]
                , div [ class "goog-inline-block goog-menu-button-dropdown" ]
                    [ text " " ]
                ]
            ]
        ]


event_place : String -> Html msg
event_place title =
    item_title_content
        [ div [ attribute "style" "display:none" ]
            []
        , div [ class "place-visit-title" ]
            [ text title ]
        , i [ class "material-icons-extended drop-down" ]
            [ text "arrow_drop_down" ]
        ]


timeline_svg : ( Bool, Bool ) -> Html msg
timeline_svg ( t, b ) =
    svg [ S.class "timeline-item-svg" ]
        [ line
            (if t then
                [ S.class "timeline-item-svg-line", strokeLinecap "round", attribute "style" "stroke: rgb(1, 87, 155);", x1 "7", x2 "7", y1 "0", y2 "41" ]
             else
                [ S.class "", attribute "style" "display:none" ]
            )
            []
        , line
            (if b then
                [ S.class "timeline-item-svg-line", strokeLinecap "round", attribute "style" "stroke: rgb(1, 87, 155);", x1 "7", x2 "7", y1 "41", y2 "100%" ]
             else
                [ S.class "", attribute "style" "display:none" ]
            )
            []
        ]
