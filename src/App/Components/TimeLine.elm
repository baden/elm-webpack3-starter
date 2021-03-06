module Components.TimeLine
    exposing
        ( Model
        , Msg
        , init
        , subscriptions
        , update
        , view
        )

import Components.TimeLine.CampEvent
import Components.TimeLine.Header
import Components.TimeLine.MoveEvent
import Components.TimeLine.PlaceIcon
import Components.TimeLine.TopActivity
import Components.TimeLine.TravelEvent as TravelEvent
import Html exposing (Html, div)
import Html.Attributes exposing (class)
import Return exposing (Return)


type alias Model =
    { value : Int
    , travelEvent1 : TravelEvent.TravelEvent
    , travelEvent2 : TravelEvent.TravelEvent
    }


defaultModel : Model
defaultModel =
    { value = 0
    , travelEvent1 = TravelEvent.defaultTravelEvent
    , travelEvent2 = TravelEvent.defaultTravelEvent
    }


type Msg
    = NoOp
    | ExpandTravel1
    | ExpandTravel2


init : Return Msg Model
init =
    Return.singleton defaultModel


update : Msg -> Model -> Return Msg Model
update msg =
    Return.singleton
        >> (case msg of
                NoOp ->
                    Return.zero

                ExpandTravel1 ->
                    Return.map (\m -> { m | travelEvent1 = TravelEvent.toggleEvent m.travelEvent1 })

                ExpandTravel2 ->
                    Return.map (\m -> { m | travelEvent2 = TravelEvent.toggleEvent m.travelEvent2 })
           )


view : Model -> Html Msg
view model =
    let
        headerModel =
            Components.TimeLine.Header.Header "Четверг, 10 Сентября 2015 Г." "Данные могут быть не полными"
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
                { distance = "139 км", duration = "5 ч. 6 мин." }
                { duration = "5 ч. 6 мин." }
    in
    div [ class "timeline-content" ]
        [ div []
            [ Components.TimeLine.TopActivity.top top_activity_model
            , event model
            , event2 model
            , event3 model
            , event4 model
            , eventL model
            ]
        ]


poi_image : Html Msg
poi_image =
    Components.TimeLine.PlaceIcon.icon Components.TimeLine.PlaceIcon.PlaceIconPoi


home_image : Html Msg
home_image =
    Components.TimeLine.PlaceIcon.icon Components.TimeLine.PlaceIcon.PlaceIconHome


event : Model -> Html Msg
event _ =
    Components.TimeLine.CampEvent.campEvent
        ( ( False, True )
        , home_image
        , "Дом"
        , ( "11:02", "15:20" )
        , "вулиця Мічуріна, 8, Кам’янське, Дніпропетровська область"
        )


event3 : Model -> Html Msg
event3 _ =
    Components.TimeLine.CampEvent.campEvent
        ( ( True, True )
        , poi_image
        , "Склад №1"
        , ( "16:02", "16:05" )
        , "Днипро, Днепропетровская область, 49000"
        )


eventL : Model -> Html Msg
eventL _ =
    Components.TimeLine.CampEvent.campEvent
        ( ( True, False )
        , home_image
        , "Гараж"
        , ( "23:20", "23:59" )
        , "вулиця Мічуріна, 8, Кам’янське, Дніпропетровська область"
        )


event2 : Model -> Html Msg
event2 model =
    TravelEvent.travel_event model.travelEvent1
        ExpandTravel1
        [ activity_moment1
        , activity_moment2
        , activity_moment1
        , activity_moment2
        , activity_moment2
        ]


event4 : Model -> Html Msg
event4 model =
    TravelEvent.travel_event model.travelEvent2
        ExpandTravel2
        [ activity_moment3 ]


activity_moment1 : Html Msg
activity_moment1 =
    Components.TimeLine.MoveEvent.moveEvent
        ( ( "Движение", "170 м" )
        , "4 минуты"
        , [ ( "Окрыт корпус прибора", "18:30" )
          ]
        )


activity_moment2 : Html Msg
activity_moment2 =
    Components.TimeLine.MoveEvent.moveEvent
        ( ( "Остановка", "" )
        , "4 минуты"
        , [ ( "Заправка 15л", "18:30" )
          ]
        )


activity_moment3 : Html Msg
activity_moment3 =
    Components.TimeLine.MoveEvent.moveEvent
        ( ( "Движение", "36,7 км" )
        , "1 час 14 минут"
        , [ ( "Потерян сигнал спутников", "18:30" )
          , ( "Сигнал восстановлен", "18:45" )
          , ( "Потерян сигнал спутников", "21:06" )
          , ( "Сигнал восстановлен", "21:16" )
          ]
        )


subscriptions : Model -> Sub Msg
subscriptions =
    always Sub.none
