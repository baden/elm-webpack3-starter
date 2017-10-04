module Components.TimeLine.Header exposing (header, Header)

import Html exposing (Html, div, text, i)
import Html.Attributes exposing (class, tabindex, attribute, title)


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
        , i [ class "timeline-header-button previous-date-range-button material-icons-extended material-icon-with-ripple rtl-mirrored", title "Предыдущий день", attribute "role" "button", tabindex 0 ]
            [ text "chevron_left " ]
        , i [ class "timeline-header-button next-date-range-button material-icons-extended material-icon-with-ripple rtl-mirrored", title "Следующий день", attribute "role" "button", tabindex 0 ]
            [ text "chevron_right " ]
          -- , i [ attribute "aria-label" "Удалить данные за день", class "timeline-header-button delete-button material-icons-extended material-icon-with-ripple", attribute "data-tooltip" "Удалить данные за день", attribute "jsaction" "delete-history.delete-selected", attribute "role" "button", attribute "tabindex" "0" ]
          --     [ text "delete " ]
        ]
