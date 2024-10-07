class Api::V1::BooksController < ApplicationController
  def show
    result = OpenStruct.new({success?: false, payload: nil, errors: ""})
    if params[:isbn_13].length == 10
      result = IsbnService.new(params[:isbn_13], 10).validate
    elsif params[:isbn_13].length == 13
      result = IsbnService.new(params[:isbn_13], 13).validate
    end

    if result.success?
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
    result = OpenStruct.new({success?: false, payload: nil, errors: ""})

    if ["10", "13"].include?(params[:target_base])
      result = IsbnService.new(params[:origin_isbn], params[:target_base]).convert

      if result.success?
        render json: {"isbn_#{params[:target_base]}": result.payload}
      else
        origin = "1013".gsub(params[:target_base], "")
        render json: {error: "Invalid ISBN-#{origin}"}, status: 400
      end
    else
      render json: {error: "Invalid base"}, status: 422
    end
  end

  private

  def set_book
    if params[:isbn_13].length == 10
      result = IsbnService.new(params[:isbn_13], 13).convert
      @book = (result.success? ? Book.find_by(isbn_13: result.payload) : false)
    else
      @book = Book.find_by(isbn_13: params[:isbn_13])
    end
  end
end
