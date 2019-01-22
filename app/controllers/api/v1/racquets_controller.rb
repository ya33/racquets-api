class Api::V1::RacquetsController < Api::V1::BaseController
  def index
    @racquets = Racquet.all
  end

  def show
    @racquet = Racquet.find(params[:id])
    # authorize @racquet
  end
end
