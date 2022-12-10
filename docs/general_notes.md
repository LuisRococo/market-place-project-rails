## COMMANDS

- rails routes -c products
- rails c --sandbox (when closing the console it will rollback all transactions)
- rails g migration add_user_id_and_quantity_to_products user:references quantity:integer
- rails db:reset -> drop database, create it again, and seed it
- rails webpackcker:install:react -> install react using webpacker gem

## METHODS

- number_to_currency(...)
- get 'signup', to: redirect('users/new')
- object.class.name.humanize.downcase -> name of class
- has_many :products, dependent: :destroy -> if deleted then it will delete products
- User.create!(...) -> throws error on fail
- @comment = @product.comments.build(comments_params) -> this will create a comment object with project id already assigned
- render 'products/show' -> render another controller action
- time_ago_in_words(comment.created_at)
- default_scope {order(created_at: :desc)}

## OTHER

- Nested resources

```rb
resources :products do
    resources :comments, only: [:create]
end
```
