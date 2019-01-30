class Customization < ApplicationRecord
  has_many :additions, dependent: :destroy
  belongs_to :racquet
  belongs_to :player, class_name: "User"
  belongs_to :customizer, class_name: "User"
  validates :racquet, presence: true
  validates :initial_weight, presence: true, numericality: { greater_than: 200 }
  validates :initial_balance, presence: true, numericality: { greater_than: 20 }
  validates :initial_swingweight, presence: true, numericality: { greater_than: 200 }
  validates :code, presence: true

  def calculate_current_parameters
    additions = self.additions
    current_weight(additions)
    current_balance(additions)
    current_swingweight(additions)
    current_twistweight(additions)
  end

  def current_weight(additions)
    @current_weight = @initial_weight
    additions.each do |addition|
      @current_weight += addition.mass_added
    end
    @current_weight
  end

  def current_balance(additions)
    @current_balance = @initial_weight * initial_balance / @current_weight
    additions.each do |addition|
      @current_balance += addition.mass_added * addition.location_from_bottom / @current_weight
    end
    @current_balance
  end

  def current_swingweight(additions)
    @current_swingweight = @initial_swingweight + current_weight * current_balance**2 - initial_weight * current_weight**2
    additions.each do |addition|
      @current_swingweight += addition.mass_added * (addition.location_from_bottom - @initial_blance)**2
    end
    @current_swingweight
  end

  def current_twistweight(additions)
    @current_twistweight = 0
    additions.each do |addition|
      @current_twistweight += addition.mass_added * addition.location_from_sym_axis**2
    end
  end

  def estimate_swingweight(racquet_model, mass, balance)
    reference_parameters = Racquet.where("trade_name = #{racquet_model}")
    estimated_swingweight = reference_parameters['swingweight'] + \
                            mass * balance**2 - reference_parameters['mass'] * reference_parameters['balance']**2 + \
                            (mass - reference_parameters['mass']) * (balance - reference_parameters['balance'])**2
  end

end
