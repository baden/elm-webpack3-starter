module Components.TimeLine
    exposing
        ( Model
        , Msg
        , init
        , update
        , view
        , subscriptions
        )

import Html exposing (Html, button, div, text, i, span, hr, node, img, a)
import Html.Attributes exposing (class, type_, tabindex, attribute, title, src, href)
import Svg exposing (svg, line)
import Svg.Attributes as S exposing (version, viewBox, x, y, x1, y1, x2, y2, strokeLinecap)
import Return exposing (Return)


type alias Model =
    { value : Int
    }


defaultModel : Model
defaultModel =
    { value = 0
    }


type Msg
    = NoOp


init : ( Model, Cmd Msg )
init =
    Return.singleton defaultModel


update : Msg -> Model -> ( Model, Cmd Msg )
update msg =
    Return.singleton
        >> case msg of
            NoOp ->
                Return.zero


view : Model -> Html Msg
view model =
    div [ class "timeline-wrapper" ]
        [ header model
        , content model
        ]


header : Model -> Html Msg
header model =
    div [ class "timeline-header" ]
        [ div [ class "timeline-header-title-container" ]
            [ div [ class "timeline-title" ]
                [ text "Четверг, 10 Сентября 2015 Г." ]
            , div [ class "timeline-subtitle" ]
                []
            , div [ attribute "style" "display: none;" ]
                []
            ]
        , i [ attribute "aria-label" "Назад", class "timeline-header-button previous-date-range-button material-icons-extended material-icon-with-ripple rtl-mirrored", title "Назад", attribute "role" "button", attribute "tabindex" "0" ]
            [ text "chevron_left " ]
        , i [ attribute "aria-label" "Следующий день", class "timeline-header-button next-date-range-button material-icons-extended material-icon-with-ripple rtl-mirrored", title "Следующий день", attribute "role" "button", attribute "tabindex" "0" ]
            [ text "chevron_right " ]
          -- , i [ attribute "aria-label" "Удалить данные за день", class "timeline-header-button delete-button material-icons-extended material-icon-with-ripple", attribute "data-tooltip" "Удалить данные за день", attribute "jsaction" "delete-history.delete-selected", attribute "role" "button", attribute "tabindex" "0" ]
          --     [ text "delete " ]
        ]


content : Model -> Html Msg
content model =
    div [ class "timeline-content" ]
        [ div []
            [ top model
            , event model
            , event2 model
            , event3 model True
            , event4 model
            , event3 model False
            , event4 model
            , event3 model False
            , event4 model
            , event3 model False
            , event4 model
            , eventL model
            ]
        ]


car_image : Html.Attribute Msg
car_image =
    attribute "style" "background-image:url(https://www.gstatic.com/images/icons/material/system/2x/directions_car_black_24dp.png)"


stop_image : Html.Attribute Msg
stop_image =
    attribute "style" "background-image: url(https://maps.gstatic.com/mapsactivities/icons/activity_icons/2x/ic_activity_walking_black_24dp.png);"


top : Model -> Html Msg
top model =
    div [ class "timeline-item top-activities" ]
        [ div [ class "top-activity" ]
            [ div [ class "top-activity-icon", car_image, title "Движение" ]
                []
            , div [ class "top-activity-text" ]
                [ div [ attribute "style" "" ]
                    [ text "100 км" ]
                , div []
                    [ text "5 ч. 6 мин." ]
                ]
            ]
        , div [ class "top-activity" ]
            [ div [ class "top-activity-icon", stop_image, title "Стоянка" ]
                []
            , div [ class "top-activity-text" ]
                [ --div []
                  --    [ text "33 м" ]
                  --,
                  div []
                    [ text "5 ч. 6 мин." ]
                ]
            ]
        ]

home_image : Html.Attribute Msg
home_image =
    attribute "style" "background-image:url(https://maps.gstatic.com/mapsactivities/icons/poi_icons/30_visited/home_2x.png)"

