module Components.TimeLine.Header exposing (header, Header)

import Html exposing (Html, div, text, i)
import Html.Attributes exposing (class, tabindex, attribute, title)
import Components.TimeLine.Icons as I


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
