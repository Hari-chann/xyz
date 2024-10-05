require "test_helper"

class BookAuthorTest < ActiveSupport::TestCase
  def setup
    @book_author = create(:book_author)
  end

  test "should be valid with both book and author" do
    assert @book_author.valid?
  end

  test "should be invalid without a book" do
    book_author = FactoryBot.build(:book_author, book: nil)
    assert_not book_author.valid?
  end

  test "should be invalid without an author" do
    book_author = FactoryBot.build(:book_author, author: nil)
    assert_not book_author.valid?
  end
end
