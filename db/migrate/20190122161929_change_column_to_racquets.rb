class ChangeColumnToRacquets < ActiveRecord::Migration[5.2]
  def change
    rename_column :racquets, :head_size_sq2, :head_size_in2
    rename_column :racquets, :model_name, :trade_name
  end
end
