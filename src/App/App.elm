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
import Pages.Account as AccountPage
import Pages.Home as HomePage
import Pages.Login as LoginPage
import Return exposing (Return)


type alias Model =
    { currentPage : PageModel
    , incdec : IncDec.Model
    , loaderStyle : Animation.State
    }


type PageModel
    = HomePage HomePage.Model
    | AccountPage AccountPage.Model
    | LoginPage LoginPage.Model
    | NotFound


type Msg
    = NoOp
    | UrlChange Navigation.Location
    | PageMsg PageMsg
    | IncDecMessage IncDec.Msg
      -- | HomeClicked
      -- | AccountClicked
    | NavigateTo String
    | Animate Animation.Msg
    | StartLoading
    | StopLoading


type PageMsg
    = HomePageMsg HomePage.Msg
    | AccountPageMsg AccountPage.Msg
    | LoginPageMsg LoginPage.Msg



-- TODO: IncDec nested init:Cmds
-- defaultModel : Model
-- defaultModel =
--     { incdec = IncDec.model }


init : Navigation.Location -> ( Model, Cmd Msg )
init location =
    let
        ( incdecModel, incdecCmd ) =
            IncDec.init
    in
        loadPage location
            { currentPage = NotFound
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
            |> Return.command (Cmd.map IncDecMessage incdecCmd)



-- TODO: Restore lost !!!
-- Return.command
-- , Cmd.batch [ Cmd.map IncDecMessage incdecCmd ]


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    let
        _ =
            Debug.log "update" msg
    in
        case msg of
            NoOp ->
                ( model, Cmd.none )

            UrlChange location ->
                loadPage location model

            PageMsg pageMsg ->
                updateCurrentPage pageMsg model.currentPage
                    |> Return.mapBoth PageMsg (\page -> { model | currentPage = page })

            IncDecMessage subMsg ->
                IncDec.update subMsg model.incdec
                    |> Return.mapBoth
                        IncDecMessage
                        (\m -> { model | incdec = m })

            NavigateTo pathname ->
                ( model, Cmd.batch [ Navigation.newUrl pathname ] )

            -- HomeClicked ->
            --     ( model, Cmd.batch [ Navigation.newUrl "/" ] )
            --
            -- AccountClicked ->
            --     ( model, Cmd.batch [ Navigation.newUrl "/account" ] )
            Animate animMsg ->
                ( { model
                    | loaderStyle = Animation.update animMsg model.loaderStyle
                  }
                , Cmd.none
                )

            StartLoading ->
                ( { model | loaderStyle = showLoader model.loaderStyle }, Cmd.none )

            StopLoading ->
                ( { model | loaderStyle = hideLoader model.loaderStyle }, Cmd.none )


updateCurrentPage : PageMsg -> PageModel -> ( PageModel, Cmd PageMsg )
updateCurrentPage msg model =
    case ( msg, model ) of
        ( HomePageMsg msg, HomePage page ) ->
            HomePage.update msg page
                |> Return.mapBoth HomePageMsg HomePage

        ( AccountPageMsg msg, AccountPage page ) ->
            AccountPage.update msg page
                |> Return.mapBoth AccountPageMsg AccountPage

        ( LoginPageMsg msg, LoginPage page ) ->
            LoginPage.update msg page
                |> Return.mapBoth LoginPageMsg LoginPage

        _ ->
            let
                _ =
                    Debug.log "received unexpected message" msg
            in
                Return.singleton model


loadPage : Navigation.Location -> Model -> ( Model, Cmd Msg )
loadPage location model =
    let
        -- pageView =
        --     Analytics.pageView location.pathname
        mapToCurrentPage pageMsg pageModel =
            Return.mapBoth
                (PageMsg << pageMsg)
                (\page ->
                    { model
                        | currentPage = pageModel page
                    }
                )
    in
        case Page.parse location of
            Page.Home ->
                HomePage.init
                    |> mapToCurrentPage HomePageMsg HomePage

            -- |> Return.command pageView
            Page.Account ->
                AccountPage.init
                    |> mapToCurrentPage AccountPageMsg AccountPage

            Page.Login ->
                LoginPage.init
                    |> mapToCurrentPage LoginPageMsg LoginPage

            -- |> Return.effect_ fetchNewsletterFiles
            -- |> Return.command pageView
            --
            -- Page.System name ->
            --     SystemPage.init name
            --         |> mapToCurrentPage NewsletterMsg NewsletterPage
            --         |> Return.andThen (fetchNewsletter name)
            --         |> Return.effect_ fetchNewsletterFiles
            --         |> Return.command pageView
            Page.NotFound ->
                ( model, Cmd.none )


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
            , body model
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


body : Model -> Html Msg
body model =
    case model.currentPage of
        HomePage page ->
            HomePage.view page
                |> Html.map (PageMsg << HomePageMsg)

        AccountPage page ->
            AccountPage.view page
                |> Html.map (PageMsg << AccountPageMsg)

        LoginPage page ->
            LoginPage.view page
                |> Html.map (PageMsg << LoginPageMsg)

        -- NewslettersPage page ->
        --     NewslettersPage.view model.newsletterFiles page
        --         |> Html.map (PageMsg << NewslettersMsg)
        --
        -- NewsletterPage page ->
        --     NewsletterPage.view
        --         { screenWidth = model.width
        --         , files = (FetchData.default [] model.newsletterFiles)
        --         , newsletter =
        --             Dict.get page.filename model.newsletters
        --                 |> Maybe.withDefault FetchData.NotStarted
        --         }
        --         page
        --         |> Html.map (PageMsg << NewsletterMsg)
        NotFound ->
            div [ class "not__found" ]
                [ text "Page Not Found" ]


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
    let
        incdecSubs =
            IncDec.subscriptions model.incdec

        pageSubs =
            case model.currentPage of
                HomePage page ->
                    Sub.map (PageMsg << HomePageMsg) (HomePage.subscriptions page)

                AccountPage page ->
                    Sub.map (PageMsg << AccountPageMsg) (AccountPage.subscriptions page)

                LoginPage page ->
                    Sub.map (PageMsg << LoginPageMsg) (LoginPage.subscriptions page)

                NotFound ->
                    Sub.none
    in
        Sub.batch
            [ pageSubs
            , Sub.map IncDecMessage incdecSubs
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
