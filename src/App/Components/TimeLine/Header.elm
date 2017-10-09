module Components.TimeLine.Header exposing (Header, header)

import Components.TimeLine.Icons as I
import Html exposing (Html, div, text)
import Html.Attributes exposing (class)


-- import Html.Events exposing (onClick)


type alias Header =
    { day :
        String

    -- TODO: Date?
    , comment : String
    }


header : Header -> Html msg
header model =
    div [ class "timeline-header" ]
        [ div [ class "timeline-header-title-container" ]
            [ div [ class "timeline-title" ]
                [ text model.day ]
            , div [ class "timeline-subtitle" ]
                [ text model.comment ]
            ]
        , I.prev_day
        , I.next_day
        ]
