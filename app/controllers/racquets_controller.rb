class RacquetsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]

  def index
    @racquets = Racquet.all
    @racquet = Racquet.new
    # @search = { racquet_name: '' }
  end
end
