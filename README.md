# XYZ Bookstore

## Ubuntu environment setup
This project is created using the following versions:
- Ruby 3.2.0
- Rails 7.0.8
- Node 20.16.0
- Yarn 1.22.22
- Postgres 16.4

Run the following commands to setup the project
The 5 sample books are already seeded in the database
```bash
bundle install
yarn install
rails db:create db:migrate db:seed
```

## Running the dev server
```bash
bin/dev
```

## Running the test suite
For the test suite, we are using minitest

`/test` contains the tests for the models, controllers and services
```bash
rails test
```

For react components, we are using jest (just for utilities.jsx )

`/app/javascript/services/*.test.js`
```bash
yarn test
```

## Api Endpoints
```url
/api/v1/books/:isbn_13
```
ex: `/api/v1/books/9781603090575`

`isbn_13` is required and should only contain numbers and have a length of 13

On react, search input removes non-numeric characters and only allows 13 or 10 characters.
If 10 characters are entered, it will be converted to ISBN-13 to satisfy:
```ruby
def set_book
  if params[:isbn_13].length == 10
    # isbn_10 is converted to isbn_13 here...
  else
    @book = Book.find_by(isbn_13: params[:isbn_13])
  end
end
```

This endpoint returns a json object with the following keys:
- title
- price
- isbn_13
- isbn_10
- edition
- image_url
- author_list
- publication_year
- formatted_isbn_13
- formatted_isbn_10

Sample response:
```javascript
{
  "book": {
    "id": "2",
    "type": "book",
    "attributes": {
      "title": "Cosmoknights",
      "isbn_13": "9781603094542",
      "isbn_10": "1603094547",
      "formatted_isbn_13": "978-1-603094-54-2",
      "formatted_isbn_10": "1-603-09454-7",
      "price": "2000.0",
      "publication_year": 2019,
      "edition": "Book 1",
      "image_url": "/images/cosmoknights.jpg",
      "author_list": "Kingsley Amis, Kingsley Amis"
    }
  },
  "publisher_name": "Publishers Weekly"
}
```


```url
/api/v1/books/convert_isbn
```
Required keys:
- isbn
- to_base

ex: `/api/v1/books/convert_isbn?origin_isbn=9781603090575&target_base=10`

`origin_isbn` is required and should only contain numbers and have a length of 13 or 10

`target_base` is required and should be either 10 or 13

