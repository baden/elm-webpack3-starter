module Components.TimeLine
    exposing
        ( Model
        , Msg
        , init
        , update
        , view
        , subscriptions
        )

import Html exposing (Html, button, div, text, i, span, hr, node, img)
import Html.Attributes exposing (class, type_, tabindex, attribute, title, src)
import Svg exposing (svg, line)
import Svg.Attributes as S exposing (version, viewBox, x, y)
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
            , event3 model
            , event4 model
            , event3 model
            , event4 model
            , event3 model
            , event4 model
            , event3 model
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
                    [ S.class "timeline-item-svg-line", attribute "stroke-linecap" "round", attribute "style" "stroke: rgb(1, 87, 155);", attribute "x1" "7", attribute "x2" "7", attribute "y1" "41", attribute "y2" "100%" ]
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
            , div [ attribute "jstcache" "1173", attribute "style" "display:none" ]
                []
            , div [ class "place-history-moment-content timeline-item-content primary" ]
                [ div [ class "photo-grid-wrapper", attribute "style" "" ]
                    [ div [ class "photo-grid" ]
                        [
                        text "TBD"
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
            [ div [ attribute "jsinstance" "*0", attribute "jstcache" "1243" ]
                [ div [ attribute "jstcache" "1244", attribute "style" "display:none" ]
                    []
                , div [ class "activity-segment-outer", attribute "jsaction" "mouseover:jsl._;mouseout:jsl._", attribute "jsan" "t-Spgp-bb_9Oc,7.activity-segment-outer,22.jsaction", attribute "jstcache" "1245" ]
                    [ div [ class "timeline-item place-history-moment-outer", attribute "data-segment-key" "29:1441872131444:1441875878265", attribute "jsan" "7.timeline-item,7.place-history-moment-outer,0.data-segment-key", attribute "jstcache" "1249" ]
                        [ svg [ S.class "timeline-item-svg" ]
                            [ line [ S.class "timeline-item-svg-line", attribute "jsan" "7.timeline-item-svg-line,4.style,0.x1,0.x2,0.y1,0.y2", attribute "jstcache" "1250", attribute "style" "stroke: rgb(1, 87, 155);", attribute "x1" "7", attribute "x2" "7", attribute "y1" "0", attribute "y2" "100%" ]
                                []
                            ]
                        , div [ class "add-a-place", attribute "jstcache" "1251" ]
                            [ i [ class "material-icons-extended add-a-place-icon", attribute "jsaction" "jsl._", attribute "jstcache" "1298", attribute "vet" "17146" ]
                                [ text "add_circle" ]
                            , div [ class "add-a-place-text tooltip" ]
                                [ text "Новое место" ]
                            ]
                        , div [ class "place-history-moment-content timeline-item-content primary multi-line", attribute "jstcache" "1252" ]
                            [ div [ attribute "jstcache" "1253" ]
                                [ div [ attribute "jstcache" "1260", attribute "style" "display:none" ]
                                    [ text "Missing activity" ]
                                , div [ class "timeline-item-title" ]
                                    [ div [ class "edit-dialog-select moment-edit-control timeline-item-title-content", attribute "data-activity" "29", attribute "data-distance" "36746", attribute "jsaction" "jsl._", attribute "jsan" "7.edit-dialog-select,7.moment-edit-control,7.timeline-item-title-content,0.data-activity,0.data-distance,0.vet,0.role,0.tabindex,22.jsaction,t-cnaaX15qjc8", attribute "jstcache" "1261", attribute "role" "button", attribute "tabindex" "0", attribute "vet" "6495" ]
                                        [ div [ class "activity-icon", attribute "jstcache" "1268", attribute "style" "background-image:url(https://www.gstatic.com/images/icons/material/system/2x/directions_car_black_24dp.png)" ]
                                            []
                                        , span [ class "activity-type", attribute "jsan" "7.activity-type", attribute "jstcache" "1269" ]
                                            [ text "На автомобиле" ]
                                        , div [ class " distance-text", attribute "jsan" "7.distance-text", attribute "jstcache" "1270", attribute "style" "" ]
                                            [ text "- 36,7 км" ]
                                        ]
                                    , div [ attribute "jstcache" "1262", attribute "style" "display:none" ]
                                        []
                                    , div [ class "duration-text", attribute "jsaction" "jsl._", attribute "jsan" "t-RStIBSeQF44,7.duration-text,0.vet,0.role,0.tabindex,22.jsaction", attribute "jstcache" "1263", attribute "role" "button", attribute "tabindex" "0", attribute "vet" "6498" ]
                                        [ text "1 час 2 минуты" ]
                                    , div [ attribute "jstcache" "1264" ]
                                        [ i [ attribute "aria-label" "Привязать к дороге", class " sp-icon material-icons-extended", attribute "data-segment-key" "29:1441872131444:1441875878265", attribute "data-tooltip" "Привязать к дороге", attribute "jsaction" "activity-segment-tooltip.sp-icon-click", attribute "jsan" "7.sp-icon,7.material-icons-extended,0.data-segment-key,0.vet,0.aria-label,0.data-tooltip,0.role,0.tabindex,22.jsaction", attribute "jstcache" "1277", attribute "role" "button", attribute "style" "", attribute "tabindex" "0", attribute "vet" "21780" ]
                                            [ text "auto_fix" ]
                                        , i [ attribute "jstcache" "1278", attribute "style" "display:none" ]
                                            [ text "play_arrow" ]
                                        ]
                                    , div [ class "", attribute "jstcache" "1265", attribute "style" "display: none;" ]
                                        []
                                    ]
                                ]
                            , div [ attribute "jstcache" "1254", attribute "style" "display:none" ]
                                []
                            , div [ class "photo-grid-wrapper", attribute "jstcache" "1255", attribute "style" "display:none" ]
                                []
                            , div [ attribute "jstcache" "1256", attribute "style" "display:none" ]
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


event3 : Model -> Html Msg
event3 model =
    div [ attribute "jsinstance" "3", attribute "jstcache" "1130", attribute "style" "" ]
    [ div [ class "timeline-item place-history-moment-outer", attribute "jsaction" "mouseover:jsl._;mouseout:jsl._", attribute "jsan" "t-cqIlb7MOmE0,7.timeline-item,7.place-history-moment-outer,0.ved,22.jsaction", attribute "jstcache" "1162", attribute "ved" "0ahUKEwiS5ebWpNXWAhWCFZoKHRCWCrAQyzIIPCgC" ]
        [ svg [ S.class "timeline-item-svg" ]
            [ line [ S.class "timeline-item-svg-line", attribute "jsan" "7.timeline-item-svg-line,4.style,0.stroke-linecap,0.x1,0.x2,0.y1,0.y2", attribute "jstcache" "1165", attribute "stroke-linecap" "round", attribute "style" "stroke: rgb(1, 87, 155);", attribute "x1" "7", attribute "x2" "7", attribute "y1" "0", attribute "y2" "41" ]
                []
            , line [ S.class " timeline-item-svg-line", attribute "jsan" "7.timeline-item-svg-line,4.style,0.stroke-linecap,0.x1,0.x2,0.y1,0.y2", attribute "jstcache" "1166", attribute "stroke-linecap" "round", attribute "style" "stroke: rgb(1, 87, 155);", attribute "x1" "7", attribute "x2" "7", attribute "y1" "41", attribute "y2" "100%" ]
                []
            ]
        , div [ class "segment-divider" ]
            []
        , div [ class "timeline-item-icon place-icon", attribute "jsaction" "jsl._", attribute "jsan" "t-611xI8HyBqk,7.timeline-item-icon,7.place-icon,5.background-image,22.jsaction", attribute "jstcache" "1167", attribute "style" "background-image: url(https://maps.gstatic.com/mapsactivities/icons/poi_icons/30_regular/generic_2x.png);" ]
            []
        , i [ attribute "jstcache" "1168", attribute "style" "display:none" ]
            [ text "help" ]
        , div [ class "place-history-moment-content timeline-item-content primary multi-line", attribute "jstcache" "1169" ]
            [ div [ class "timeline-item-title", attribute "jstcache" "1170" ]
                [ div [ class "edit-dialog-select moment-edit-control place-visit timeline-item-title-content", attribute "jsaction" "jsl._", attribute "jsan" "7.edit-dialog-select,7.moment-edit-control,7.place-visit,7.timeline-item-title-content,0.vet,0.role,0.tabindex,22.jsaction,t-evQS7_FO6FI", attribute "jstcache" "1200", attribute "role" "button", attribute "tabindex" "0", attribute "vet" "6495" ]
                    [ div [ attribute "jstcache" "1209", attribute "style" "display:none" ]
                        []
                    , div [ class "place-visit-title", attribute "jsan" "7.place-visit-title", attribute "jstcache" "1210" ]
                        [ text "Индустриальный район" ]
                    , i [ class "material-icons-extended drop-down" ]
                        [ text "arrow_drop_down" ]
                    ]
                , div [ attribute "jstcache" "1201", attribute "style" "display:none" ]
                    []
                , div [ attribute "jstcache" "1202", attribute "style" "display:none" ]
                    [ text "Missing visit in" ]
                , div [ attribute "jstcache" "1203", attribute "style" "display:none" ]
                    []
                , i [ attribute "jstcache" "1204", attribute "style" "display:none" ]
                    [ text "check_circle" ]
                , div [ class "duration-text", attribute "jsaction" "jsl._", attribute "jsan" "7.duration-text,0.role,0.tabindex,0.vet,22.jsaction,t-qqFDORzJIs4", attribute "jstcache" "1205", attribute "role" "button", attribute "tabindex" "0", attribute "vet" "6498" ]
                    [ span [ attribute "jstcache" "1213", attribute "style" "" ]
                        [ span [ class "segment-duration-part", attribute "jsan" "7.segment-duration-part", attribute "jstcache" "1218" ]
                            [ text "12:04" ]
                        , text " – "
                        , span [ class "segment-duration-part", attribute "jsan" "7.segment-duration-part", attribute "jstcache" "1219" ]
                            [ text "12:15" ]
                        ]
                    , span [ class "", attribute "jstcache" "1214", attribute "style" "display: none;" ]
                        [ text "21:33" ]
                    , span [ attribute "jstcache" "1215", attribute "style" "display:none" ]
                        []
                    , span [ attribute "jstcache" "1216", attribute "style" "display:none" ]
                        []
                    ]
                , div [ attribute "aria-expanded" "false", attribute "aria-haspopup" "true", attribute "aria-label" "Параметры", class "place-visit-overflow-menu-button material-icons-extended material-icon-with-ripple goog-inline-block goog-menu-button", attribute "jsan" "7.place-visit-overflow-menu-button,7.material-icons-extended,7.material-icon-with-ripple,0.ved,0.aria-label,0.role", attribute "jstcache" "1206", attribute "role" "menu", attribute "style" "user-select: none;", attribute "tabindex" "0", attribute "ved" "4958" ]
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
            , div [ class "timeline-item-text", attribute "jsan" "7.timeline-item-text", attribute "jstcache" "1171" ]
                [ text "Днипро, Днепропетровская область, 49000" ]
            , div [ attribute "jstcache" "1172", attribute "style" "display:none" ]
                []
            ]
        , div [ attribute "jstcache" "1173", attribute "style" "display:none" ]
            []
        , div [ class "place-history-moment-content timeline-item-content primary" ]
            [ div [ class "photo-grid-wrapper", attribute "jstcache" "1174", attribute "style" "display:none" ]
                []
            , div [ attribute "jstcache" "1175", attribute "style" "display:none" ]
                []
            , div [ attribute "jstcache" "1176", attribute "style" "display:none" ]
                [ text "Подтвердить" ]
            ]
        , hr [ class "moment-divider" ]
            []
        ]
    , div [ attribute "jstcache" "1163", attribute "style" "display:none" ]
        []
    ]

-- TODO: add class .expanded to .travel-segment for animating
event4 : Model -> Html Msg
event4 model =
    div [ attribute "jsinstance" "4", attribute "jstcache" "1130", attribute "style" "" ]
    [ div [ attribute "jstcache" "1162", attribute "style" "display:none" ]
        []
    , div [ class "travel-segment", attribute "jsan" "t-qOqmYdn-unA,7.travel-segment", attribute "jstcache" "1163" ]
        [ div [ class "timeline-item travel-segment-summary", attribute "jsaction" "jsl._", attribute "jsan" "7.timeline-item,7.travel-segment-summary,0.vet,0.role,0.tabindex,22.jsaction,t-9mHge1tbxDg", attribute "jstcache" "1242", attribute "role" "button", attribute "tabindex" "0", attribute "vet" "13087" ]
            [ svg [ S.class "timeline-item-svg" ]
                [ line [ S.class "timeline-item-svg-line", attribute "jsan" "7.timeline-item-svg-line,4.style,0.x1,0.x2,0.y1,0.y2", attribute "jstcache" "1301", attribute "style" "stroke:#01579B", attribute "x1" "7", attribute "x2" "7", attribute "y1" "0", attribute "y2" "100%" ]
                    []
                ]
            , div [ class "activity-expand-toggle" ]
                [ i [ class "material-icons-extended rtl-mirrored activity-summary-chevron upper" ]
                    [ text "chevron_left" ]
                , i [ class "material-icons-extended rtl-mirrored activity-summary-chevron lower" ]
                    [ text "chevron_right" ]
                ]
            , div [ class "timeline-item-content primary", attribute "jstcache" "1302" ]
                [ div [ class "timeline-item-title" ]
                    [ div [ class "travel-segment-summary-item", attribute "jsinstance" "0", attribute "jstcache" "1303" ]
                        [ div [ class "activity-icon", attribute "jstcache" "1311", attribute "style" "background-image: url(https://www.gstatic.com/images/icons/material/system/2x/directions_car_black_24dp.png);" ]
                            []
                        , i [ class "material-icons-extended rtl-mirrored chevron-icon", attribute "jsan" "7.material-icons-extended,7.rtl-mirrored,7.chevron-icon", attribute "jstcache" "1312" ]
                            [ text "chevron_right " ]
                        ]
                    , div [ class "travel-segment-summary-item", attribute "jsinstance" "*1", attribute "jstcache" "1303" ]
                        [ div [ class "activity-icon", attribute "jstcache" "1311", attribute "style" "background-image:url(https://maps.gstatic.com/mapsactivities/icons/activity_icons/2x/ic_activity_walking_black_24dp.png)" ]
                            []
                        , i [ class "", attribute "jstcache" "1312", attribute "style" "display: none;" ]
                            [ text "chevron_right " ]
                        ]
                    , div [ class "duration-text", attribute "jsan" "7.duration-text", attribute "jstcache" "1304" ]
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
    div [ attribute "jsinstance" "*7", attribute "jstcache" "1130", attribute "style" "" ]
    [ div [ class "timeline-item place-history-moment-outer", attribute "jsaction" "mouseover:jsl._;mouseout:jsl._", attribute "jsan" "t-cqIlb7MOmE0,7.timeline-item,7.place-history-moment-outer,0.ved,22.jsaction", attribute "jstcache" "1162", attribute "ved" "0ahUKEwiS5ebWpNXWAhWCFZoKHRCWCrAQxzIIVigG" ]
        [ svg [ S.class "timeline-item-svg" ]
            [ line [ S.class "timeline-item-svg-line", attribute "jsan" "7.timeline-item-svg-line,4.style,0.stroke-linecap,0.x1,0.x2,0.y1,0.y2", attribute "jstcache" "1165", attribute "stroke-linecap" "round", attribute "style" "stroke:#01579B", attribute "x1" "7", attribute "x2" "7", attribute "y1" "0", attribute "y2" "41" ]
                []
            , line [ S.class "timeline-item-svg-line", attribute "jsan" "7.timeline-item-svg-line,0.stroke-linecap,0.x1,0.x2,0.y1,0.y2", attribute "jstcache" "1166", attribute "stroke-linecap" "round", attribute "style" "display:none", attribute "x1" "7", attribute "x2" "7", attribute "y1" "41", attribute "y2" "100%" ]
                []
            ]
        , div [ class "segment-divider" ]
            []
        , div [ class "timeline-item-icon place-icon", attribute "jsaction" "jsl._", attribute "jsan" "t-611xI8HyBqk,7.timeline-item-icon,7.place-icon,5.background-image,22.jsaction", attribute "jstcache" "1167", attribute "style" "background-image:url(https://maps.gstatic.com/mapsactivities/icons/poi_icons/30_visited/home_2x.png)" ]
            []
        , i [ attribute "jstcache" "1168", attribute "style" "display:none" ]
            [ text "help" ]
        , div [ class "place-history-moment-content timeline-item-content primary multi-line", attribute "jstcache" "1169" ]
            [ div [ class "timeline-item-title", attribute "jstcache" "1170" ]
                [ div [ class "edit-dialog-select moment-edit-control place-visit timeline-item-title-content", attribute "jsaction" "jsl._", attribute "jsan" "7.edit-dialog-select,7.moment-edit-control,7.place-visit,7.timeline-item-title-content,0.vet,0.role,0.tabindex,22.jsaction,t-evQS7_FO6FI", attribute "jstcache" "1200", attribute "role" "button", attribute "tabindex" "0", attribute "vet" "6495" ]
                    [ div [ attribute "jstcache" "1209", attribute "style" "display:none" ]
                        []
                    , div [ class "place-visit-title", attribute "jsan" "7.place-visit-title", attribute "jstcache" "1210" ]
                        [ text "Дом" ]
                    , i [ class "material-icons-extended drop-down" ]
                        [ text "arrow_drop_down" ]
                    ]
                , div [ attribute "jstcache" "1201", attribute "style" "display:none" ]
                    []
                , div [ attribute "jstcache" "1202", attribute "style" "display:none" ]
                    [ text "Missing visit in" ]
                , div [ attribute "jstcache" "1203", attribute "style" "display:none" ]
                    []
                , i [ attribute "jstcache" "1204", attribute "style" "display:none" ]
                    [ text "check_circle" ]
                , div [ class "duration-text", attribute "jsaction" "jsl._", attribute "jsan" "7.duration-text,0.role,0.tabindex,0.vet,22.jsaction,t-qqFDORzJIs4", attribute "jstcache" "1205", attribute "role" "button", attribute "tabindex" "0", attribute "vet" "6498" ]
                    [ span [ attribute "jstcache" "1213", attribute "style" "display:none" ]
                        []
                    , span [ class "segment-duration-part", attribute "jsan" "7.segment-duration-part", attribute "jstcache" "1214" ]
                        [ text "16:56" ]
                    , span [ attribute "jstcache" "1215", attribute "style" "display:none" ]
                        []
                    , span [ attribute "jstcache" "1216", attribute "style" "display:none" ]
                        []
                    ]
                , div [ attribute "aria-expanded" "false", attribute "aria-haspopup" "true", attribute "aria-label" "Параметры", class "place-visit-overflow-menu-button material-icons-extended material-icon-with-ripple goog-inline-block goog-menu-button", attribute "jsan" "7.place-visit-overflow-menu-button,7.material-icons-extended,7.material-icon-with-ripple,0.ved,0.aria-label,0.role", attribute "jstcache" "1206", attribute "role" "button", attribute "style" "user-select: none;", attribute "tabindex" "0", attribute "ved" "4958" ]
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
            , div [ class "timeline-item-text", attribute "jsan" "7.timeline-item-text", attribute "jstcache" "1171" ]
                [ text "вулиця Мічуріна, 8, Кам’янське, Дніпропетровська область" ]
            , div [ attribute "jstcache" "1172", attribute "style" "display:none" ]
                []
            ]
        , div [ attribute "jstcache" "1173", attribute "style" "display:none" ]
            []
        , div [ class "place-history-moment-content timeline-item-content primary" ]
            [ div [ class "photo-grid-wrapper", attribute "jstcache" "1174", attribute "style" "display:none" ]
                []
            , div [ attribute "jstcache" "1175", attribute "style" "display:none" ]
                []
            , div [ attribute "jstcache" "1176", attribute "style" "display:none" ]
                [ text "Подтвердить" ]
            ]
        , hr [ class "moment-divider" ]
            []
        ]
    , div [ attribute "jstcache" "1163", attribute "style" "display:none" ]
        []
    ]

subscriptions : Model -> Sub Msg
subscriptions =
    always Sub.none
