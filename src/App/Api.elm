module Api exposing (Account, fetch)

import Http
import Json.Decode as JD
import Time


type alias Account =
    { id : String
    , username : String
    }


url : String
url =
    "http://piligrim-gps.com/1.0/account"


fetch : String -> Http.Request Account
fetch accessToken =
    -- Http.get
    Http.request
        { method = "GET"
        , headers =
            [-- Http.header
             --     "authorization"
             --     ("bearer " ++ accessToken)
            ]
        , url = url ++ "?access_token=" ++ accessToken
        , body = Http.emptyBody
        , expect = Http.expectJson decoder

        -- , timeout = Just Time.minute
        , timeout = Nothing
        , withCredentials = False
        }


decoder : JD.Decoder Account
decoder =
    JD.map2 Account
        (JD.field "id" JD.string)
        (JD.field "username" JD.string)
