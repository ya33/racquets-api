class CustomizationsController < ApplicationController
  def index
    @customizer = current_user
    @cutomizations = @customizer.customizations
  end
end
