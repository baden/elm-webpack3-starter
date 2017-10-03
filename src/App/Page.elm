module Page
    exposing
        ( Page(..)
        , Msg
        , Model
        , pageSubs
        , init
        , update
        , view
        )

import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Navigation exposing (Location)
import UrlParser exposing (..)
import Pages.Account as AccountPage
import Pages.Home as HomePage
import Pages.Login as LoginPage
import Pages.Map as MapPage
import Return exposing (Return)


type Page
    = Home
    | Account
    | Login
    | Map
      -- | System String
    | NotFound


type Model
    = HomePage HomePage.Model
    | AccountPage AccountPage.Model
    | LoginPage LoginPage.Model
    | MapPage MapPage.Model
    | NotFoundPage


type Msg
    = HomePageMsg HomePage.Msg
    | AccountPageMsg AccountPage.Msg
    | LoginPageMsg LoginPage.Msg
    | MapPageMsg MapPage.Msg


parse : Navigation.Location -> Page
parse location =
    parsePath pageParser location
        |> Maybe.withDefault NotFound


pageParser : Parser (Page -> a) a
pageParser =
    oneOf
        [ map Account (s "account")
        , map Login (s "login")
        , map Map (s "map")
        , map Home (s "")
          -- , map System (s "system" </> string)
        ]


init : Navigation.Location -> ( Model, Cmd Msg )
init location =
    let
        -- pageView =
        --     Analytics.pageView location.pathname
        mapToCurrentPage pageMsg pageModel =
            Return.mapBoth
                pageMsg
                (\page ->
                    pageModel page
                )
    in
        case parse location of
            Home ->
                HomePage.init
                    |> mapToCurrentPage HomePageMsg HomePage

            -- |> Return.command pageView
            Account ->
                AccountPage.init
                    |> mapToCurrentPage AccountPageMsg AccountPage

            Login ->
                LoginPage.init
                    |> mapToCurrentPage LoginPageMsg LoginPage

            Map ->
                MapPage.init
                    |> mapToCurrentPage MapPageMsg MapPage

            -- |> Return.effect_ fetchNewsletterFiles
            -- |> Return.command pageView
            --
            -- Page.System name ->
            --     SystemPage.init name
            --         |> mapToCurrentPage NewsletterMsg NewsletterPage
            --         |> Return.andThen (fetchNewsletter name)
            --         |> Return.effect_ fetchNewsletterFiles
            --         |> Return.command pageView
            NotFound ->
                ( NotFoundPage, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
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

        ( MapPageMsg msg, MapPage page ) ->
            MapPage.update msg page
                |> Return.mapBoth MapPageMsg MapPage

        _ ->
            let
                _ =
                    Debug.log "received unexpected message" msg
            in
                Return.singleton model


view : Model -> Html Msg
view model =
    case model of
        HomePage page ->
            HomePage.view page
                |> Html.map HomePageMsg

        AccountPage page ->
            AccountPage.view page
                |> Html.map AccountPageMsg

        LoginPage page ->
            LoginPage.view page
                |> Html.map LoginPageMsg

        MapPage page ->
            MapPage.view page
                |> Html.map MapPageMsg

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
        NotFoundPage ->
            div [ class "not__found" ]
                [ text "Page Not Found" ]


pageSubs : Model -> Sub Msg
pageSubs model =
    case model of
        HomePage page ->
            HomePage.subscriptions page |> Sub.map HomePageMsg

        AccountPage page ->
            AccountPage.subscriptions page |> Sub.map AccountPageMsg

        LoginPage page ->
            LoginPage.subscriptions page |> Sub.map LoginPageMsg

        MapPage page ->
            MapPage.subscriptions page |> Sub.map MapPageMsg

        NotFoundPage ->
            Sub.none
