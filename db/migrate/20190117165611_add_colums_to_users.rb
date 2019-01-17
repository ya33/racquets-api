class AddColumsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :name, :string
    add_column :users, :ranking, :string
    add_column :users, :gender, :string
    add_column :users, :customizer?, :boolean, default: false
    add_column :users, :premium?, :boolean, default: false
  end
end
