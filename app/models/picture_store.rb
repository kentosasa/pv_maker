class PictureStore < ApplicationRecord
  mount_uploader :picture, PictureUploader
end
