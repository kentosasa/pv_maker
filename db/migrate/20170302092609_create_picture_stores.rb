class CreatePictureStores < ActiveRecord::Migration[5.0]
  def change
    create_table :picture_stores do |t|
      t.string :store_name
      t.string :picture
      t.string :content
      t.integer :pv_id


      t.timestamps
    end
  end
end
