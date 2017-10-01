module App exposing (..)

import Html exposing (Html, div, h1, text)
import Html.Attributes exposing (class)
import IncDec


type alias Model =
    { incdec : IncDec.Model
    }


type Msg
    = NoOp
    | IncDecMessage IncDec.Msg



-- TODO: IncDec nested init:Cmds
-- defaultModel : Model
-- defaultModel =
--     { incdec = IncDec.model }


init : ( Model, Cmd Msg )
init =
    let
        ( incdecModel, incdecCmd ) =
            IncDec.init
    in
    ( { incdec = incdecModel }
    , Cmd.batch [ Cmd.map IncDecMessage incdecCmd ]
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        IncDecMessage subMsg ->
            let
                ( newIncDecModel, subCmd ) =
                    IncDec.update subMsg model.incdec
            in
            ( { model | incdec = newIncDecModel }
            , Cmd.batch [ Cmd.map IncDecMessage subCmd ]
            )


view : Model -> Html Msg
view model =
    div [ class "container-overflow-wrap" ]
        [ div [ class "container" ]
            [ h1 [] [ text "App component" ]
            , IncDec.view model.incdec |> Html.map IncDecMessage
            ]
        ]


subscriptions : Model -> Sub Msg
subscriptions model =
    let
        incdecSubs =
            IncDec.subscriptions model.incdec
    in
    Sub.batch
        [ Sub.map IncDecMessage incdecSubs
        ]


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
