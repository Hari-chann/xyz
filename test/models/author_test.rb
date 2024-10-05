require "test_helper"

class AuthorTest < ActiveSupport::TestCase
  def setup
    @author = create(:author)
  end

  test "should be invalid without first name" do
    author = build(:author, first_name: nil)
    assert_not author.valid?
  end

  test "should be invalid without last name" do
    author = build(:author, last_name: nil)
    assert_not author.valid?
  end

  test "can have a middle name" do
    author = build(:author, middle_name: Faker::Name.middle_name)
    assert author.valid?
  end
end
