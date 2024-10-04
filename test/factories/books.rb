# test/factories/books.rb
FactoryBot.define do
  factory :book do
    title { Faker::Book.title }
    isbn_13 { Faker::Code.isbn }
    isbn_10 { Faker::Code.isbn }
    price { Faker::Number.decimal(l_digits: 3, r_digits: 2) }
    publication_year { Faker::Number.between(from: 1800, to: Time.now.year) }
    edition { Faker::Book.genre }
    image_url { Faker::Internet.url }
    description { Faker::Lorem.paragraph }
    association :publisher
  end
end