event : Model -> Html Msg
event model =
    div [ attribute "style" "" ]
        [ div [ class "timeline-item place-history-moment-outer" ]
            [ svg [ S.class "timeline-item-svg" ]
                [ line
                    [ S.class "", attribute "style" "display:none" ]
                    []
                , line
                    [ S.class "timeline-item-svg-line", strokeLinecap "round", attribute "style" "stroke: rgb(1, 87, 155);", x1 "7", x2 "7", y1 "41", y2 "100%" ]
                    []
                ]
            , div [ class "segment-divider" ]
                []
            , div [ class "timeline-item-icon place-icon", home_image ]
                []
            , i [ attribute "style" "display:none" ]
                [ text "help" ]
            , div [ class "place-history-moment-content timeline-item-content primary multi-line" ]
                [ div [ class "timeline-item-title" ]
                    [ div [ class "edit-dialog-select moment-edit-control place-visit timeline-item-title-content", attribute "role" "button", attribute "tabindex" "0" ]
                        [ div [ attribute "style" "display:none" ]
                            []
                        , div [ class "place-visit-title" ]
                            [ text "Дом" ]
                        , i [ class "material-icons-extended drop-down" ]
                            [ text "arrow_drop_down" ]
                        ]
                    , div [ attribute "style" "display:none" ]
                        []
                    , div [ attribute "style" "display:none" ]
                        [ text "Missing visit in" ]
                    , div [ attribute "style" "display:none" ]
                        []
                    , i [ attribute "style" "display:none" ]
                        [ text "check_circle" ]
                    , div [ class "duration-text", attribute "role" "button", attribute "tabindex" "0" ]
                        [ span [ attribute "style" "display:none" ]
                            []
                        , span [ attribute "style" "display:none" ]
                            []
                        , span [ class "segment-duration-part" ]
                            [ text "11:02" ]
                        , span [ attribute "style" "display:none" ]
                            []
                        ]
                    , div [ attribute "aria-expanded" "false", attribute "aria-haspopup" "true", attribute "aria-label" "Параметры", class "place-visit-overflow-menu-button material-icons-extended material-icon-with-ripple goog-inline-block goog-menu-button", attribute "role" "menu", attribute "style" "user-select: none;", attribute "tabindex" "0" ]
                        [ div [ class "goog-inline-block goog-menu-button-outer-box" ]
                            [ div [ class "goog-inline-block goog-menu-button-inner-box" ]
                                [ div [ class "goog-inline-block goog-menu-button-caption" ]
                                    [ text "more_vert" ]
                                , div [ class "goog-inline-block goog-menu-button-dropdown" ]
                                    [ text " " ]
                                ]
                            ]
                        ]
                    ]
                , div [ class "timeline-item-text" ]
                    [ text "вулиця Мічуріна, 8, Кам’янське, Дніпропетровська область" ]
                , div [ attribute "style" "display:none" ]
                    []
                ]
            , div [ attribute "style" "display:none" ]
                []
            , div [ class "place-history-moment-content timeline-item-content primary" ]
                [ div [ class "photo-grid-wrapper", attribute "style" "" ]
                    [ div [ class "photo-grid" ]
                        [
                        text "TBD: points"
                        ]
                    ]
                , div [ attribute "style" "display:none" ]
                    []
                , div [ attribute "style" "display:none" ]
                    [ text "Подтвердить" ]
                ]
            , hr [ class "moment-divider" ]
                []
            ]
        , div [ attribute "style" "display:none" ]
            []
        ]

