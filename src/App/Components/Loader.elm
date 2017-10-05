module Components.Loader exposing (loader)

-- import Animation exposing (..)

import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Html.Events exposing (on)
import Json.Decode


loader : Bool -> msg -> Html msg
loader visible msg1 =
    div
        [ class <|
            "loader-container"
                ++ (if visible then
                        " show"
                    else
                        " hide"
                   )
        , on "transitionend" <|
            Json.Decode.succeed msg1
        ]
        [ div [ class "loader" ] [ text "Loading..." ] ]



-- loader : Animation.State -> Html msg
-- loader style =
--     div [ class "panel panel-default panel-floating panel-floating-fixed animated" ]
--         [ div [ class "panel-body" ]
--             [ text "Loading"
--
--             -- <button type="button" class="close" aria-label="Close" data-action="dismiss-homepageNotification">
--             --   <span aria-hidden="true">×</span>
--             -- </button>
--             -- <small class="text-uppercase text-muted">Update</small>
--             -- <h5 class="m-t-0">V4 Beta update! Subscribe for 50% off any theme! 😍</h5>
--             -- <p class="text-muted m-b">We updated all our themes to Bootstrap 4's latest beta! To celebrate, we're giving 50% off if you sign up to receive updates and discounts.</p>
--             -- <form class="form" action="//getbootstrap.us13.list-manage.com/subscribe/post?u=e3428dd6b8fda73bc5ba8b6e6&amp;id=198881a019" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate="">
--             --   <input class="form-control input-lg panel-email-input m-b" id="mce-EMAIL" name="EMAIL" type="email" placeholder="Email">
--             --   <!-- This is to throw off spambots -->
--             --   <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_e3428dd6b8fda73bc5ba8b6e6_198881a019" tabindex="-1" value=""></div>
--             --   <input type="submit" value="Get 50% off" name="subscibe" id="mc-embedded-subscribe" class="btn btn-lg btn-block">
--             --   <div id="mce-responses" class="clear">
--             --     <div class="response" id="mce-error-response" style="display:none"></div>
--             --     <div class="response" id="mce-success-response" style="display:none"></div>
--             --   </div>
--             -- </form>
--             ]
--         ]
-- showLoader =
--     Animation.interrupt
--         [ Animation.set
--             [ Animation.display Animation.flex ]
--         , Animation.set
--             [ Animation.opacity 1 ]
--         ]
--
--
-- hideLoader =
--     Animation.interrupt
--         [ Animation.to
--             [ Animation.opacity 0 ]
--         , Animation.set
--             [ Animation.display Animation.none ]
--         ]
