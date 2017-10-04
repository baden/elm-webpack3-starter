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
import Html.Events exposing (onClick)
import Svg exposing (svg, line)
import Svg.Attributes as S exposing (version, viewBox, x, y, x1, y1, x2, y2, strokeLinecap)
import Return exposing (Return)


type alias Model =
    { value : Int
    , expanded : Bool
    }


defaultModel : Model
defaultModel =
    { value = 0
    , expanded = False
    }


type Msg
    = NoOp
    | ExpandTravel


init : ( Model, Cmd Msg )
init =
    Return.singleton defaultModel


update : Msg -> Model -> ( Model, Cmd Msg )
update msg =
    Return.singleton
        >> case msg of
            NoOp ->
                Return.zero

            ExpandTravel ->
                Return.map (\m -> {m | expanded = not m.expanded})


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
        , i [ class "timeline-header-button previous-date-range-button material-icons-extended material-icon-with-ripple rtl-mirrored", title "Предыдущий день", attribute "role" "button", attribute "tabindex" "0" ]
            [ text "chevron_left " ]
        , i [ class "timeline-header-button next-date-range-button material-icons-extended material-icon-with-ripple rtl-mirrored", title "Следующий день", attribute "role" "button", attribute "tabindex" "0" ]
            [ text "chevron_right " ]
          -- , i [ attribute "aria-label" "Удалить данные за день", class "timeline-header-button delete-button material-icons-extended material-icon-with-ripple", attribute "data-tooltip" "Удалить данные за день", attribute "jsaction" "delete-history.delete-selected", attribute "role" "button", attribute "tabindex" "0" ]
          --     [ text "delete " ]
        ]


content : Model -> Html Msg
content model =
    div [ class "timeline-content" ]
        [ div []
            [ top model
            , event model False
            , event2 model
            , event3 model True
            , event4 model
            , event3 model False
            , event4 model
            , event3 model False
            , event4 model
            , event3 model False
            , event4 model
            , eventL model False
            ]
        ]


car_image : Html.Attribute Msg
car_image =
    attribute "style" "background-image:url(https://www.gstatic.com/images/icons/material/system/2x/directions_car_black_24dp.png)"


stop_image : Html.Attribute Msg
stop_image =
    attribute "style" "background-image: url(https://maps.gstatic.com/mapsactivities/icons/activity_icons/2x/ic_activity_walking_black_24dp.png);"


top_activity : (String, (Html.Attribute Msg), String, String) -> Html Msg
top_activity (titl, img, dist, dur) =
    div [ class "top-activity" ]
        [ div [ class "top-activity-icon", img, title titl ]
            []
        , div [ class "top-activity-text" ]
            [ div [ attribute "style" "" ]
                [ text dist ]
            , div []
                [ text dur ]
            ]
        ]

top : Model -> Html Msg
top model =
    div [ class "timeline-item top-activities" ]
        [ top_activity ("Движение", car_image, "100 км", "5 ч. 6 мин.")
        , top_activity ("Стоянка", stop_image, "", "5 ч. 6 мин.")
        ]


home_image : Html Msg
home_image =
    div
        [ class "timeline-item-icon place-icon"
        , attribute "style" "background-image:url(https://maps.gstatic.com/mapsactivities/icons/poi_icons/30_visited/home_2x.png)"
        ]
        []

poi_image : Html Msg
poi_image =
    div [ class "timeline-item-icon place-icon"
        , attribute "style" "background-image: url(https://maps.gstatic.com/mapsactivities/icons/poi_icons/30_regular/generic_2x.png);"
        ]
        []


timeline_svg : (Bool, Bool) -> Html Msg
timeline_svg (t, b) =
    svg [ S.class "timeline-item-svg" ]
        [ line
            (if t then
                [ S.class "timeline-item-svg-line", strokeLinecap "round", attribute "style" "stroke: rgb(1, 87, 155);", x1 "7", x2 "7", y1 "0", y2 "41" ]
            else
                [ S.class "", attribute "style" "display:none" ])
            []
        , line
            (if b then
                [ S.class "timeline-item-svg-line", strokeLinecap "round", attribute "style" "stroke: rgb(1, 87, 155);", x1 "7", x2 "7", y1 "41", y2 "100%" ]
            else
                [ S.class "", attribute "style" "display:none" ]
            )
            []
        ]

activity_svg_line : Html Msg
activity_svg_line =
    svg [ S.class "timeline-item-svg" ]
        [ line [ S.class "timeline-item-svg-line", attribute "style" "stroke: rgb(1, 87, 155);", x1 "7", x2 "7", y1 "0", y2 "100%" ]
            []
        ]


event_place : String -> Html Msg
event_place title =
    div [ class "edit-dialog-select moment-edit-control place-visit timeline-item-title-content", attribute "role" "button", attribute "tabindex" "0" ]
        [ div [ attribute "style" "display:none" ]
            []
        , div [ class "place-visit-title" ]
            [ text title ]
        , i [ class "material-icons-extended drop-down" ]
            [ text "arrow_drop_down" ]
        ]


