Rails.application.routes.draw do
  root to: 'pvs#index'
  resources :picture_stores
  resources :pvs
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
