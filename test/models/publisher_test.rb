require "test_helper"

class PublisherTest < ActiveSupport::TestCase
  def setup
    @publisher = create(:publisher)
  end

  test "should be valid with a name" do
    assert @publisher.valid?
  end

  test "should be invalid without a name" do
    publisher = build(:publisher, name: nil)
    assert_not publisher.valid?
  end
end