event2 : Model -> Html Msg
event2 model =
    div [ attribute "style" "" ]
    [ div [ attribute "style" "display:none" ]
        []
    , div [ class "travel-segment expanded" ]
        [ div [ class "", attribute "style" "display: none;" ]
            []
        , hr [ class "moment-divider" ]
            []
        , div [ class "activities-wrapper" ]
            [ div [ ]
                [ div [ attribute "style" "display:none" ]
                    []
                , div [ class "activity-segment-outer" ]
                    [ div [ class "timeline-item place-history-moment-outer" ]
                        [ svg [ S.class "timeline-item-svg" ]
                            [ line [ S.class "timeline-item-svg-line", attribute "style" "stroke:#03A9F4", x1 "7", x2 "7", y1 "0", y2 "100%" ]
                                []
                            ]
                        , div [ class "add-a-place" ]
                            [ i [ class "material-icons-extended add-a-place-icon" ]
                                [ text "add_circle" ]
                            , div [ class "add-a-place-text tooltip" ]
                                [ text "Новое место" ]
                            ]
                        , div [ class "place-history-moment-content timeline-item-content primary multi-line" ]
                            [ div []
                                [ div [ attribute "style" "display:none" ]
                                    [ text "Missing activity" ]
                                , div [ class "timeline-item-title" ]
                                    [ div [ class "edit-dialog-select moment-edit-control timeline-item-title-content", attribute "role" "button", attribute "tabindex" "0" ]
                                        [ div [ class "activity-icon", attribute "style" "background-image: url(https://maps.gstatic.com/mapsactivities/icons/activity_icons/2x/ic_activity_moving_black_24dp.png);" ]
                                            []
                                        , span [ class "activity-type" ]
                                            [ text "Движение" ]
                                        , div [ class "distance-text" ]
                                            [ text "- 170 м" ]
                                        ]
                                    , div [ attribute "style" "display:none" ]
                                        []
                                    , div [ class "duration-text", attribute "role" "button", attribute "tabindex" "0" ]
                                        [ text "4 минуты" ]
                                    , div []
                                        [ i [ attribute "style" "display:none" ]
                                            [ text "auto_fix" ]
                                        , i [ attribute "style" "display:none" ]
                                            [ text "play_arrow" ]
                                        ]
                                    , div [ class "sp-icon-placeholder" ]
                                        []
                                    ]
                                ]
                            , div [ attribute "style" "display:none" ]
                                []
                            , div [ class "photo-grid-wrapper", attribute "style" "display:none" ]
                                []
                            , div [ attribute "jstcache" "1256", attribute "style" "display:none" ]
                                []
                            ]
                        , hr [ class "moment-divider" ] []
                        ]
                    ]
                ]
            , div []
                [ div [ attribute "style" "display:none" ]
                    []
                , div [ class "activity-segment-outer" ]
                    [ div [ class "timeline-item place-history-moment-outer" ]
                        [ svg [ S.class "timeline-item-svg" ]
                            [ line [ S.class "timeline-item-svg-line", attribute "style" "stroke: rgb(1, 87, 155);", x1 "7", x2 "7", y1 "0", y2 "100%" ]
                                []
                            ]
                        , div [ class "add-a-place" ]
                            [ i [ class "material-icons-extended add-a-place-icon" ]
                                [ text "add_circle" ]
                            , div [ class "add-a-place-text tooltip" ]
                                [ text "Новое место" ]
                            ]
                        , div [ class "place-history-moment-content timeline-item-content primary multi-line" ]
                            [ div []
                                [ div [ attribute "style" "display:none" ]
                                    [ text "" ]
                                , div [ class "timeline-item-title" ]
                                    [ div [ class "edit-dialog-select moment-edit-control timeline-item-title-content", attribute "role" "button", attribute "tabindex" "0" ]
                                        [ div [ class "activity-icon", attribute "style" "background-image:url(https://www.gstatic.com/images/icons/material/system/2x/directions_car_black_24dp.png)" ]
                                            []
                                        , span [ class "activity-type" ]
                                            [ text "На автомобиле" ]
                                        , div [ class "distance-text", attribute "style" "" ]
                                            [ text "- 36,7 км" ]
                                        ]
                                    , div [ attribute "style" "display:none" ]
                                        []
                                    , div [ class "duration-text", attribute "role" "button", attribute "tabindex" "0" ]
                                        [ text "1 час 2 минуты" ]
                                    , div [ attribute "jstcache" "1264" ]
                                        [ i [ title "Привязать к дороге", class " sp-icon material-icons-extended", attribute "role" "button", attribute "style" "", attribute "tabindex" "0" ]
                                            [ text "auto_fix" ]
                                        , i [ title "Воспроизвести на карте", attribute "style" "", class " sp-icon material-icons-extended", attribute "role" "button", attribute "tabindex" "0" ]
                                            [ text "play_arrow" ]
                                        ]
                                    ]
                                ]
                            , div [ attribute "style" "display:none" ]
                                []
                            , div [ class "timeline-item-text child-place-visit", attribute "jsinstance" "*0", attribute "jstcache" "1185", attribute "ved" "0ahUKEwiE5Yji3tbWAhWlYJoKHaF4AbcQrv0BCA4oAA", attribute "vet" "32430" ]
                                [ a [ class "child-place-visit-content", href "/maps/place//data=!4m2!3m1!1s0x40dbdb09a36b4a29:0x8a3bd0a3bedb89d3?authuser=0&hl=ru&gl=ua", attribute "jsaction" "jsl._", attribute "jstcache" "1193", attribute "vet" "32212" ]
                                    [ div [ class "child-place-visit-icon", attribute "jstcache" "1194", attribute "style" "background-image:url(https://maps.gstatic.com/mapsactivities/icons/poi_icons/30_visited/tree_2x.png)" ]
                                        []
                                    , span [ class "child-place-visit-title", attribute "jsan" "7.child-place-visit-title", attribute "jstcache" "1195" ]
                                        [ text "Сквер Свободы" ]
                                    ]
                                , i [ class "child-place-visit-button material-icons-extended material-icon-with-ripple", attribute "data-tooltip" "Удалить запись", attribute "jsaction" "jsl._", attribute "jstcache" "1196", attribute "role" "button", attribute "tabindex" "0", attribute "vet" "32211" ]
                                    [ text "delete " ]
                                ]
                            , div [ attribute "style" "display:none" ]
                                []
                            ]
                        , hr [ class "moment-divider" ]
                            []
                        ]
                    ]
                ]
            ]
        ]
    ]

