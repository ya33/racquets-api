class Api::V1::RacquetsController < Api::V1::BaseController

  def index
    @racquets = policy_scope(Racquet)
    @brands = policy_scope(Brand)
  end

  def show
    @racquet = Racquet.find(params[:id])
    authorize @racquet
  end
end
