require 'RMagick'
include Magick

movie = Magick::ImageList.new
100.times do |i|
  movie.push(Magick::Image.read('public/movie-js/img/frame.png').first)
end
movie.write('movie.gif')
