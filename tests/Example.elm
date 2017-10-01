module Example exposing (..)

import Expect exposing (Expectation)
import Fuzz exposing (Fuzzer, int, list, string)
import Test exposing (..)


suite : Test
suite =
    describe "The String module"
        [ test "has no effect on a palindrome" <|
            \_ ->
                let
                    palindrome =
                        "hannah"
                in
                Expect.equal palindrome (String.reverse palindrome)
        , test "Set expect value to 5 and sure test is red" <|
            \_ ->
                Expect.equal (2 + 2) 4

        -- fuzz runs the test 100 times with randomly-generated inputs!
        , fuzz string "restores the original string if you run it again" <|
            \randomlyGeneratedString ->
                randomlyGeneratedString
                    |> String.reverse
                    |> String.reverse
                    |> Expect.equal randomlyGeneratedString
        ]



-- todo "Implement our first test. See http://package.elm-lang.org/packages/elm-community/elm-test/latest for how to do this!"
