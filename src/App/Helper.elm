module Helper exposing (link)

import Html exposing (Html, a, text)
import Html.Attributes exposing (style, href)


link : String -> String -> Html msg
link link_ label_ =
    a
        [ style [ ( "margin-right", "10px" ) ]
        , href ("#" ++ link_)
        ]
        [ text label_ ]
