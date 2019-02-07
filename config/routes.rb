Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # get 'pages/tool'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :racquets, only: [ :index, :show ]
    end
  end

  resources :racquets, only: [:index]

  namespace :customizer do
    resources :customizations, only: [:index, :create, :update]
  end

  namespace :player do
    resources :customizations, only: [:index, :update]
  end
end
