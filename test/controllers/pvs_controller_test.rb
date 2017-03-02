require 'test_helper'

class PvsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @pv = pvs(:one)
  end

  test "should get index" do
    get pvs_url
    assert_response :success
  end

  test "should get new" do
    get new_pv_url
    assert_response :success
  end

  test "should create pv" do
    assert_difference('Pv.count') do
      post pvs_url, params: { pv: { password: @pv.password, title: @pv.title, user_name: @pv.user_name } }
    end

    assert_redirected_to pv_url(Pv.last)
  end

  test "should show pv" do
    get pv_url(@pv)
    assert_response :success
  end

  test "should get edit" do
    get edit_pv_url(@pv)
    assert_response :success
  end

  test "should update pv" do
    patch pv_url(@pv), params: { pv: { password: @pv.password, title: @pv.title, user_name: @pv.user_name } }
    assert_redirected_to pv_url(@pv)
  end

  test "should destroy pv" do
    assert_difference('Pv.count', -1) do
      delete pv_url(@pv)
    end

    assert_redirected_to pvs_url
  end
end
