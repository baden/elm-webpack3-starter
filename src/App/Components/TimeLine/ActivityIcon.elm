module Components.TimeLine.ActivityIcon exposing (ActivityIcon(..), icon)

import Html exposing (Html, div)
import Html.Attributes exposing (attribute, class, title)


type ActivityIcon
    = Move
    | Camp


icon : ActivityIcon -> Html msg
icon i =
    let
        ( title_, url ) =
            case i of
                Move ->
                    ( "Движение", "https://www.gstatic.com/images/icons/material/system/2x/directions_car_black_24dp.png" )

                Camp ->
                    ( "Стоянка", "https://maps.gstatic.com/mapsactivities/icons/activity_icons/2x/ic_activity_walking_black_24dp.png" )
    in
    div [ class "activity-icon", title title_, attribute "style" ("background-image: url(" ++ url ++ ");") ]
        []
