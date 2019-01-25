class CustomizationsController < ApplicationController
  def index
    @player = current_user
    @cutomizations = @player.customizations
  end
end
