module Components.TimeLine.ActivityIcon exposing (icon, ActivityIcon(..))

import Html exposing (Html, div)
import Html.Attributes exposing (class, attribute, title)


type ActivityIcon
    = ActivityIconMove
    | ActivityIconCamp


icon : ActivityIcon -> Html msg
icon i =
    let
        ( title_, url ) =
            case i of
                ActivityIconMove ->
                    ( "Движение", "https://www.gstatic.com/images/icons/material/system/2x/directions_car_black_24dp.png" )

                ActivityIconCamp ->
                    ( "Стоянка", "https://maps.gstatic.com/mapsactivities/icons/activity_icons/2x/ic_activity_walking_black_24dp.png" )
    in
        div [ class "activity-icon", title title_, attribute "style" ("background-image: url(" ++ url ++ ");") ]
            []
