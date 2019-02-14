class RemoveColumnsToAdditions < ActiveRecord::Migration[5.2]
  def change
    change_table :additions do |t|
      t.remove :swingweight_added
      t.remove :twistweight_added
      t.remove :balance_transfer
      t.rename :activated?, :status
    end
  end
end
