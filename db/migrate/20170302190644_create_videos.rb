class CreateVideos < ActiveRecord::Migration[5.0]
  def change
    create_table :videos do |t|
      t.string :title
      t.string :video
      t.integer :pv_id

      t.timestamps
    end
  end
end
