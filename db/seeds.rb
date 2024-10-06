# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Publishers
publishers = Publisher.create!([
  {name: "Paste Magazine"},
  {name: "Publishers Weekly"},
  {name: "Graywolf Press"},
  {name: "McSweeney's"}
])

# Authors
authors = Author.create!([
  {first_name: "Joel", last_name: "Hartse"},
  {first_name: "Hannah", middle_name: "P.", last_name: "Templer"},
  {first_name: "Marguerite", middle_name: "Z.", last_name: "Duras"},
  {first_name: "Kingsley", last_name: "Amis"},
  {first_name: "Fannie", middle_name: "Peters", last_name: "Flagg"},
  {first_name: "Camille", middle_name: "Byron", last_name: "Paglia"},
  {first_name: "Rainer", middle_name: "Steel", last_name: "Rilke"}
])

# Books
american_elf = Book.create!(
  title: "American Elf",
  isbn_13: "978-1-891830-85-3",
  isbn_10: "1-891-83085-6",
  publication_year: 2004,
  price: 1000,
  edition: "Book 2",
  publisher: publishers.first,
  image_url: "/images/american_elf.jpg",
  authors: [
    authors.first,
    authors.second,
    authors.third
  ]
)

cosmoknights = Book.create!(
  title: "Cosmoknights",
  isbn_13: "978-1-60309-454-2",
  isbn_10: "1-603-09454-7",
  publication_year: 2019,
  price: 2000,
  edition: "Book 1",
  publisher: publishers.second,
  image_url: "/images/cosmoknights.jpg",
  authors: [authors.fourth]
)

essex_county = Book.create!(
  title: "Essex County",
  isbn_13: "978-1-60309-038-4",
  isbn_10: "1-603-09038-X",
  publication_year: 1990,
  price: 500,
  publisher: publishers.third,
  image_url: "/images/essex_county.jpg",
  authors: [authors.fourth]
)

hey_mister_vol_1 = Book.create!(
  title: "Hey, Mister (Vol 1)",
  isbn_13: "978-1-891830-02-0",
  isbn_10: "1-891-83002-3",
  publication_year: 2000,
  price: 1200,
  edition: "After School Special",
  publisher: publishers.third,
  image_url: "/images/hey_mister.jpg",
  authors: [
    authors[1],
    authors[4],
    authors[5]
  ]
)

underwater_welder = Book.create!(
  title: "The Underwater Welder",
  isbn_13: "978-1-60309-398-9",
  isbn_10: "1-603-09398-2",
  publication_year: 2022,
  price: 3000,
  publisher: publishers.last,
  image_url: "/images/underwater_welder.jpg",
  authors: [authors.last]
)

# Book Authors
BookAuthor.create!([
  {book: american_elf, author: authors.first},
  {book: american_elf, author: authors.second},
  {book: american_elf, author: authors.third}
])
BookAuthor.create!(book: cosmoknights, author: authors.fourth)
BookAuthor.create!(book: essex_county, author: authors.fourth)
BookAuthor.create!([
  {book: hey_mister_vol_1, author: authors[1]},
  {book: hey_mister_vol_1, author: authors[4]},
  {book: hey_mister_vol_1, author: authors[5]}
])
BookAuthor.create!(book: underwater_welder, author: authors.last)

# Book Authors
# american_elf.authors << [
#   authors.first,
#   authors.second,
#   authors.third
# ]
# cosmoknights.authors << authors.fourth
# essex_county.authors << authors.fourth
# hey_mister_vol_1.authors << [
#   authors[1],
#   authors[4],
#   authors[5]
# ]
# underwater_welder.authors << authors.last
