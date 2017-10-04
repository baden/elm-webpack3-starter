module Components.TimeLine.TopActivity exposing (top, TopActivity)

import Html exposing (Html, div, text, i)
import Html.Attributes exposing (class, tabindex, attribute, title)
import Components.TimeLine.ActivityIcon


type alias TopActivity =
    { moves : { distance : String, duration : String }
    , camp : { duration : String }
    }



-- Public API


top : TopActivity -> Html msg
top model =
    div [ class "timeline-item top-activities" ]
        [ top_activity ( "Движение", Components.TimeLine.ActivityIcon.ActivityIconMove, model.moves.distance, model.moves.duration )
        , top_activity ( "Стоянка", Components.TimeLine.ActivityIcon.ActivityIconCamp, "", model.camp.duration )
        ]



-- Private
-- car_image : Html.Attribute msg
-- car_image =
--     attribute "style" "background-image:url(https://www.gstatic.com/images/icons/material/system/2x/directions_car_black_24dp.png)"
--
--
-- stop_image : Html.Attribute msg
-- stop_image =
--     attribute "style" "background-image: url(https://maps.gstatic.com/mapsactivities/icons/activity_icons/2x/ic_activity_walking_black_24dp.png);"


top_activity : ( String, Components.TimeLine.ActivityIcon.ActivityIcon, String, String ) -> Html msg
top_activity ( titl, icon, dist, dur ) =
    div [ class "top-activity" ]
        [ Components.TimeLine.ActivityIcon.icon icon
        , div [ class "top-activity-text" ]
            [ div []
                [ text dist ]
            , div []
                [ text dur ]
            ]
        ]
