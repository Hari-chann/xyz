class Book < ApplicationRecord
  belongs_to :publisher
  has_many :book_authors
  has_many :authors, through: :book_authors

  validates :authors, :title, :isbn_13, :price, :publication_year, presence: true
  validates :isbn_13, uniqueness: true
  validates :publication_year, numericality: {
    only_integer: true,
    greater_than_or_equal_to: 1000,
    less_than_or_equal_to: Date.today.year
  }

  before_save :validate_isbn_13
  before_save :validate_isbn_10, if: -> { isbn_10.present? }

  def author_list
    authors.map(&:full_name).join(", ")
  end

  def formatted_isbn_13
    isbn_13.gsub(/(\d{3})(\d{1})(\d{6})(\d{2})(\d{1})/, '\1-\2-\3-\4-\5')
  end

  def formatted_isbn_10
    isbn_10.gsub(/(\d{1})(\d{3})(\d{5})(\d{1})/, '\1-\2-\3-\4')
  end

  def is_isbn_13_valid?(isbn = isbn_13)
    isbn13 = isbn.gsub(/\D/, "").chars.map(&:to_i)
    return false unless isbn13.length == 13

    checksum = isbn13[0..11].map.with_index do |num, index|
      index_num = (index + 1) % 2
      num * ((index_num > 0) ? 1 : 3)
    end.sum

    check_digit = 10 - (checksum % 10)
    ((check_digit > 9) ? 0 : check_digit) == isbn13.last
  end

  def is_isbn_10_valid?(isbn = isbn_10)
    isbn10 = isbn.gsub(/[^0-9xX]/, "").chars.map.with_index do |char, index|
      (["x", "X"].include?(char) && index == 9) ? 10 : char.to_i
    end
    return false unless isbn10.length == 10

    checksum = isbn10.map.with_index do |num, index|
      num * (10 - index)
    end.sum
    checksum % 11 == 0
  end

  def convert_isbn_10_to_isbn_13(isbn)
    return nil unless is_isbn_10_valid?(isbn)
    isbn10 = isbn.gsub(/[^0-9xX]/, "").chars.map.with_index do |char, index|
      (["x", "X"].include?(char) && index == 9) ? 10 : char.to_i
    end

    isbn10.pop
    isbn13 = [9, 7, 8] + isbn10
    checksum = isbn13.map.with_index do |num, index|
      index_num = (index + 1) % 2
      num * ((index_num > 0) ? 1 : 3)
    end.sum

    check_digit = 10 - (checksum % 10)
    isbn13 << check_digit
    isbn13.join
  end

  def convert_isbn_13_to_isbn_10(isbn)
    return nil unless is_isbn_13_valid?(isbn)
    isbn13 = isbn.gsub(/\D/, "").chars.map(&:to_i)

    return nil unless isbn.gsub(/\D/, "").start_with?("978")
    isbn10 = isbn13[3..11]
    checksum = isbn10.map.with_index do |num, index|
      num * (10 - index)
    end.sum

    check_digit = 11 - (checksum % 11)
    if check_digit > 9
      "#{isbn10.join}X"
    else
      isbn10 << check_digit
      isbn10.join
    end
  end

  private

  def validate_isbn_13
    if !is_isbn_13_valid?
      errors.add(:isbn_13, "is not a valid ISBN-13")
      throw(:abort)
    else
      # format to remove any non-numeric characters
      self.isbn_13 = isbn_13.gsub(/\D/, "")
    end
  end

  def validate_isbn_10
    if !is_isbn_10_valid?
      errors.add(:isbn_10, "is not a valid ISBN-10")
      throw(:abort)
    else
      # format to remove any non-numeric characters
      self.isbn_10 = isbn_10.gsub(/[^0-9xX]/, "")
    end
  end
end
