module Components.TimeLine.Icons exposing (..)

import Html exposing (Html, text, i)
import Html.Attributes exposing (class, tabindex, attribute, title)


prev_day : Html msg
prev_day =
    i [ class "timeline-header-button previous-date-range-button material-icons-extended material-icon-with-ripple rtl-mirrored", title "Предыдущий день", attribute "role" "button", tabindex 0 ]
        [ text "chevron_left " ]


next_day : Html msg
next_day =
    i [ class "timeline-header-button next-date-range-button material-icons-extended material-icon-with-ripple rtl-mirrored", title "Следующий день", attribute "role" "button", tabindex 0 ]
        [ text "chevron_right " ]


drop_down : Html msg
drop_down =
    i [ class "material-icons-extended drop-down" ]
        [ text "arrow_drop_down" ]


add_a_place : Html msg
add_a_place =
    i [ class "material-icons-extended add-a-place-icon" ]
        [ text "add_circle" ]


upper : Html msg
upper =
    i [ class "material-icons-extended rtl-mirrored activity-summary-chevron upper" ]
        [ text "chevron_left" ]


lower : Html msg
lower =
    i [ class "material-icons-extended rtl-mirrored activity-summary-chevron lower" ]
        [ text "chevron_right" ]


right : Html msg
right =
    i [ class "material-icons-extended rtl-mirrored chevron-icon" ]
        [ text "chevron_right " ]