event_duration : ( String, String ) -> Html Msg
event_duration ( f, t ) =
    if t == "" then
        div [ class "duration-text", attribute "role" "button", attribute "tabindex" "0" ]
            [ text f ]
    else
        div [ class "duration-text", attribute "role" "button", attribute "tabindex" "0" ]
            [ span [ attribute "style" "" ]
                [ span [ class "segment-duration-part" ]
                    [ text f ]
                , text " – "
                , span [ class "segment-duration-part" ]
                    [ text t ]
                ]
            ]


event_params : Html Msg
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


event_address : String -> Html Msg
event_address v =
    div [ class "timeline-item-text" ]
        [ text v ]


event_history : Bool -> Html Msg
event_history l =
    div [ class "place-history-moment-content timeline-item-content primary" ]
        [ div [ class "photo-grid-wrapper", attribute "style" "display:none" ]
            [ div [ class "photo-grid" ]
                [ text "Заправка 30л"
                ]
            ]
        , div [ attribute "style" "display:none" ]
            []
        , div [ class "confirm-place-visit-button material-raised-button material-raised-button-default"
            , attribute "style"
                (if l then
                    ""
                 else
                    "display:none"
                )
            , attribute "role" "button"
            , attribute "tabindex" "0"
            ]
            [ text "Подтвердить" ]
        ]


b_class l =
    if l then
        " low-confidence"
    else
        ""


icon_for_report =
    i [ title "Пометить для отчета", attribute "style" "", class " sp-icon material-icons-extended", attribute "role" "button", attribute "tabindex" "0" ]
        [ text "check_circle" ]


event : Model -> Bool -> Html Msg
event model l =
    div []
        [ div [ class <| "timeline-item place-history-moment-outer" ++ (b_class l) ]
            [ timeline_svg (False, True)
            , div [ class "segment-divider" ] []
            , home_image
            , div [ class "place-history-moment-content timeline-item-content primary multi-line" ]
                [ div [ class "timeline-item-title" ]
                    [ event_place "Дом"
                    , event_duration ( "11:02", "15:20" )
                    , event_params
                    ]
                , event_address "вулиця Мічуріна, 8, Кам’янське, Дніпропетровська область"
                ]
            , event_history l
            , hr [ class "moment-divider" ] []
            ]
        ]

event3 : Model -> Bool -> Html Msg
event3 model l =
    div []
        [ div [ class <| "timeline-item place-history-moment-outer" ++ (b_class l) ]
            [ timeline_svg (True, True)
            , div [ class "segment-divider" ] []
            , poi_image
            , div [ class "place-history-moment-content timeline-item-content primary multi-line" ]
                [ div [ class "timeline-item-title" ]
                    [ event_place "Индустриальный район"
                    -- , icon_for_report
                    , event_duration ( "16:02", "22:30" )
                    , event_params
                    ]
                , event_address "Днипро, Днепропетровская область, 49000"
                ]

            , event_history l
            , hr [ class "moment-divider" ] []
            ]
        ]

event2 : Model -> Html Msg
event2 model =
    travel_event model
        [ activity_moment1
        , activity_moment2
        , activity_moment1
        , activity_moment2
        , activity_moment2
        ]

event4 : Model -> Html Msg
event4 model =
    travel_event model
    [ activity_moment1 ]


eventL : Model -> Bool -> Html Msg
eventL model l =
    div []
        [ div [ class <| "timeline-item place-history-moment-outer" ++ (b_class l) ]
            [ timeline_svg (True, False)
            , div [ class "segment-divider" ] []
            , home_image
            , div [ class "place-history-moment-content timeline-item-content primary multi-line" ]
                [ div [ class "timeline-item-title" ]
                    [ event_place "Дом"
                    -- , icon_for_report
                    , event_duration ( "23:10", "23:59" )
                    , event_params
                    ]
                , event_address "вулиця Мічуріна, 8, Кам’янське, Дніпропетровська область"
                ]
            , event_history l
            , hr [ class "moment-divider" ] []
            ]
        ]


activity_place : (String, String) -> Html Msg
activity_place (title, distance) =
    div [ class "edit-dialog-select moment-edit-control timeline-item-title-content", attribute "role" "button", attribute "tabindex" "0" ]
        [ div [ class "activity-icon", attribute "style" "background-image:url(https://www.gstatic.com/images/icons/material/system/2x/directions_car_black_24dp.png)" ]
            []
        , span [ class "activity-type" ]
            [ text title ]
        , text " – "
        , div [ class "distance-text", attribute "style" "" ]
            [ text distance ]
        ]

activity_place_duration : String -> Html Msg
activity_place_duration t =
    div [ class "duration-text", attribute "role" "button", attribute "tabindex" "0" ]
        [ text t ]

activity_place_control : Bool -> Html Msg
activity_place_control b =
    div [attribute "style" (if b then "" else "display:none")]
        [ i [ title "Привязать к дороге", class " sp-icon material-icons-extended", attribute "role" "button", attribute "style" "", attribute "tabindex" "0" ]
            [ text "auto_fix" ]
        , i [ title "Воспроизвести на карте", attribute "style" "", class " sp-icon material-icons-extended", attribute "role" "button", attribute "tabindex" "0" ]
            [ text "play_arrow" ]
        ]

