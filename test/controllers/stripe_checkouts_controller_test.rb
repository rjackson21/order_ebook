require "test_helper"

class StripeCheckoutsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get stripe_checkouts_index_url
    assert_response :success
  end
end
