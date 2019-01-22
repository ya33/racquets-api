require 'json'

puts "serializing JSON file"
filepath = 'db/racquets.json'
serialized_racquets = File.read(filepath)
racquets =  JSON.parse(serialized_racquets)

puts "Starting creating racquets"
racquets['racquets'].each do |racquet|
  print '-'
  brand = Brand.new(name: racquet['brand'])
  brand.valid? && brand.new_record? ? brand.save : brand = Brand.where(name: racquet['brand']).take
  Racquet.create(
    brand: brand,
    trade_name: racquet['model_name'],
    reference_weight: racquet['reference_weight'],
    reference_balance: racquet['reference_balance'],
    reference_swingweight: racquet['reference_swingweight'],
    length: racquet['length'],
    stiffness: racquet['stiffness'],
    string_pattern_mains: racquet['string_pattern_mains'],
    string_pattern_crosses: racquet['string_pattern_crosses'],
    head_size_cm2: racquet['head_size_cm2'],
    head_size_in2: racquet['head_size_in2'],
    composition: racquet['composition']
    )
end
puts "Done!"
