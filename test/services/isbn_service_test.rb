require "test_helper"

class IsbnServiceTest < ActiveSupport::TestCase
  setup do
    @service = IsbnService
  end

  test "rejects invalid ISBN-13" do
    valid_isbn_13 = Faker::Code.isbn(base: 13)
    invalid_isbn_13 = valid_isbn_13[0..-2] + ((valid_isbn_13[-1].to_i + 1) % 10).to_s

    assert_not @service.new(invalid_isbn_13, 13).validate.success?, "Expected book with altered ISBN-13 to be invalid"
  end

  test "rejects invalid ISBN-10" do
    valid_isbn_10 = Faker::Code.isbn
    invalid_isbn_10 = valid_isbn_10[0..-2] + ((valid_isbn_10[-1].to_i + 1) % 10).to_s

    assert_not @service.new(invalid_isbn_10, 10).validate.success?, "Expected book with altered ISBN-10 to be invalid"
  end

  test "should convert valid ISBN-10 to ISBN-13" do
    isbn_10 = Faker::Code.isbn
    isbn_13 = @service.new(isbn_10, 13).convert.payload
    assert @service.new(isbn_13, 13).validate.success?
  end

  test "should convert valid ISBN-13 to ISBN-10" do
    isbn_10 = Faker::Code.isbn
    isbn_13 = @service.new(isbn_10, 13).convert.payload
    isbn_10 = @service.new(isbn_13, 10).convert.payload
    assert @service.new(isbn_10, 10).validate.success?
  end
end
