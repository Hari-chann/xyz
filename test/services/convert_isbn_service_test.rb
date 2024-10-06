require "test_helper"

class ConvertIsbnServiceTest < ActiveSupport::TestCase
  setup do
    @service = ConvertIsbnService
  end

  def is_isbn_13_valid?(isbn)
    isbn13 = isbn.gsub(/\D/, "").chars.map(&:to_i)
    return false unless isbn13.length == 13

    checksum = isbn13[0..11].map.with_index do |num, index|
      index_num = (index + 1) % 2
      num * ((index_num > 0) ? 1 : 3)
    end.sum

    check_digit = 10 - (checksum % 10)
    ((check_digit > 9) ? 0 : check_digit) == isbn13.last
  end

  def is_isbn_10_valid?(isbn)
    isbn10 = isbn.gsub(/[^0-9xX]/, "").chars.map.with_index do |char, index|
      (["x", "X"].include?(char) && index == 9) ? 10 : char.to_i
    end
    return false unless isbn10.length == 10

    checksum = isbn10.map.with_index do |num, index|
      num * (10 - index)
    end.sum
    checksum % 11 == 0
  end

  test "should convert valid ISBN-10 to ISBN-13" do
    isbn_10 = Faker::Code.isbn
    isbn_13 = @service.new(isbn_10, 13).call.payload
    assert is_isbn_13_valid?(isbn_13)
  end

  test "should convert valid ISBN-13 to ISBN-10" do
    isbn_10 = Faker::Code.isbn
    isbn_13 = @service.new(isbn_10, 13).call.payload
    isbn_10 = @service.new(isbn_13, 10).call.payload
    assert is_isbn_10_valid?(isbn_10)
  end
end
