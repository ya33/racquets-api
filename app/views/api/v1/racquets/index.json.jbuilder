json.array! @racquets do |racquet|
  json.extract! racquet, :id, :brand, :trade_name
  json.brand racquet.brand.name
end
