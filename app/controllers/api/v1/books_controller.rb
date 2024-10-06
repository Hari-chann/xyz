class Api::V1::BooksController < ApplicationController
  def show
    valid = false
    if params[:isbn_13].length == 10
      valid = IsbnService.new(params[:isbn_13], 10).validate
    elsif params[:isbn_13].length == 13
      valid = IsbnService.new(params[:isbn_13], 13).validate
    end

    if valid
      set_book
      if @book
        response = {
          book: BookSerializer.new(@book).serializable_hash[:data],
          publisher_name: @book.publisher.name
        }
        render json: response
      else
        render json: {error: "Book not found"}, status: 404
      end
    else
      render json: {error: "Invalid ISBN"}, status: 400
    end
  end

  def convert_isbn
    result = nil

    if ["10", "13"].include?(params[:target_base])
      result = IsbnService.new(params[:origin_isbn], params[:target_base]).convert.payload
    else
      render json: {error: "Invalid base"}, status: 422
    end

    if result.nil?
      origin = "1013".gsub(params[:target_base], "")
      render json: {error: "Invalid ISBN-#{origin}"}, status: 400
    else
      render json: {"isbn_#{params[:target_base]}": result}
    end
  end

  private

  def set_book
    if params[:isbn_13].length == 10
      result = IsbnService.new(params[:isbn_13], 13).convert
      @book = (result.success? ? Book.find_by(isbn_13: result.payload) : nil)
    else
      @book = Book.find_by(isbn_13: params[:isbn_13])
    end
  end
end
