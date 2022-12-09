## COMMANDS

- rails routes -c products
- rails c --sandbox (when closing the console it will rollback all transactions)
- rails g migration add_user_id_and_quantity_to_products user:references quantity:integer

## METHODS

- number_to_currency(...)
- get 'signup', to: redirect('users/new')
- object.class.name.humanize.downcase -> name of class
- has_many :products, dependent: :destroy -> if deleted then it will delete products
