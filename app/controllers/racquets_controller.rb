class RacquetsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]

  def index
    @brands = Brand.all
    @racquets = Racquet.all
    @racquet = Racquet.new
  end
end
