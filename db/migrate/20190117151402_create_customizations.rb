class CreateCustomizations < ActiveRecord::Migration[5.2]
  def change
    create_table :customizations do |t|
      t.decimal :mass_added
      t.decimal :location_from_bottom
      t.string :location_from_sym_axis
      t.references :racquet, foreign_key: true

      t.timestamps
    end
  end
end
