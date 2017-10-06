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
import Html exposing (Html, div, text, button, a)
import Html.Attributes exposing (class, type_, href)
import Html.Events exposing (onClick, onWithOptions)
import Time exposing (Time, second)
import Monocle.Lens exposing (Lens)
import Return exposing (Return)
import LensChild as L
import Components.Loader exposing (loader)
import Json.Decode as Json
import Array exposing (Array)
import Helper exposing (link)


-- import Animation


type alias Model =
    { counter : Time
    , incdec1 : IncDec.Model
    , incdec2 : IncDec.Model
    , incdecs : Array IncDec.Model
    , loaderStyle : Bool
    , message : String
    }


incdec1l : Lens Model IncDec.Model
incdec1l =
    Lens .incdec1 <| \u m -> { m | incdec1 = u }


incdec2l : Lens Model IncDec.Model
incdec2l =
    Lens .incdec2 <| \u m -> { m | incdec2 = u }


incdecl : Int -> Lens Model IncDec.Model
incdecl index =
    Lens
        (\m ->
            case Array.get index m.incdecs of
                Nothing ->
                    Debug.crash "WTF"

                Just indec ->
                    indec
        )
        (\u m -> { m | incdecs = Array.set index u m.incdecs })


loaderStylel : Lens Model Bool
loaderStylel =
    Lens .loaderStyle <| \u m -> { m | loaderStyle = u }


type Msg
    = Tick Time
    | IncDecMessage (Lens Model IncDec.Model) IncDec.Msg
      -- | Animate Animation.Msg
    | StartLoading
    | StopLoading
    | EndAnimation
    | AddComp
    | RemoveComp
    | NoOp


initModel : IncDec.Model -> IncDec.Model -> Model
initModel i1 i2 =
    { counter = 0
    , incdec1 = i1
    , incdec2 = i2
    , incdecs = Array.empty
    , loaderStyle = False
    , message = "Initial"
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

            -- Animate animMsg ->
            --     Return.map <|
            --         Monocle.Lens.modify loaderStylel <|
            --             Animation.update animMsg
            StartLoading ->
                Return.map (loaderStylel.set True)
                    >> Return.map
                        (\m -> { m | message = "Animation start" })

            -- Return.map <| Monocle.Lens.modify loaderStylel showLoader
            StopLoading ->
                Return.map (loaderStylel.set False)
                    >> Return.map
                        (\m -> { m | message = "Animation start" })

            EndAnimation ->
                Return.map <| \m -> { m | message = "Animation done" }

            AddComp ->
                let
                    ( incdec, _ ) =
                        IncDec.init
                in
                    Return.map <|
                        \m -> { m | incdecs = Array.push incdec m.incdecs }

            RemoveComp ->
                Return.zero



-- Return.map <| Monocle.Lens.modify loaderStylel hideLoader


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
        , div [ class "row" ]
            [ div [ class "col-sm" ]
                [ text model.message
                ]
            ]
        , div [ class "row" ]
            [ div [ class "col-sm-12" ]
                [ button [ type_ "button", class "btn btn-primary", onClick AddComp ] [ text "Add indec component" ]
                , button [ type_ "button", class "btn btn-primary", onClick RemoveComp ] [ text "Remove incdec component (TBD)" ]
                ]
            ]
        , div []
            (model.incdecs
                |> Array.indexedMap
                    (\i incdec ->
                        div [ class "row" ]
                            [ div [ class "col-sm" ]
                                [ L.view (incdecl i) IncDecMessage IncDec.view model
                                ]
                            ]
                    )
                |> Array.toList
            )
        , div [ class "row" ]
            [ div [ class "col-sm-12" ]
                [ linkTo "/" [ class "btn btn-primary" ] [ text "Домой" ]
                , linkTo "/account" [ class "btn btn-primary" ] [ text "Пользователь" ]
                , linkTo "/login" [ class "btn btn-primary" ] [ text "Авторизация" ]
                , linkTo "/map" [ class "btn btn-primary" ] [ text "Карта" ]
                , link "/" "Домой"
                , link "/account" "Пользователь"
                , link "/login" "Авторизация"
                , link "/map" "Карта"
                ]
            ]
        , loader model.loaderStyle EndAnimation
        ]


linkTo : String -> (List (Html.Attribute Msg) -> List (Html Msg) -> Html Msg)
linkTo pathname =
    let
        linkAttrs =
            clickTo pathname
    in
        \attrs contents -> a (List.append attrs linkAttrs) contents



--
--


clickTo : String -> List (Html.Attribute Msg)
clickTo path =
    [ href path
      -- , onWithOptions
      --     "click"
      --     { stopPropagation = True, preventDefault = True }
      --     (Json.map (\_ -> NavigateTo path) Json.value)
    ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Time.every second Tick
        , L.subs incdec1l IncDecMessage IncDec.subscriptions model
        , L.subs incdec2l IncDecMessage IncDec.subscriptions model
          -- , Animation.subscription Animate [ model.loaderStyle ]
        ]
