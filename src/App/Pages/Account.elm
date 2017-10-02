module Pages.Account
    exposing
        ( Model
        , Msg
        , init
        , subscriptions
        , update
        , view
        )

import Api exposing (Account, fetch)
import Html exposing (Html, dd, div, dl, dt, p, text)
import Html.Attributes exposing (class)
import Http


type alias Model =
    { name : String
    , account : Maybe Account
    , message : String
    }


init : ( Model, Cmd Msg )
init =
    ( { name = "NoName", account = Nothing, message = "Loading..." }
    , Cmd.batch
        [ Http.send FetchedAccount (Api.fetch "3smiHOIcmadduHckMvdzHHqHU4ltBszj")
        ]
    )


type Msg
    = NoOp
    | FetchedAccount (Result Http.Error Api.Account)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

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
            ( { model | message = "Loaded", account = Just account }, Cmd.none )


view : Model -> Html Msg
view model =
    div []
        [ --text <| "ACCOUNT: " ++ toString model
          info model.account
        ]


info : Maybe Account -> Html Msg
info maybe_account =
    case maybe_account of
        Nothing ->
            div [] [ text "Not loadede yet." ]

        Just account ->
            dl [ class "dl-horizontal" ]
                [ dt [] [ text "Отображаемое имя:" ]
                , dd [] [ text account.title ]
                , dt [] [ text "Дата регистрации:" ]
                , dd [] [ text <| toString account.date ]
                , dt [] [ text "Состоит в группах:" ]
                , dd [] [ text <| toString <| account.groups ]
                , dt [] [ text "Наблюдаемых систем:" ]
                , dd [] [ text <| toString <| List.length account.skeys ]
                ]


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none
