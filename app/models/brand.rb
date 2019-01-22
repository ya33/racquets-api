class Brand < ApplicationRecord
  has_many :racquets, dependent: :destroy
  validates :name, presence: true, uniqueness: true
end
