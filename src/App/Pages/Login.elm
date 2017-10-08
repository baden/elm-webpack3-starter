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
import Html.Attributes exposing (attribute, class, for, id, placeholder, type_)


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


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )


view : Model -> Html Msg
view model =
    div [ class "login-page" ]
        [ form []
            [ --h1 [] [ text "Добро пожаловать в Navi.CC" ]
              h2 [] [ text "Авторизация в сервисе" ]
            , div [ class "login-form-group" ]
                [ div [] [ text "Имя пользователя" ]
                , input [ type_ "email", class "form-control", ariaDescribedby "emailHelp" ] []
                ]
            , div [ class "login-form-group" ]
                [ div [] [ text "Пароль" ]
                , input [ type_ "password", class "form-control" ] []
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
