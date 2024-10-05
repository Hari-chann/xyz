require "test_helper"

class BookTest < ActiveSupport::TestCase
  def setup
    @book = create(:book)
  end

  test "should be valid with all attributes" do
    assert @book.valid?
  end

  test "should be invalid without a title" do
    book = build(:book, title: nil)
    assert_not book.valid?
  end

  test "should be invalid without an ISBN-13" do
    book = build(:book, isbn_13: nil)
    assert_not book.valid?
    assert_includes book.errors[:isbn_13], "can't be blank"
  end

  test "should be invalid without a price" do
    book = build(:book, price: nil)
    assert_not book.valid?
    assert_includes book.errors[:price], "can't be blank"
  end

  test "should be invalid without a publication year" do
    book = build(:book, publication_year: nil)
    assert_not book.valid?
  end

  test "should be invalid without a publisher" do
    book = build(:book, publisher: nil)
    assert_not book.valid?
  end

  test "can have many authors" do
    book = build(:book, authors: build_list(:author, 0))
    author1 = create(:author)
    author2 = create(:author)
    book.authors << [author1, author2]
    book.save
    assert_equal 2, book.authors.count
  end

  test "rejects invalid ISBN-13" do
    valid_isbn_13 = Faker::Code.isbn(base: 13)
    invalid_isbn_13 = valid_isbn_13[0..-2] + ((valid_isbn_13[-1].to_i + 1) % 10).to_s

    book = FactoryBot.build(:book, isbn_13: invalid_isbn_13)

    assert_not book.is_isbn_13_valid?, "Expected book with altered ISBN-13 to be invalid"
  end

  test "rejects invalid ISBN-10" do
    valid_isbn_10 = Faker::Code.isbn
    invalid_isbn_10 = valid_isbn_10[0..-2] + ((valid_isbn_10[-1].to_i + 1) % 10).to_s

    book = FactoryBot.build(:book, isbn_10: invalid_isbn_10)

    assert_not book.is_isbn_10_valid?, "Expected book with altered ISBN-10 to be invalid"
  end

  test "should convert valid ISBN-10 to ISBN-13" do
    isbn_10 = Faker::Code.isbn
    isbn_13 = Book.new.convert_isbn_10_to_isbn_13(isbn_10)
    assert Book.new.is_isbn_13_valid?(isbn_13)
  end

  test "should convert valid ISBN-13 to ISBN-10" do
    isbn_10 = Faker::Code.isbn
    isbn_13 = Book.new.convert_isbn_10_to_isbn_13(isbn_10)
    isbn_10 = Book.new.convert_isbn_13_to_isbn_10(isbn_13)
    assert Book.new.is_isbn_10_valid?(isbn_10)
  end
end
