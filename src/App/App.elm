module App exposing (..)

import Animation
import Components.Loader exposing (hideLoader, loader, showLoader)
import Html exposing (Html, a, button, div, h1, text)
import Html.Attributes exposing (class, href, title, type_)
import Html.Events exposing (onClick, onWithOptions)
import IncDec
import Json.Decode as Json
import Navigation
import Page
import Return exposing (Return)


type alias Model =
    { page : Page.Model
    , incdec : IncDec.Model
    , loaderStyle : Animation.State
    }


type Msg
    = NoOp
    | UrlChange Navigation.Location
    | PageMsg Page.Msg
    | IncDecMessage IncDec.Msg
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
        ( incdecModel, incdecCmd ) =
            IncDec.init
                |> Return.mapCmd IncDecMessage

        ( pageModel, pageCmd ) =
            Page.init location
                |> Return.mapCmd PageMsg

        initModel =
            { page = pageModel
            , incdec = incdecModel
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
            |> Return.command incdecCmd



-- TODO: Restore lost !!!
-- Return.command
-- , Cmd.batch [ Cmd.map IncDecMessage incdecCmd ]


update : Msg -> Model -> Return Msg Model
update msg model =
    let
        _ =
            Debug.log "update" msg
    in
        case msg of
            NoOp ->
                Return.singleton model

            UrlChange location ->
                Page.init location
                    |> Return.mapBoth PageMsg (\page -> { model | page = page })

            -- (\pageModel -> { model | page = pageModel })
            PageMsg pageMsg ->
                Page.update pageMsg model.page
                    |> Return.mapBoth PageMsg (\page -> { model | page = page })

            IncDecMessage subMsg ->
                IncDec.update subMsg model.incdec
                    |> Return.mapBoth IncDecMessage
                        (\m -> { model | incdec = m })

            NavigateTo pathname ->
                -- Return.singleton model
                --     |> Return.command (Navigation.newUrl pathname)
                Return.return model (Navigation.newUrl pathname)

            -- ( model, Cmd.batch [ Navigation.newUrl pathname ] )
            -- HomeClicked ->
            --     ( model, Cmd.batch [ Navigation.newUrl "/" ] )
            --
            -- AccountClicked ->
            --     ( model, Cmd.batch [ Navigation.newUrl "/account" ] )
            Animate animMsg ->
                Return.singleton
                    { model | loaderStyle = Animation.update animMsg model.loaderStyle }

            StartLoading ->
                Return.singleton
                    { model | loaderStyle = showLoader model.loaderStyle }

            StopLoading ->
                Return.singleton
                    { model | loaderStyle = hideLoader model.loaderStyle }


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
                    ]
                ]
            , div [ class "row" ]
                [ div [ class "col-sm-6" ]
                    [ IncDec.view model.incdec |> Html.map IncDecMessage
                    ]
                , div
                    [ class "col-sm-6" ]
                    [ IncDec.view model.incdec |> Html.map IncDecMessage
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
        , IncDec.subscriptions model.incdec
            |> Sub.map IncDecMessage
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
