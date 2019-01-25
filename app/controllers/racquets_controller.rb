class RacquetsController < ApplicationController
  def index
    @racquets = policy_scope(Racquet)
  end
end
