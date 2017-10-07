module Pages.Home
    exposing
        ( Model
        , Msg
        , init
        , subscriptions
        , update
        , view
        )

-- import Components.IncDec as IncDec
-- import Array exposing (Array)

import Components.IncDecC as IncDecC
import Components.Loader exposing (loader)
import Helper exposing (link)
import Html exposing (Html, a, button, div, text)
import Html.Attributes exposing (class, href, type_)
import Html.Events exposing (onClick, onWithOptions)
import LensChild as L
import Monocle.Lens exposing (Lens)
import Return exposing (Return)
import Time exposing (Time, second)


type alias Model =
    { counter : Time

    -- , incdec1 : IncDec.Model
    -- , incdec2 : IncDec.Model
    , incdecC : IncDecC.Model

    -- , incdecs : Array IncDec.Model
    , loaderStyle : Bool
    , message : String
    }



-- incdec1Component =
--     L.component
--         .incdec1
--         (\u m -> { m | incdec1 = u })
--         IncDecMessage
--         { init = IncDec.init
--         , view = IncDec.view
--         , update = IncDec.update
--         , subscriptions = IncDec.subscriptions
--         }
--
--
-- incdec2Component =
--     L.component
--         .incdec2
--         (\u m -> { m | incdec2 = u })
--         IncDecMessage
--         { init = IncDec.init
--         , view = IncDec.view
--         , update = IncDec.update
--         , subscriptions = IncDec.subscriptions
--         }


incdecCComponent =
    L.component
        .incdecC
        (\u m -> { m | incdecC = u })
        IncDecCMessage
        IncDecC.mainP



-- { init = IncDecC.init
-- , view = IncDecC.view
-- , update = IncDecC.update
-- , subscriptions = IncDecC.subscriptions
-- }
-- incdecComponent index =
--     L.component
--         (\m ->
--             case Array.get index m.incdecs of
--                 Nothing ->
--                     Debug.crash "WTF"
--
--                 Just indec ->
--                     indec
--         )
--         (\u m -> { m | incdecs = Array.set index u m.incdecs })
--         IncDecMessage
--         { init = IncDec.init
--         , view = IncDec.view
--         , update = IncDec.update
--         , subscriptions = IncDec.subscriptions
--         }


loaderStylel : Lens Model Bool
loaderStylel =
    Lens .loaderStyle <| \u m -> { m | loaderStyle = u }


type Msg
    = Tick Time
      -- | IncDecMessage (Lens Model IncDec.Model) IncDec.Msg
    | IncDecCMessage (IncDecC.Msg -> IncDecC.Model -> ( IncDecC.Model, Cmd IncDecC.Msg, Maybe IncDecC.ParentMsg )) (Lens Model IncDecC.Model) IncDecC.Msg
      -- | IncDecMessage (L.Lift Model IncDec.Model IncDec.Msg)
      -- | IncDecMessage (L.Component (Lens Model IncDec.Model))
    | StartLoading
    | StopLoading
    | EndAnimation
      -- | AddComp
      -- | RemoveComp
    | SubCmd
    | NoOp



-- initModel : IncDec.Model -> IncDec.Model -> IncDecC.Model -> Model
-- initModel i1 i2 i3 =


initModel : IncDecC.Model -> Model
initModel i3 =
    { counter = 0

    -- , incdec1 = i1
    -- , incdec2 = i2
    , incdecC = i3

    -- , incdecs = Array.empty
    , loaderStyle = False
    , message = "Initial"
    }


init : ( Model, Cmd Msg )
init =
    Return.map initModel
        -- (L.init incdec1Component)
        -- (L.init incdec2Component)
        (L.init incdecCComponent)



-- (L.init incdecCComponent)


incdecC_effect : Maybe IncDecC.ParentMsg -> ( Model, Cmd Msg ) -> ( Model, Cmd Msg )
incdecC_effect msg =
    case msg of
        Nothing ->
            Return.map (\m -> { m | message = "Not here" })

        Just IncDecC.IncDecC_Boo ->
            Return.map (\m -> { m | message = "Boo" })


update : Msg -> Model -> ( Model, Cmd Msg )
update msg =
    Return.singleton
        >> (case msg of
                NoOp ->
                    Return.zero

                Tick newTime ->
                    Return.map
                        (\model -> { model | counter = newTime })

                -- IncDecMessage lens subMsg ->
                --     L.update lens IncDecMessage (\m -> IncDec.update subMsg m)
                IncDecCMessage u lens subMsg ->
                    L.updateP u lens subMsg IncDecCMessage incdecC_effect

                -- L.updateP lens IncDecCMessage (\m -> IncDecC.update subMsg m) incdecC_effect
                StartLoading ->
                    Return.map (loaderStylel.set True)
                        >> Return.map
                            (\m -> { m | message = "Animation start" })

                StopLoading ->
                    Return.map (loaderStylel.set False)
                        >> Return.map
                            (\m -> { m | message = "Animation start" })

                EndAnimation ->
                    Return.map
                        (\m -> { m | message = "Animation done" })

                -- AddComp ->
                --     let
                --         -- TODO: Think about cmd
                --         ( incdec, _ ) =
                --             IncDec.init
                --     in
                --     Return.map
                --         (\m -> { m | incdecs = Array.push incdec m.incdecs })
                --
                -- RemoveComp ->
                --     Return.zero
                SubCmd ->
                    let
                        _ =
                            Debug.log "SubCmd" 0
                    in
                    Return.map
                        (\m -> { m | message = "Best solution!" })
           )



-- Return.map <| Monocle.Lens.modify loaderStylel hideLoader


view : Model -> Html Msg
view model =
    div []
        [ text <| "HOME: WIP" ++ toString model
        , div [ class "row" ]
            [ -- div
              --     [ class "col-sm-4" ]
              --     [ L.view incdec1Component model
              --     ]
              -- , div
              --     [ class "col-sm-4" ]
              --     [ L.view incdec2Component model
              --     ]
              -- ,
              div
                [ class "col-sm-4" ]
                -- [ L.viewWithEvents SubCmd incdecCComponent model
                [ L.view incdecCComponent model

                -- [ L.viewWithEvents [ type_ "button", class "btn btn-primary", onClick StartLoading ] incdecCComponent model
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
                [-- button [ type_ "button", class "btn btn-primary", onClick AddComp ] [ text "Add indec component" ]
                 -- , button [ type_ "button", class "btn btn-primary", onClick RemoveComp ] [ text "Remove incdec component (TBD)" ]
                ]
            ]

        -- , div []
        --     (model.incdecs
        --         |> Array.indexedMap
        --             (\i incdec ->
        --                 div [ class "row" ]
        --                     [ div [ class "col-sm" ]
        --                         [ L.view (incdecComponent i) model
        --                         ]
        --                     ]
        --             )
        --         |> Array.toList
        --     )
        , div [ class "row" ]
            [ div [ class "col-sm-12" ]
                [ link "/" "Домой"
                , link "/account" "Пользователь"
                , link "/login" "Авторизация"
                , link "/map" "Карта"
                ]
            ]
        , loader model.loaderStyle EndAnimation
        ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ --Time.every second Tick
          --   L.subscriptions incdec1Component model
          -- , L.subscriptions incdec2Component model
          L.subscriptions incdecCComponent model
        ]
