module Components.IncDecC exposing (Model, Msg, init, subscriptions, update, view)

import Html exposing (Html, button, div, text)
import Html.Attributes exposing (class, type_)
import Html.Events exposing (onClick)
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


type Msg
    = Increment
    | Decrement
    | Tick Time



-- Warning! This method is not recomended. This is for example only.
-- Look https://medium.com/elm-shorts/how-to-turn-a-msg-into-a-cmd-msg-in-elm-5dd095175d84


send : msg -> Cmd msg
send msg =
    Task.succeed msg
        |> Task.perform identity


init : ( Model, Cmd Msg )
init =
    Return.return defaultModel (send Increment)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg =
    Return.singleton
        << (case msg of
                Increment ->
                    Lens.modify value ((+) 1)

                Decrement ->
                    Lens.modify value ((+) -1)

                Tick newTime ->
                    counter.set newTime
           )


view : Model -> Html Msg
view model =
    let
        _ =
            Debug.log "IncDecC.view" model
    in
    div [ class "component" ]
        [ div [] [ text "IncDecC component" ]
        , button [ type_ "button", class "btn btn-primary", onClick Decrement ] [ text "-" ]
        , div [] [ text (toString model.value) ]
        , button [ type_ "button", class "btn btn-primary", onClick Increment ] [ text "+" ]
        , div [] [ text (toString model.counter) ]
        ]


subscriptions : Model -> Sub Msg
subscriptions =
    always <|
        Sub.batch
            [ Time.every second Tick
            ]
