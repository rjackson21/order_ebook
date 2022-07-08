require "test_helper"

class OrderControllerTest < ActionDispatch::IntegrationTest
  test "should get ebook" do
    get order_ebook_url
    assert_response :success
  end
end
