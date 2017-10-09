module Pages.Map
    exposing
        ( Model
        , Msg
        , init
        , subscriptions
        , update
        , view
        )

import Components.TimeLine as TimeLine
import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Monocle.Lens exposing (Lens)
import Return exposing (Return)
import Return.Optics exposing (refractl)


type alias Model =
    { timeline : TimeLine.Model
    }


timelinel : Lens Model TimeLine.Model
timelinel =
    Lens .timeline <| \u m -> { m | timeline = u }


type Msg
    = TimeLineMessage TimeLine.Msg
    | NoOp


init : Return Msg Model
init =
    let
        ( timelineModel, timelineCmd ) =
            TimeLine.init
                |> Return.mapCmd TimeLineMessage
    in
    Return.singleton
        { timeline = timelineModel
        }
        |> Return.command timelineCmd


update : Msg -> Model -> Return Msg Model
update msg =
    Return.singleton
        >> (case msg of
                NoOp ->
                    Return.zero

                TimeLineMessage subMsg ->
                    refractl timelinel TimeLineMessage <| TimeLine.update subMsg
           )


view : Model -> Html Msg
view model =
    div [ class "map-page" ]
        [ div [ class "map-main" ] [ text "Тут будет карта" ]
        , div [ class "map-control" ]
            [ div [ class "map-control-timeline" ]
                [ TimeLine.view model.timeline |> Html.map TimeLineMessage
                ]
            ]

        -- , div [ class "map-debug" ] [ text <| "MAP: WIP" ++ toString model ]
        -- , div [ class "row" ]
        --     [ div [ class "col-sm-10" ]
        --         [ TimeLine.view model.timeline |> Html.map TimeLineMessage
        --         ]
        --     ]
        ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ TimeLine.subscriptions model.timeline |> Sub.map TimeLineMessage
        ]
