module Api exposing (Account, fetch)

import Http
import Json.Decode exposing (..)


type alias Account =
    { id : String
    , username : String
    }


url : String
url =
    "http://piligrim-gps.com/1.0/account"


fetch : String -> Http.Request Account
fetch token =
    Http.get
        (url ++ "?access_token=" ++ token)
        decoder


decoder : Decoder Account
decoder =
    map2 Account
        (field "id" string)
        (field "username" string)
