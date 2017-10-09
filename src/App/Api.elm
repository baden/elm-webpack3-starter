module Api exposing (Account, fetch)

import Http
import Json.Decode as JD
import Json.Decode.Pipeline exposing (decode, required)


type alias Account =
    { id : String
    , username : String
    , title : String
    , date : Int
    , skeys : List String
    , groups : List String
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
    decode Account
        |> required "id" JD.string
        |> required "username" JD.string
        |> required "title" JD.string
        |> required "date" JD.int
        |> required "skeys" (JD.list JD.string)
        |> required "groups" (JD.list JD.string)
