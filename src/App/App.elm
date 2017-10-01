module App exposing (..)

import Html exposing (Html, a, div, h1, text)
import Html.Attributes exposing (class, href, title)
import Html.Events exposing (onClick, onWithOptions)
import IncDec
import Json.Decode as Json
import Navigation
import Page
import Pages.Account as AccountPage
import Pages.Home as HomePage
import Return exposing (Return)


type alias Model =
    { currentPage : PageModel
    , incdec : IncDec.Model
    }


type PageModel
    = HomePage HomePage.Model
    | AccountPage AccountPage.Model
    | NotFound


type Msg
    = NoOp
    | UrlChange Navigation.Location
    | PageMsg PageMsg
    | IncDecMessage IncDec.Msg
    | HomeClicked
    | AccountClicked
    | NavigateTo String


type PageMsg
    = HomePageMsg HomePage.Msg
    | AccountPageMsg AccountPage.Msg



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
        }
        |> Return.command (Cmd.map IncDecMessage incdecCmd)



-- TODO: Restore lost !!!
-- Return.command
-- , Cmd.batch [ Cmd.map IncDecMessage incdecCmd ]


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
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

        HomeClicked ->
            ( model, Cmd.batch [ Navigation.newUrl "/" ] )

        AccountClicked ->
            ( model, Cmd.batch [ Navigation.newUrl "/account" ] )


updateCurrentPage : PageMsg -> PageModel -> ( PageModel, Cmd PageMsg )
updateCurrentPage msg model =
    case ( msg, model ) of
        ( HomePageMsg msg, HomePage page ) ->
            HomePage.update msg page
                |> Return.mapBoth HomePageMsg HomePage

        ( AccountPageMsg msg, AccountPage page ) ->
            AccountPage.update msg page
                |> Return.mapBoth AccountPageMsg AccountPage

        x ->
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
                (\page -> { model | currentPage = pageModel page })
    in
    case Page.parse location of
        Page.Home ->
            HomePage.init
                |> mapToCurrentPage HomePageMsg HomePage

        -- |> Return.command pageView
        Page.Account ->
            AccountPage.init
                |> mapToCurrentPage AccountPageMsg AccountPage

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
            , IncDec.view model.incdec |> Html.map IncDecMessage
            , body model
            , div []
                [ link "Домой" HomeClicked
                , link "Пользователь" AccountClicked
                ]
            , div []
                [ linkTo "/" [ class "btn btn-primary" ] [ text "Домой" ]
                , linkTo "/account" [ class "btn btn-primary" ] [ text "Пользователь" ]
                ]
            ]
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
    in
    Sub.batch
        [ Sub.map (PageMsg << HomePageMsg) HomePage.subscriptions
        , Sub.map IncDecMessage incdecSubs
        ]


main : Program Never Model Msg
main =
    Navigation.program UrlChange
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
