# test/factories/books.rb
FactoryBot.define do
  factory :author do
    first_name { Faker::Name.first_name }
    middle_name { Faker::Name.middle_name }
    last_name { Faker::Name.last_name }
  end

  factory :book do
    title { Faker::Book.title }
    isbn_13 { Faker::Code.isbn(base: 13) }
    isbn_10 { Faker::Code.isbn }
    price { Faker::Number.decimal(l_digits: 3, r_digits: 2) }
    publication_year { Faker::Number.between(from: 1800, to: Time.now.year) }
    edition { Faker::Book.genre }
    association :publisher
    authors { build_list :author, 1 }

    after(:create) do |book|
      create_list(:book_author, 1, book: book)
    end
  end
end
