class CreateAdditions < ActiveRecord::Migration[5.2]
  def change
    create_table :additions do |t|
      t.decimal :mass_added
      t.decimal :location_from_bottom
      t.string :location_from_sym_axis
      t.decimal :swingweight_added
      t.decimal :balance_transfer
      t.references :customization, foreign_key: true

      t.timestamps
    end
  end
end
