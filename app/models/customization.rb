class Customization < ApplicationRecord
  has_many :additions, dependent: :destroy
  belongs_to :racquet
  belongs_to :player, class_name: "User"
  belongs_to :customizer, class_name: "User"
  validates :racquet, presence: true
  validates :initial_weight, presence: true, numericality: { greater_than: 200 }
  validates :initial_balance, presence: true, numericality: { greater_than: 20 }
  validates :initial_swingweight, presence: true, numericality: { greater_than: 200 }
  validates :code, presence: true
end