activity_add_contol : Html Msg
activity_add_contol =
    div [ class "add-a-place" ]
        [ i [ class "material-icons-extended add-a-place-icon" ]
            [ text "add_circle" ]
        , div [ class "add-a-place-text tooltip" ]
            [ text "Новое место" ]
        ]


activity_moment1 : Html Msg
activity_moment1 =
    div []
        [ div [ class "activity-segment-outer" ]
            [ div [ class "timeline-item place-history-moment-outer" ]
                [ activity_svg_line
                , activity_add_contol
                , div [ class "place-history-moment-content timeline-item-content primary multi-line" ]
                    [ div []
                        [ div [ class "timeline-item-title" ]
                            [ activity_place ("Движение", "170 м")
                            , activity_place_duration "4 минуты"
                            , activity_place_control False
                            ]
                        ]
                        , activity_place_visit ("Окрыт корпус прибора", "18:30")
                    ]
                , hr [ class "moment-divider" ] []
                ]
            ]
        ]

activity_place_visit : (String, String) -> Html Msg
activity_place_visit (titl, time) =
    div [ class "timeline-item-text child-place-visit" ]
        [ a [ class "child-place-visit-content", href "/maps/place//data=!4m2!3m1!1s0x40dbdb09a36b4a29:0x8a3bd0a3bedb89d3?authuser=0&hl=ru&gl=ua" ]
            [ div [ class "child-place-visit-icon", attribute "style" "background-image:url(https://maps.gstatic.com/mapsactivities/icons/poi_icons/30_visited/tree_2x.png)" ]
                []
            , span [ class "child-place-visit-title" ]
                [ text titl ]
            ]
        , activity_place_duration time
        , i [ class "child-place-visit-button material-icons-extended material-icon-with-ripple", title "Удалить запись", attribute "role" "button", attribute "tabindex" "0" ]
            [ text "delete" ]
        ]

activity_moment2 : Html Msg
activity_moment2 =
    div []
        [ div [ class "activity-segment-outer" ]
            [ div [ class "timeline-item place-history-moment-outer" ]
                [ activity_svg_line
                , activity_add_contol
                , div [ class "place-history-moment-content timeline-item-content primary multi-line" ]
                    [ div []
                        [ div [ class "timeline-item-title" ]
                            [ activity_place ("На автомобиле", "36,7 км")
                            , activity_place_duration "1 час 2 минуты"
                            , activity_place_control True
                            ]
                        ]
                    , activity_place_visit ("Потерян сигнал спутников", "18:30")
                    , activity_place_visit ("Сигнал восстановлен", "18:45")
                    ]
                , hr [ class "moment-divider" ] []
                ]
            ]
        ]

type TravelItemType =
    TravelItemCar | TravelItemWalk

travel_segment_item : TravelItemType -> Html Msg
travel_segment_item tit =
    let
        url = case tit of
            TravelItemCar ->
                "https://www.gstatic.com/images/icons/material/system/2x/directions_car_black_24dp.png"
            TravelItemWalk ->
                "https://maps.gstatic.com/mapsactivities/icons/activity_icons/2x/ic_activity_walking_black_24dp.png"
    in
    div [ class "travel-segment-summary-item" ]
        [ div [ class "activity-icon", attribute "style" ("background-image: url("++url++");") ]
            []
        , i [ class "material-icons-extended rtl-mirrored chevron-icon" ]
            [ text "chevron_right " ]
        ]


travel_segment_expander : Html Msg
travel_segment_expander =
    div [ class "activity-expand-toggle" ]
        [ i [ class "material-icons-extended rtl-mirrored activity-summary-chevron upper" ]
            [ text "chevron_left" ]
        , i [ class "material-icons-extended rtl-mirrored activity-summary-chevron lower" ]
            [ text "chevron_right" ]
        ]

travel_segment : Html Msg
travel_segment =
    div [ class "timeline-item travel-segment-summary", attribute "role" "button", attribute "tabindex" "0", onClick ExpandTravel ]
        [ activity_svg_line
        , travel_segment_expander
        , div [ class "timeline-item-content primary" ]
            [ div [ class "timeline-item-title" ]
                [ div [class "travel-segment-summary-itmes" ]
                    [ travel_segment_item TravelItemCar
                    , travel_segment_item TravelItemWalk
                ]
                , event_duration ("3 часа 52 минуты", "")
                ]
            ]
        ]

-- TODO: add class .expanded to .travel-segment for animating

travel_event : Model -> List (Html Msg) -> Html Msg
travel_event model moments =
    div []
        [ div [ class <| "travel-segment" ++ if model.expanded then " expanded" else "" ]
            [ travel_segment
            , hr [ class "moment-divider" ] []
            , div [ class "activities-wrapper" ] moments
            ]
        ]



subscriptions : Model -> Sub Msg
subscriptions =
    always Sub.none
