json.extract! @racquet, \
              :id, \
              :brand, \
              :trade_name, \
              :reference_weight, \
              :reference_balance, \
              :reference_swingweight, \
              :length, :stiffness, \
              :string_pattern_mains, \
              :string_pattern_crosses, \
              :head_size_cm2, \
              :head_size_in2, \
              :composition
json.brand @racquet.brand.name
# json.customizations @racquet.customizations do |customization|
#   json.extract! customization, :id, :code
# end
