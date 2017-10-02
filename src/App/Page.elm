module Page exposing (Page(..), parse)

import Navigation exposing (Location)
import UrlParser exposing (..)


type Page
    = Home
    | Account
    | Login
      -- | System String
    | NotFound


parse : Navigation.Location -> Page
parse location =
    parsePath pageParser location
        |> Maybe.withDefault NotFound


pageParser : Parser (Page -> a) a
pageParser =
    oneOf
        [ map Account (s "account")
        , map Login (s "login")
        , map Home (s "")
          -- , map System (s "system" </> string)
        ]