b_class l =
    if l then " low-confidence" else ""

event3 : Model -> Bool -> Html Msg
event3 model l =
    div [ attribute "style" "" ]
    [ div [ class <| "timeline-item place-history-moment-outer" ++ (b_class l) ]
        [ svg [ S.class "timeline-item-svg" ]
            [ line [ S.class "timeline-item-svg-line", strokeLinecap "round", attribute "style" "stroke: rgb(1, 87, 155);", x1 "7", x2 "7", y1 "0", y2 "41" ]
                []
            , line [ S.class " timeline-item-svg-line", strokeLinecap "round", attribute "style" "stroke: rgb(1, 87, 155);", x1 "7", x2 "7", y1 "41", y2 "100%" ]
                []
            ]
        , div [ class "segment-divider" ]
            []
        , div [ class "timeline-item-icon place-icon", attribute "style" "background-image: url(https://maps.gstatic.com/mapsactivities/icons/poi_icons/30_regular/generic_2x.png);" ]
            []
        , i [ title "Подробности", attribute "style" "display:none", class " sp-icon material-icons-extended", attribute "role" "button", attribute "tabindex" "0" ]
            [ text "help" ]
        , div [ class "place-history-moment-content timeline-item-content primary multi-line" ]
            [ div [ class "timeline-item-title" ]
                [ div [ class "edit-dialog-select moment-edit-control place-visit timeline-item-title-content", attribute "role" "button", attribute "tabindex" "0" ]
                    [ div [ attribute "style" "display:none" ]
                        []
                    , div [ class "place-visit-title" ]
                        [ text "Индустриальный район" ]
                    , i [ class "material-icons-extended drop-down" ]
                        [ text "arrow_drop_down" ]
                    ]

                , div [ attribute "style" "display:none" ]
                    []
                , div [ attribute "style" "display:none" ]
                    []
                , i [ title "Пометить для отчета", attribute "style" "", class " sp-icon material-icons-extended", attribute "role" "button", attribute "tabindex" "0" ]
                    [ text "check_circle" ]
                , div [ class "duration-text", attribute "role" "button", attribute "tabindex" "0" ]
                    [ span [ attribute "style" "" ]
                        [ span [ class "segment-duration-part" ]
                            [ text "12:04" ]
                        , text " – "
                        , span [ class "segment-duration-part" ]
                            [ text "12:15" ]
                        ]
                    ]
                , div [ attribute "aria-expanded" "false", attribute "aria-haspopup" "true", attribute "aria-label" "Параметры", class "place-visit-overflow-menu-button material-icons-extended material-icon-with-ripple goog-inline-block goog-menu-button", attribute "role" "menu", attribute "style" "user-select: none;", attribute "tabindex" "0", attribute "ved" "4958" ]
                    [ div [ class "goog-inline-block goog-menu-button-outer-box" ]
                        [ div [ class "goog-inline-block goog-menu-button-inner-box" ]
                            [ div [ class "goog-inline-block goog-menu-button-caption" ]
                                [ text "more_vert" ]
                            , div [ class "goog-inline-block goog-menu-button-dropdown" ]
                                [ text " " ]
                            ]
                        ]
                    ]
                ]
            , div [ class "timeline-item-text" ]
                [ text "Днипро, Днепропетровская область, 49000" ]
            , div [ attribute "style" "display:none" ]
                []
            ]
        , div [ attribute "style" "display:none" ]
            []
        , div [ class "place-history-moment-content timeline-item-content primary" ]
            [ div [ class "photo-grid-wrapper", attribute "style" "display:none" ]
                []
            , div [ attribute "style" "display:none" ]
                []
            , div [ class "confirm-place-visit-button material-raised-button material-raised-button-default", attribute "style" (if l then "" else "display:none"), attribute "role" "button", attribute "tabindex" "0" ]
                [ text "Подтвердить" ]
            ]
        , hr [ class "moment-divider" ]
            []
        ]
    , div [ attribute "style" "display:none" ]
        []
    ]

