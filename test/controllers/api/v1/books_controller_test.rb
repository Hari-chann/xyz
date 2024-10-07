require "test_helper"

class Api::V1::BooksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @book = create(:book)
    @invalid_isbn_10 = "0123456456"
    @valid_isbn_10 = Faker::Code.isbn(base: 10)
    @valid_isbn_13 = Faker::Code.isbn(base: 13)
  end

  test "should show book for valid ISBN-13" do
    get api_v1_book_url(isbn_13: @book.isbn_13), as: :json
    assert_response :success
    assert_equal @book.title, response.parsed_body["book"]["attributes"]["title"]
    assert_equal @book.publisher.name, response.parsed_body["publisher_name"]
  end

  test "should return 404 for non-existent ISBN" do
    isbn = Faker::Code.isbn(base: 13).gsub(/\D/, "")
    get api_v1_book_url(isbn_13: isbn), as: :json
    assert_response :not_found
    assert_equal "Book not found", response.parsed_body["error"]
  end

  test "should return 400 for invalid ISBN-13" do
    get api_v1_book_url(isbn_13: @invalid_isbn_10), as: :json
    assert_response :bad_request
    assert_equal "Invalid ISBN", response.parsed_body["error"]
  end

  test "should convert ISBN-10 to ISBN-13" do
    valid_isbn_10 = "1628368438"
    expected_isbn_13 = "9781628368437"
    get convert_isbn_api_v1_books_url, params: { origin_isbn: valid_isbn_10, target_base: "13" }, as: :json
    assert_response :success
    assert_equal expected_isbn_13, response.parsed_body["isbn_13"]
  end

  test "should return 400 for invalid ISBN conversion" do
    get convert_isbn_api_v1_books_url, params: { origin_isbn: @invalid_isbn_10, target_base: "13" }, as: :json
    assert_response :bad_request
    assert_equal "Invalid ISBN-10", response.parsed_body["error"]
  end

  test "should return 422 for invalid base" do
    get convert_isbn_api_v1_books_url, params: { origin_isbn: @valid_isbn_10, target_base: "20" }, as: :json
    assert_response :unprocessable_entity
    assert_equal "Invalid base", response.parsed_body["error"]
  end
end
