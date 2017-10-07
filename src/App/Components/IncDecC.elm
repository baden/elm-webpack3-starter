module Components.IncDecC
    exposing
        ( Model
        , Msg
        , ParentMsg(..)
        , init
        , mainP
        , subscriptions
        , update
        , view
        )

-- import Json.Decode as Json

import Html exposing (Attribute, Html, button, div, text)
import Html.Attributes exposing (class, type_)
import Html.Events exposing (onClick, targetValue)
import LensChild as L
import Monocle.Lens as Lens exposing (Lens)
import Return exposing (Return)
import Task
import Time exposing (Time, second)


type alias Model =
    { value : Int
    , counter : Time
    }


defaultModel : Model
defaultModel =
    { value = 0
    , counter = 0
    }


value : Lens Model Int
value =
    Lens .value <| \u m -> { m | value = u }


counter : Lens Model Float
counter =
    Lens .counter <| \u m -> { m | counter = u }



-- type Msg pmsg


type Msg
    = Increment
    | Decrement
    | Tick Time
    | ToParent


type ParentMsg
    = IncDecC_Boo



-- Warning! This method is not recomended. This is for example only.
-- Look https://medium.com/elm-shorts/how-to-turn-a-msg-into-a-cmd-msg-in-elm-5dd095175d84


send : msg -> Cmd msg
send msg =
    Task.succeed msg
        |> Task.perform identity



-- init : ( Model, Cmd (Msg pmsg) )


init : ( Model, Cmd Msg )
init =
    Return.return defaultModel (send Increment)



-- update : Msg p -> Model -> ( Model, Cmd (Msg p) )


update : Msg -> Model -> ( Model, Cmd Msg, Maybe ParentMsg )
update msg =
    case msg of
        Increment ->
            L.return Nothing
                << Return.singleton
                << Lens.modify value ((+) 1)

        Decrement ->
            L.return Nothing
                << Return.singleton
                << Lens.modify value ((+) -1)

        Tick newTime ->
            L.return Nothing
                << Return.singleton
                << counter.set newTime

        ToParent ->
            L.return (Just IncDecC_Boo)
                << Return.singleton


view model =
    div [ class "component" ]
        [ div [] [ text "IncDecC component" ]
        , button [ type_ "button", class "btn btn-primary", onClick Decrement ] [ text "-" ]
        , div [] [ text (toString model.value) ]
        , button [ type_ "button", class "btn btn-primary", onClick Increment ] [ text "+" ]
        , div [] [ text (toString model.counter) ]
        , button [ type_ "button", class "btn btn-primary", onClick ToParent ] [ text "x" ]

        -- , button tagger [ text "x" ]
        -- , Html.input [ onChange (SubCmd tagger) ]
        -- , button [ type_ "button", class "btn btn-primary", onClick << tagger ] [ text "x" ]
        ]



-- onChange : (String -> msg) -> Attribute msg
-- onChange tagger =
--     Html.Events.on "change" (Json.map tagger targetValue)


subscriptions : Model -> Sub Msg
subscriptions =
    always <|
        Sub.batch
            [--Time.every second Tick
            ]


mainP =
    L.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
