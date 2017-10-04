module Components.TimeLine.PlaceIcon exposing (icon, PlaceIcon(..))

import Html exposing (Html, div)
import Html.Attributes exposing (class, attribute)


type PlaceIcon
    = PlaceIconHome
    | PlaceIconPoi


icon : PlaceIcon -> Html msg
icon i =
    let
        url =
            case i of
                PlaceIconHome ->
                    "https://maps.gstatic.com/mapsactivities/icons/poi_icons/30_visited/home_2x.png"

                PlaceIconPoi ->
                    "https://maps.gstatic.com/mapsactivities/icons/poi_icons/30_regular/generic_2x.png"
    in
        div
            [ class "timeline-item-icon place-icon"
            , attribute "style" ("background-image: url(" ++ url ++ ");")
            ]
            []
