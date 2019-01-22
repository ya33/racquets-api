class Brand < ApplicationRecord
  has_many :racquets
  validates :name, presence: true
end
