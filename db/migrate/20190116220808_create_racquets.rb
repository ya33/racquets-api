class CreateRacquets < ActiveRecord::Migration[5.2]
  def change
    create_table :racquets do |t|
      t.references :brand, foreign_key: true
      t.string :model_name
      t.decimal :reference_weight
      t.decimal :reference_balance
      t.decimal :reference_swingweight
      t.decimal :length
      t.integer :stiffness
      t.integer :string_pattern_mains
      t.integer :string_pattern_crosses
      t.integer :head_size_cm2
      t.integer :head_size_sq2
      t.string :composition

      t.timestamps
    end
  end
end
