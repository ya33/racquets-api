class Addition < ApplicationRecord
  belongs_to :customization
  validates :mass_added, presence: true, numericality: { greater_than: 0 }
  validates :location_from_bottom, presence: true, numericality: { greater_than: 0 }
  validates :location_from_sym_axis, numericality: { greater_than: 0 }
end
