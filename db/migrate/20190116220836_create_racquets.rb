class CreateRacquets < ActiveRecord::Migration[5.2]
  def change
    create_table :racquets do |t|
      t.references :model_name, foreign_key: true
      t.decimal :initial_weight
      t.decimal :current_weight
      t.decimal :initial_balance
      t.decimal :current_balance
      t.decimal :initial_swingweight
      t.decimal :current_swingweight
      t.text :comment
      t.string :player_racquet_code
      t.references :player, foreign_key: { to_table: :users }
      t.references :customizer, foreign_key: { to_table: :users }
      t.timestamps
    end
  end
end
