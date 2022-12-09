Rails.application.routes.draw do
  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'
  get 'users/new', to: 'users#new', as: 'new_user'
  get 'signup', to: 'users#new'
  get 'signin', to: 'sessions#new'
  post 'signin', to: 'sessions#create'
  delete 'signout', to: 'sessions#destroy', as: 'session'

  resources :users, only: [:create]
  root to: 'products#index'

  resources :products
end
