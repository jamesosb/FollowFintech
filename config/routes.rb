Rails.application.routes.draw do
  mount Lines::Engine => "/blog"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root 'lines/articles#index'


end
