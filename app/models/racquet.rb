class Racquet < ApplicationRecord
  has_many :customizations
  belongs_to :brand
  validates :reference_weight, presence: true, numericality: { greater_than: 200 }
  validates :reference_balance, presence: true, numericality: { greater_than: 20 }
  validates :reference_swingweight, presence: true, numericality: { greater_than: 200 }
  validates :length, presence: true, numericality: { greater_than: 40 }
  validates :model_name, presence: true
end
