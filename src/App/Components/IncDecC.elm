module Components.IncDecC
    exposing
        ( Model
        , Msg
        , ParentMsg(..)
        , init
        , subscriptions
        , update
        , view
        )

-- import Json.Decode as Json

import Html exposing (Attribute, Html, button, div, text)
import Html.Attributes exposing (class, type_)
import Html.Events exposing (onClick, targetValue)
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
    | ToParent String


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
update msg model =
    case msg of
        Increment ->
            Lens.modify value ((+) 1) model
                |> Return.singleton
                |> (\( m, c ) -> ( m, c, Nothing ))

        Decrement ->
            Lens.modify value ((+) -1) model
                |> Return.singleton
                |> (\( m, c ) -> ( m, c, Nothing ))

        Tick newTime ->
            counter.set newTime model
                |> Return.singleton
                |> (\( m, c ) -> ( m, c, Nothing ))

        ToParent v ->
            let
                _ =
                    Debug.log "ToParent" v
            in
            Return.singleton model
                |> (\( m, c ) -> ( m, c, Just IncDecC_Boo ))



-- view : (() -> msg) -> Model -> Html Msg
-- view : a -> Model -> Html (Msg pmsg)
-- view : (a -> b) -> Model -> Html Msg


view tagger model =
    let
        _ =
            Debug.log "IncDecC.view" ( tagger, model )
    in
    div [ class "component" ]
        [ div [] [ text "IncDecC component" ]
        , button [ type_ "button", class "btn btn-primary", onClick Decrement ] [ text "-" ]
        , div [] [ text (toString model.value) ]
        , button [ type_ "button", class "btn btn-primary", onClick Increment ] [ text "+" ]
        , div [] [ text (toString model.counter) ]
        , button [ type_ "button", class "btn btn-primary", onClick (ToParent tagger) ] [ text "x" ]

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
