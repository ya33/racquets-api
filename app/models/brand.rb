class Brand < ApplicationRecord
  has_many :racquets, dependent: :destroy
  validates_associated :racquets
  validates :name, presence: true, uniqueness: true
end
