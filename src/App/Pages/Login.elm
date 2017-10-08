module Pages.Login
    exposing
        ( Model
        , Msg
        , init
        , subscriptions
        , update
        , view
        )

import Html exposing (Html, button, dd, div, dl, dt, form, h1, h2, input, label, p, small, text)
import Html.Attributes exposing (attribute, class, for, id, placeholder, type_, value)
import Html.Events exposing (onInput)


type alias Model =
    { name : String
    , password : String
    }


init : ( Model, Cmd Msg )
init =
    ( { name = "", password = "" }
    , Cmd.none
    )


type Msg
    = NoOp
    | UserNameInput String
    | PasswordInput String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        UserNameInput v ->
            ( { model | name = v }, Cmd.none )

        PasswordInput v ->
            ( { model | password = v }, Cmd.none )


onNonEmptyClass : String -> String
onNonEmptyClass v =
    if v == "" then
        "empty"
    else
        "non-empty"


view : Model -> Html Msg
view model =
    div [ class "login-page" ]
        [ form []
            [ --h1 [] [ text "Добро пожаловать в Navi.CC" ]
              h2 [] [ text "Авторизация в сервисе" ]
            , div [ class "login-form-group" ]
                [ div [ class <| onNonEmptyClass model.name ] [ text "Имя пользователя" ]
                , input [ onInput UserNameInput, value model.name ] []
                ]
            , div [ class "login-form-group" ]
                [ div [ class <| onNonEmptyClass model.password ] [ text "Пароль" ]
                , input [ type_ "password", onInput PasswordInput, value model.password ] []
                ]
            , div [ class "login-form-group" ]
                [ button [ type_ "submit" ]
                    [ text "Авторизоваться"
                    ]
                ]
            ]
        ]


ariaDescribedby : String -> Html.Attribute Msg
ariaDescribedby =
    attribute "ariaDescribedby"


subscriptions : Model -> Sub Msg
subscriptions =
    always Sub.none
