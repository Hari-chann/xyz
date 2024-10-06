class BookSerializer
  include JSONAPI::Serializer

  set_type :book

  attributes :title,
    :isbn_13,
    :price,
    :publication_year,
    :edition,
    :image_url,
    :publisher

  attributes :authors do |book|
    book.authors.map do |author|
      {
        name: author.name,
        birth_year: author.birth_year
      }
    end
  end

end
