class Api::V1::Customizations::RacquetsController < Api::V1::BaseController
  def index
    @customizations = policy_scope(Customization)
  end

  def show
    @Customization = Customization.find(params[:id])
    authorize @customization
  end
end
