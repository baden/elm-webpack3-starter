module Pages.Login
    exposing
        ( Model
        , Msg
        , init
        , subscriptions
        , update
        , view
        )

import Html exposing (Html, dd, div, dl, dt, p, text, h1, h2, form, label, input, button, small)
import Html.Attributes exposing (class, type_, id, placeholder, attribute, for)


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
    div [ class "row justify-content-center" ]
        [ div [ class "col-sm6" ]
            [ form
                []
                [ --h1 [] [ text "Добро пожаловать в Navi.CC" ]
                  h2 [] [ text "Авторизация в сервисе" ]
                , div [ class "form-group" ]
                    [ label [ for "exampleInputEmail1" ]
                        [ text "Адрес электронной почты" ]
                    , input
                        [ type_ "email", class "form-control", id "exampleInputEmail1", ariaDescribedby "emailHelp", placeholder "Введите email" ]
                        []
                    , small
                        [ id "emailHelp", class "form-text text-muted" ]
                        [ text "Мы никогда не передадим никому ваш адрес электронной почты." ]
                    ]
                , div
                    [ class "form-group" ]
                    [ label [ for "exampleInputPassword1" ]
                        [ text "Пароль" ]
                    , input
                        [ type_ "password", class "form-control", id "exampleInputPassword1", placeholder "Пароль" ]
                        []
                    ]
                , div
                    [ class "form-check" ]
                    [ label [ class "form-check-label" ]
                        [ input
                            [ type_ "checkbox", class "form-check-input" ]
                            []
                        , text " Оставаться в системе"
                        ]
                    ]
                , button [ type_ "submit", class "btn btn-primary" ] [ text "Авторизоваться" ]
                ]
            ]
        ]


ariaDescribedby : String -> Html.Attribute Msg
ariaDescribedby =
    attribute "ariaDescribedby"


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none
