Rails.application.routes.draw do
  post 'stripe_checkouts/index'
  get 'hello/world'
  get 'order/ebook'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "order#ebook"

  match '*all', controller: 'application', action: 'cors_preflight_check', via: [:options]
end
