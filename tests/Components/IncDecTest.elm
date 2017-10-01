module Components.IncDecTest exposing (..)

import Expect
import IncDec
import Test exposing (Test, describe, test)
import Test.Html.Query as Query
import Test.Html.Selector exposing (class, tag, text)


incdecTest : Test
incdecTest =
    let
        ( model, _ ) =
            IncDec.init

        html =
            IncDec.view model
    in
    describe "Test IncDec component"
        [ test "IncDec Renders" <|
            \() ->
                html
                    |> Query.fromHtml
                    |> Query.findAll [ tag "button" ]
                    |> Query.count (Expect.equal 2)
        ]
