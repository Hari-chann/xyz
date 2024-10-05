class Book < ApplicationRecord
  belongs_to :publisher
  has_many :book_authors
  has_many :authors, through: :book_authors

  validates :title, :isbn_13, :price, :publication_year, presence: true
  before_save :validate_isbn_13
  before_save :validate_isbn_10, if: -> { isbn_10.present? }

  def is_isbn_13_valid?
    isbn13 = isbn_13.gsub(/\D/, "").chars.map(&:to_i)
    return false unless isbn13.length == 13

    checksum = isbn13[0..11].map.with_index do |num, index|
      index_num = (index + 1) % 2
      num * ((index_num > 0) ? 1 : 3)
    end.sum

    check_digit = 10 - (checksum % 10)
    check_digit == isbn13.last
  end

  def is_isbn_10_valid?
    isbn10 = isbn_10.gsub(/[^0-9xX]/, "").chars.map.with_index do |char, index|
      (["x", "X"].include?(char) && index == 9) ? 10 : char.to_i
    end
    return false unless isbn10.length == 10

    checksum = isbn10.map.with_index do |num, index|
      num * (10 - index)
    end.sum
    checksum % 11 == 0
  end

  private

  def validate_isbn_13
    unless is_isbn_13_valid?
      errors.add(:isbn_13, "is not a valid ISBN-13")
      throw(:abort)
    end
  end

  def validate_isbn_10
    unless is_isbn_10_valid?
      errors.add(:isbn_10, "is not a valid ISBN-10")
      throw(:abort)
    end
  end
end
