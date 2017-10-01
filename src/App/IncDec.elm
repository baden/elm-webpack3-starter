module IncDec exposing (Model, Msg, init, subscriptions, update, view)

import Api exposing (Account, fetch)
import Html exposing (Html, button, div, text)
import Html.Attributes exposing (class, type_)
import Html.Events exposing (onClick)
import Http
import Task
import Time exposing (Time, second)


type alias Model =
    { value : Int
    , time : Time
    , message : String
    }


defaultModel : Model
defaultModel =
    { value = 0
    , time = 0
    , message = "Getting account..."
    }


type Msg
    = Increment
    | Decrement
    | Tick Time
    | FetchedAccount (Result Http.Error Api.Account)



-- Warning! This method is not recomended. This is for example only.
-- Look https://medium.com/elm-shorts/how-to-turn-a-msg-into-a-cmd-msg-in-elm-5dd095175d84


send : msg -> Cmd msg
send msg =
    Task.succeed msg
        |> Task.perform identity


init : ( Model, Cmd Msg )
init =
    ( defaultModel
    , Cmd.batch
        [ send Increment
        , Http.send FetchedAccount (Api.fetch "3smiHOIcmadduHckMvdzHHqHU4ltBszj")
        ]
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Increment ->
            ( { model | value = model.value + 1 }, Cmd.none )

        Decrement ->
            ( { model | value = model.value - 1 }, Cmd.none )

        Tick newTime ->
            ( { model | time = newTime }, Cmd.none )

        FetchedAccount (Err (Http.BadStatus badStatus)) ->
            case badStatus.status.code of
                404 ->
                    ( { model | message = "Account is not found" }, Cmd.none )

                401 ->
                    ( { model | message = "Need authirization" }, Cmd.none )

                _ ->
                    ( { model | message = badStatus.status.message }, Cmd.none )

        FetchedAccount (Err error) ->
            ( { model | message = toString error }, Cmd.none )

        FetchedAccount (Ok account) ->
            ( { model | message = toString account }, Cmd.none )


view : Model -> Html Msg
view model =
    let
        t =
            floor (model.time / 1000)
    in
    div [ class "component jumbotron" ]
        [ div [] [ text "IncDec component" ]
        , button [ type_ "button", class "btn btn-primary", onClick Decrement ] [ text "-" ]
        , div [] [ text (toString model.value) ]
        , button [ type_ "button", class "btn btn-primary", onClick Increment ] [ text "+" ]
        , div [] [ text "time:", text (toString t) ]
        , div [] [ text model.message ]
        ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Time.every second Tick
        ]
