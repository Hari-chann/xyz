class IsbnService
  def initialize(origin_isbn, target_base)
    @origin_isbn = origin_isbn
    @target_base = target_base.to_i
  end

  def validate
    if @target_base == 10
      result = is_isbn_10_valid?(@origin_isbn)
    elsif @target_base == 13
      result = is_isbn_13_valid?(@origin_isbn)
    else
      handle_error("Invalid ISBN")
    end

    if result
      handle_response(result)
    else
      handle_error("Invalid ISBN")
    end
  end

  def convert
    result = nil

    if @target_base == 10
      result = convert_isbn_13_to_isbn_10(@origin_isbn)
    elsif @target_base == 13
      result = convert_isbn_10_to_isbn_13(@origin_isbn)
    else
      handle_error("Invalid target base")
    end

    if result.nil?
      handle_error("Invalid ISBN")
    else
      handle_response(result)
    end
  end

  private

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
    isbn13 << ((check_digit > 9) ? 0 : check_digit)
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

  def handle_response(payload)
    OpenStruct.new({success?: true, payload: payload})
  end

  def handle_error(error)
    OpenStruct.new({success?: false, payload: 400, errors: error})
  end
end