-- TODO: add class .expanded to .travel-segment for animating
event4 : Model -> Html Msg
event4 model =
    div [ attribute "style" "" ]
    [ div [ attribute "style" "display:none" ]
        []
    , div [ class "travel-segment" ]
        [ div [ class "timeline-item travel-segment-summary", attribute "role" "button", attribute "tabindex" "0" ]
            [ svg [ S.class "timeline-item-svg" ]
                [ line [ S.class "timeline-item-svg-line", attribute "style" "stroke:#01579B", attribute "x1" "7", attribute "x2" "7", attribute "y1" "0", attribute "y2" "100%" ]
                    []
                ]
            , div [ class "activity-expand-toggle" ]
                [ i [ class "material-icons-extended rtl-mirrored activity-summary-chevron upper" ]
                    [ text "chevron_left" ]
                , i [ class "material-icons-extended rtl-mirrored activity-summary-chevron lower" ]
                    [ text "chevron_right" ]
                ]
            , div [ class "timeline-item-content primary" ]
                [ div [ class "timeline-item-title" ]
                    [ div [ class "travel-segment-summary-item" ]
                        [ div [ class "activity-icon", attribute "style" "background-image: url(https://www.gstatic.com/images/icons/material/system/2x/directions_car_black_24dp.png);" ]
                            []
                        , i [ class "material-icons-extended rtl-mirrored chevron-icon" ]
                            [ text "chevron_right " ]
                        ]
                    , div [ class "travel-segment-summary-item" ]
                        [ div [ class "activity-icon", attribute "style" "background-image:url(https://maps.gstatic.com/mapsactivities/icons/activity_icons/2x/ic_activity_walking_black_24dp.png)" ]
                            []
                        , i [ class "", attribute "style" "display: none;" ]
                            [ text "chevron_right " ]
                        ]
                    , div [ class "duration-text" ]
                        [ text "3 часа 52 минуты" ]
                    ]
                ]
            ]
        , hr [ class "moment-divider" ]
            []
        , div [ class "activities-wrapper" ]
            []
        ]
    ]

