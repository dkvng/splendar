class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      
      t.timestamps
    end
  end
end
