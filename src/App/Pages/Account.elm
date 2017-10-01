module Pages.Account
    exposing
        ( Model
        , Msg
        , init
        , subscriptions
        , update
        , view
        )

import Html exposing (Html, div, text)


type alias Model =
    {}


init : ( Model, Cmd Msg )
init =
    ( {}, Cmd.none )


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )


view : Model -> Html Msg
view model =
    div [] [ text "ACCOUNT: WIP" ]


subscriptions : Sub Msg
subscriptions =
    Sub.none
