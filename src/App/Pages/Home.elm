module Pages.Home
    exposing
        ( Model
        , Msg
        , init
        , subscriptions
        , update
        , view
        )

import Components.IncDec as IncDec
import Html exposing (Html, div, text, button)
import Html.Attributes exposing (class, type_)
import Html.Events exposing (onClick, onWithOptions)
import Time exposing (Time, second)
import Monocle.Lens exposing (Lens)
import Return exposing (Return)
import LensChild as L
import Animation
import Components.Loader exposing (hideLoader, loader, showLoader)


type alias Model =
    { counter : Time
    , incdec1 : IncDec.Model
    , incdec2 : IncDec.Model
    , loaderStyle : Animation.State
    }


incdec1l : Lens Model IncDec.Model
incdec1l =
    Lens .incdec1 <| \u m -> { m | incdec1 = u }


incdec2l : Lens Model IncDec.Model
incdec2l =
    Lens .incdec2 <| \u m -> { m | incdec2 = u }


loaderStylel : Lens Model Animation.State
loaderStylel =
    Lens .loaderStyle <| \u m -> { m | loaderStyle = u }


type Msg
    = Tick Time
    | IncDecMessage (Lens Model IncDec.Model) IncDec.Msg
    | Animate Animation.Msg
    | StartLoading
    | StopLoading
    | NoOp


initModel : IncDec.Model -> IncDec.Model -> Model
initModel i1 i2 =
    { counter = 0
    , incdec1 = i1
    , incdec2 = i2
    , loaderStyle =
        Animation.styleWith
            (Animation.spring
                { stiffness = 70
                , damping = 20
                }
            )
            [ Animation.opacity 0
            , Animation.display Animation.none
            ]
    }


init : ( Model, Cmd Msg )
init =
    Return.map2 initModel
        (L.init incdec1l IncDecMessage IncDec.init)
        (L.init incdec2l IncDecMessage IncDec.init)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg =
    Return.singleton
        >> case msg of
            NoOp ->
                Return.zero

            Tick newTime ->
                Return.map <| \model -> { model | counter = newTime }

            IncDecMessage lens subMsg ->
                L.update lens IncDecMessage <| IncDec.update subMsg

            Animate animMsg ->
                Return.map <|
                    Monocle.Lens.modify loaderStylel <|
                        Animation.update animMsg

            StartLoading ->
                Return.map <| Monocle.Lens.modify loaderStylel showLoader

            StopLoading ->
                Return.map <| Monocle.Lens.modify loaderStylel hideLoader


view : Model -> Html Msg
view model =
    div []
        [ text <| "HOME: WIP" ++ toString model
        , div [ class "row" ]
            [ div [ class "col-sm-6" ]
                [ L.view incdec1l IncDecMessage IncDec.view model
                ]
            , div
                [ class "col-sm-6" ]
                [ L.view incdec2l IncDecMessage IncDec.view model
                ]
            ]
        , div [ class "row" ]
            [ div [ class "col-sm-12" ]
                [ button [ type_ "button", class "btn btn-primary", onClick StartLoading ] [ text "Simulate start loading" ]
                , button [ type_ "button", class "btn btn-primary", onClick StopLoading ] [ text "Simulate stop loading" ]
                ]
            ]
        , loader model.loaderStyle
        ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Time.every second Tick
        , L.subs incdec1l IncDecMessage IncDec.subscriptions model
        , L.subs incdec2l IncDecMessage IncDec.subscriptions model
        , Animation.subscription Animate [ model.loaderStyle ]
        ]
