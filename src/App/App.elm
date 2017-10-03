module App exposing (..)

import Animation
import Components.Loader exposing (hideLoader, loader, showLoader)
import Html exposing (Html, a, button, div, h1, text)
import Html.Attributes exposing (class, href, title, type_)
import Html.Events exposing (onClick, onWithOptions)
import Json.Decode as Json
import Navigation
import Page
import Return exposing (Return)
import Monocle.Lens exposing (Lens)
import Return.Optics exposing (refractl)


type alias Model =
    { page : Page.Model
    , loaderStyle : Animation.State
    }


pagel : Lens Model Page.Model
pagel =
    Lens .page <| \u m -> { m | page = u }


loaderStylel : Lens Model Animation.State
loaderStylel =
    Lens .loaderStyle <| \u m -> { m | loaderStyle = u }


type Msg
    = NoOp
    | UrlChange Navigation.Location
    | PageMsg Page.Msg
      -- | HomeClicked
      -- | AccountClicked
    | NavigateTo String
    | Animate Animation.Msg
    | StartLoading
    | StopLoading



-- TODO: IncDec nested init:Cmds
-- defaultModel : Model
-- defaultModel =
--     { incdec = IncDec.model }
-- TODO: Returt functional style


init : Navigation.Location -> Return Msg Model
init location =
    let
        ( pageModel, pageCmd ) =
            Page.init location
                |> Return.mapCmd PageMsg

        initModel =
            { page = pageModel
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
    in
        Return.singleton initModel
            |> Return.command pageCmd



-- TODO: Restore lost !!!
-- Return.command
-- , Cmd.batch [ Cmd.map IncDecMessage incdecCmd ]


update : Msg -> Model -> Return Msg Model
update msg =
    let
        _ =
            Debug.log "update" msg
    in
        Return.singleton
            >> case msg of
                NoOp ->
                    Return.zero

                UrlChange location ->
                    refractl pagel PageMsg <| always (Page.init location)

                PageMsg pageMsg ->
                    refractl pagel PageMsg <| Page.update pageMsg

                NavigateTo pathname ->
                    Return.command <| Navigation.newUrl pathname

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
    div [ class "container-overflow-wrap" ]
        [ div [ class "container" ]
            [ h1 [] [ text "App component" ]
            , div [ class "row" ]
                [ div [ class "col-sm-12" ]
                    [ button [ type_ "button", class "btn btn-primary", onClick StartLoading ] [ text "Simulate start loading" ]
                    , button [ type_ "button", class "btn btn-primary", onClick StopLoading ] [ text "Simulate stop loading" ]
                    ]
                ]
              -- , div [ class "row row-backbordered" ]
              --     [ div [ class "col-sm-12" ]
              --         [ link "Домой" HomeClicked
              --         , link "Пользователь" AccountClicked
              --         ]
              --     ]
            , div [ class "row" ]
                [ div [ class "col-sm-12" ]
                    [ linkTo "/" [ class "btn btn-primary" ] [ text "Домой" ]
                    , linkTo "/account" [ class "btn btn-primary" ] [ text "Пользователь" ]
                    , linkTo "/login" [ class "btn btn-primary" ] [ text "Авторизация" ]
                    , linkTo "/map" [ class "btn btn-primary" ] [ text "Карта" ]
                    ]
                ]
            , Page.view model.page |> Html.map PageMsg
            ]
        , loader model.loaderStyle
        ]


linkTo : String -> (List (Html.Attribute Msg) -> List (Html Msg) -> Html Msg)
linkTo pathname =
    let
        linkAttrs =
            clickTo pathname
    in
        \attrs contents -> a (List.append attrs linkAttrs) contents


clickTo : String -> List (Html.Attribute Msg)
clickTo path =
    [ href path
    , onWithOptions
        "click"
        { stopPropagation = True, preventDefault = True }
        (Json.map (\_ -> NavigateTo path) Json.value)
    ]


link : String -> msg -> Html msg
link label msg =
    div
        [ class "link_control"
        , title "Account"
        , onClick msg
        ]
        [ div [] [ text label ]
        ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Page.pageSubs model.page
            |> Sub.map PageMsg
        , Animation.subscription Animate [ model.loaderStyle ]
        ]


main : Program Never Model Msg
main =
    Navigation.program UrlChange
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
