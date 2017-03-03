class CreatePvs < ActiveRecord::Migration[5.0]
  def change
    create_table :pvs do |t|
      t.string :title
      t.string :user_name
      t.string :password

      t.timestamps
    end
  end
end
