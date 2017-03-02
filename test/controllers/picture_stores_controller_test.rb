require 'test_helper'

class PictureStoresControllerTest < ActionDispatch::IntegrationTest
  setup do
    @picture_store = picture_stores(:one)
  end

  test "should get index" do
    get picture_stores_url
    assert_response :success
  end

  test "should get new" do
    get new_picture_store_url
    assert_response :success
  end

  test "should create picture_store" do
    assert_difference('PictureStore.count') do
      post picture_stores_url, params: { picture_store: { content: @picture_store.content, picture: @picture_store.picture, store_name: @picture_store.store_name } }
    end

    assert_redirected_to picture_store_url(PictureStore.last)
  end

  test "should show picture_store" do
    get picture_store_url(@picture_store)
    assert_response :success
  end

  test "should get edit" do
    get edit_picture_store_url(@picture_store)
    assert_response :success
  end

  test "should update picture_store" do
    patch picture_store_url(@picture_store), params: { picture_store: { content: @picture_store.content, picture: @picture_store.picture, store_name: @picture_store.store_name } }
    assert_redirected_to picture_store_url(@picture_store)
  end

  test "should destroy picture_store" do
    assert_difference('PictureStore.count', -1) do
      delete picture_store_url(@picture_store)
    end

    assert_redirected_to picture_stores_url
  end
end
