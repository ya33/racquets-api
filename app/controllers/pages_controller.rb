class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :tool]

  def home
  end

  def tool
  end
end
