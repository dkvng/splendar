Rails.application.routes.draw do
  namespace :api do
    get 'events/create'
  end

  namespace :api do
    get 'events/update'
  end

  namespace :api do
    get 'events/show'
  end

  namespace :api do
    get 'events/index'
  end

  namespace :api do
    get 'events/destroy'
  end

  namespace :api do
    get 'users/create'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
