class BookSerializer
  include JSONAPI::Serializer

  set_type :book

  attributes :title,
    :isbn_13,
    :isbn_10,
    :formatted_isbn_13,
    :formatted_isbn_10,
    :price,
    :publication_year,
    :edition,
    :image_url,
    :author_list

  attribute :publisher_name do |object|
    object.publisher.name
  end
end