eventL : Model -> Html Msg
eventL model =
    div [ attribute "style" "" ]
    [ div [ class "timeline-item place-history-moment-outer" ]
        [ svg [ S.class "timeline-item-svg" ]
            [ line [ S.class "timeline-item-svg-line", attribute "stroke-linecap" "round", attribute "style" "stroke:#01579B", attribute "x1" "7", attribute "x2" "7", attribute "y1" "0", attribute "y2" "41" ]
                []
            , line [ S.class "timeline-item-svg-line", attribute "stroke-linecap" "round", attribute "style" "display:none", attribute "x1" "7", attribute "x2" "7", attribute "y1" "41", attribute "y2" "100%" ]
                []
            ]
        , div [ class "segment-divider" ]
            []
        , div [ class "timeline-item-icon place-icon", attribute "style" "background-image:url(https://maps.gstatic.com/mapsactivities/icons/poi_icons/30_visited/home_2x.png)" ]
            []
        , i [ attribute "style" "display:none" ]
            [ text "help" ]
        , div [ class "place-history-moment-content timeline-item-content primary multi-line" ]
            [ div [ class "timeline-item-title" ]
                [ div [ class "edit-dialog-select moment-edit-control place-visit timeline-item-title-content", attribute "role" "button", attribute "tabindex" "0" ]
                    [ div [ attribute "style" "display:none" ]
                        []
                    , div [ class "place-visit-title" ]
                        [ text "Дом" ]
                    , i [ class "material-icons-extended drop-down" ]
                        [ text "arrow_drop_down" ]
                    ]
                , div [ attribute "style" "display:none" ]
                    []
                , div [ attribute "style" "display:none" ]
                    [ text "Missing visit in" ]
                , div [ attribute "style" "display:none" ]
                    []
                , i [ attribute "style" "display:none" ]
                    [ text "check_circle" ]
                , div [ class "duration-text", attribute "role" "button", attribute "tabindex" "0" ]
                    [ span [ attribute "style" "display:none" ]
                        []
                    , span [ class "segment-duration-part" ]
                        [ text "16:56" ]
                    , span [ attribute "style" "display:none" ]
                        []
                    , span [ attribute "style" "display:none" ]
                        []
                    ]
                , div [ attribute "aria-expanded" "false", attribute "aria-haspopup" "true", attribute "aria-label" "Параметры", class "place-visit-overflow-menu-button material-icons-extended material-icon-with-ripple goog-inline-block goog-menu-button", attribute "role" "button", attribute "style" "user-select: none;", attribute "tabindex" "0" ]
                    [ div [ class "goog-inline-block goog-menu-button-outer-box" ]
                        [ div [ class "goog-inline-block goog-menu-button-inner-box" ]
                            [ div [ class "goog-inline-block goog-menu-button-caption" ]
                                [ text "more_vert" ]
                            , div [ class "goog-inline-block goog-menu-button-dropdown" ]
                                [ text " " ]
                            ]
                        ]
                    ]
                ]
            , div [ class "timeline-item-text" ]
                [ text "вулиця Мічуріна, 8, Кам’янське, Дніпропетровська область" ]
            , div [ attribute "style" "display:none" ]
                []
            ]
        , div [ attribute "style" "display:none" ]
            []
        , div [ class "place-history-moment-content timeline-item-content primary" ]
            [ div [ class "photo-grid-wrapper", attribute "style" "display:none" ]
                []
            , div [ attribute "style" "display:none" ]
                []

            , div [ class "confirm-place-visit-button material-raised-button material-raised-button-default", attribute "jsaction" "jsl._", attribute "jsan" "7.confirm-place-visit-button,7.material-raised-button,7.material-raised-button-default,0.vet,0.role,0.tabindex,22.jsaction", attribute "jstcache" "1176", attribute "role" "button", attribute "tabindex" "0", attribute "style" "display:none" ]
                [ text "Подтвердить" ]
            ]
        , hr [ class "moment-divider" ]
            []
        ]
    , div [ attribute "style" "display:none" ]
        []
    ]

subscriptions : Model -> Sub Msg
subscriptions =
    always Sub.none
