class Racquet < ApplicationRecord
  has_many :customizations
  belongs_to :brand
  validates :brand_id, presence: true
  validates :reference_weight, presence: true, numericality: { greater_than: 200 }
  validates :reference_balance, presence: true, numericality: { greater_than: 20 }
  validates :reference_swingweight, presence: true, numericality: { greater_than: 200 }
  validates :length, presence: true, numericality: { greater_than: 40 }
  validates :trade_name, presence: true, uniqueness: { scope: [:reference_weight, :reference_swingweight, :reference_balance] }
end
