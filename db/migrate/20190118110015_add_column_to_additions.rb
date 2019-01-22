class AddColumnToAdditions < ActiveRecord::Migration[5.2]
  def change
    add_column :additions, :twistweight_added, :decimal
    add_column :additions, :activated?, :boolean
  end
end
