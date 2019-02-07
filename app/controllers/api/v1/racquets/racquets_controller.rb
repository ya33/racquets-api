class Api::V1::Racquets::RacquetsController < Api::V1::BaseController
  def index
    @racquets = policy_scope(Racquet)
  end

  def show
    @racquet = Racquet.find(params[:id])
    authorize @racquet
  end
end
