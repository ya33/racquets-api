json.racquets do
  json.array! @racquets do |racquet|
    json.extract! racquet, :id, :brand, :trade_name, :reference_weight, :reference_balance, :reference_swingweight
    json.brand racquet.brand.name
  end
end
json.brands do
  json.array! @brands do |brand|
    json.extract! brand, :id, :name
  end
end
