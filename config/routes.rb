Rails.application.routes.draw do
  root "pages#index"

  namespace :api do
    namespace :v1 do
      resources :books, param: :isbn_13, only: [:show] do
        collection do
          get :convert_isbn
        end
      end
    end
  end
end
