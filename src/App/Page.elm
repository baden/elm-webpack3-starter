module Page
    exposing
        ( Page(..)
        , PageMsg
        , PageModel
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
import Return exposing (Return)


type Page
    = Home
    | Account
    | Login
      -- | System String
    | NotFound


type PageModel
    = HomePage HomePage.Model
    | AccountPage AccountPage.Model
    | LoginPage LoginPage.Model
    | NotFoundPage


type PageMsg
    = HomePageMsg HomePage.Msg
    | AccountPageMsg AccountPage.Msg
    | LoginPageMsg LoginPage.Msg


parse : Navigation.Location -> Page
parse location =
    parsePath pageParser location
        |> Maybe.withDefault NotFound


pageParser : Parser (Page -> a) a
pageParser =
    oneOf
        [ map Account (s "account")
        , map Login (s "login")
        , map Home (s "")
          -- , map System (s "system" </> string)
        ]


init : Navigation.Location -> (PageMsg -> msg) -> ( PageModel, Cmd msg )
init location parentMsg =
    let
        -- pageView =
        --     Analytics.pageView location.pathname
        mapToCurrentPage pageMsg pageModel =
            Return.mapBoth
                (parentMsg << pageMsg)
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


update : PageMsg -> PageModel -> ( PageModel, Cmd PageMsg )
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

        _ ->
            let
                _ =
                    Debug.log "received unexpected message" msg
            in
                Return.singleton model


view : PageModel -> (PageMsg -> msg) -> Html msg
view model pageMsg =
    case model of
        HomePage page ->
            HomePage.view page
                |> Html.map (pageMsg << HomePageMsg)

        AccountPage page ->
            AccountPage.view page
                |> Html.map (pageMsg << AccountPageMsg)

        LoginPage page ->
            LoginPage.view page
                |> Html.map (pageMsg << LoginPageMsg)

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


pageSubs currentPage pageMsg =
    case currentPage of
        HomePage page ->
            Sub.map (pageMsg << HomePageMsg) (HomePage.subscriptions page)

        AccountPage page ->
            Sub.map (pageMsg << AccountPageMsg) (AccountPage.subscriptions page)

        LoginPage page ->
            Sub.map (pageMsg << LoginPageMsg) (LoginPage.subscriptions page)

        NotFoundPage ->
            Sub.none
