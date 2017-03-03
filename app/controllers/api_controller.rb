class ApiController < ApplicationController
  require 'RMagick'
  include Magick

  def upload
    movie = Magick::ImageList.new
    movie.ticks_per_second = 10
    params['_json'].each do |item|
      movie.push(Magick::Image.read_inline(item).first)
      movie.cur_image.delay=10
    end
    movie.write("movie.gif")
    system('ffmpeg -i movie.gif -pix_fmt yuv420p movie.mp4')
    # ffmpeg -i movie.gif -pix_fmt yuv420p movie.mp4
    # movie.write("movie")
    render :json => {hoge: 'fuga'}
  end
end
