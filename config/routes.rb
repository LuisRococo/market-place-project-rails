Rails.application.routes.draw do
  root to: 'products#index'
  namespace :api do
    namespace :v1 do
      resources :products do 
        resources :comments, only: [:create]
      end
      resources :users, only: [:create]
      post 'signin', to: 'sessions#create'
      delete 'signout', to: 'sessions#destroy', as: 'session'
    end
  end

  get '*path', to: 'api/v1/products#index'
  # get 'signup', to: 'users#new'
  # get 'users/new', to: 'users#new', as: 'new_user'
  # get 'signin', to: 'sessions#new'
  # post 'signin', to: 'sessions#create'
  # delete 'signout', to: 'sessions#destroy', as: 'session'

  # resources :users, only: [:create]

  # resources :products do 
  #   resources :comments, only: [:create]
  # end
end
