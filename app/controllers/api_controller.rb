class ApiController < ApplicationController
  def upload
    binding.pry
    render :json => {hoge: 'fuga'}
  end
end
