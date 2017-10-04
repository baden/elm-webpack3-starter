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
import Components.TimeLine.Header
import Components.TimeLine.TopActivity
import Components.TimeLine.CampEvent
import Components.TimeLine.MoveEvent
import Components.TimeLine.Event exposing (event_duration)
import Components.TimeLine.ActivityIcon
import Components.TimeLine.PlaceIcon

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
    let
        headerModel = Components.TimeLine.Header.Header "Четверг, 10 Сентября 2015 Г." "Данные могут быть не полными"
    in
        div [ class "timeline-wrapper" ]
            [ Components.TimeLine.Header.header headerModel
            , content model
            ]


content : Model -> Html Msg
content model =
    let
        top_activity_model =
            Components.TimeLine.TopActivity.TopActivity
                { distance = "130 км", duration = "5 ч. 6 мин." }
                { duration = "5 ч. 6 мин."}
    in
        div [ class "timeline-content" ]
            [ div []
                [ Components.TimeLine.TopActivity.top top_activity_model
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


poi_image : Html Msg
poi_image =
    Components.TimeLine.PlaceIcon.icon Components.TimeLine.PlaceIcon.PlaceIconPoi


home_image : Html Msg
home_image =
    Components.TimeLine.PlaceIcon.icon Components.TimeLine.PlaceIcon.PlaceIconHome


event : Model -> Bool -> Html Msg
event model l =
    Components.TimeLine.CampEvent.campEvent (l, (False, True), home_image, "Дом", ("11:02", "15:20"), "вулиця Мічуріна, 8, Кам’янське, Дніпропетровська область")

event3 : Model -> Bool -> Html Msg
event3 model l =
    Components.TimeLine.CampEvent.campEvent (l, (True, True), poi_image, "Склад №1", ("16:02", "16:05"), "Днипро, Днепропетровская область, 49000")

eventL : Model -> Bool -> Html Msg
eventL model l =
    Components.TimeLine.CampEvent.campEvent (l, (True, False), home_image, "Гараж", ("23:20", "23:59"), "вулиця Мічуріна, 8, Кам’янське, Дніпропетровська область")


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





activity_moment1 : Html Msg
activity_moment1 =
    Components.TimeLine.MoveEvent.moveEvent (("Движение", "170 м"), "4 минуты", [
        ("Окрыт корпус прибора", "18:30")
    ])

activity_moment2 : Html Msg
activity_moment2 =
    Components.TimeLine.MoveEvent.moveEvent (("Движение", "36,7 км"), "1 час 14 минут", [
        ("Потерян сигнал спутников", "18:30")
        , ("Сигнал восстановлен", "18:45")
        , ("Потерян сигнал спутников", "21:06")
        , ("Сигнал восстановлен", "21:16")
    ])

travel_segment_item : Components.TimeLine.ActivityIcon.ActivityIcon -> Html Msg
travel_segment_item tit =
    div [ class "travel-segment-summary-item" ]
        [ Components.TimeLine.ActivityIcon.icon tit
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
                    [ travel_segment_item Components.TimeLine.ActivityIcon.ActivityIconMove
                    , travel_segment_item Components.TimeLine.ActivityIcon.ActivityIconCamp
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


activity_svg_line : Html msg
activity_svg_line =
    svg [ S.class "timeline-item-svg" ]
        [ line [ S.class "timeline-item-svg-line", attribute "style" "stroke: rgb(1, 87, 155);", x1 "7", x2 "7", y1 "0", y2 "100%" ]
            []
        ]



subscriptions : Model -> Sub Msg
subscriptions =
    always Sub.none
