class Customization < ApplicationRecord
  belongs_to :racquet
  validates :mass_added, presence: true, numericality: { greater_than: 0 }
  validates :location_from_bottom, presence: true, numericality: { greater_than: 0 }
  validates :location_from_sym_axis, numericality: { greater_than: 0 }
end
