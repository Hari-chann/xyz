class Api::V1::BooksController < ApplicationController
  before_action :set_book, only: [:show]

  def show
    if @book
      render json: BookSerializer.new(@book).serializable_hash
    else
      render json: {error: "Book not found"}, status: 404
    end
  end

  def convert_isbn
    result = nil

    if ["10", "13"].include?(params[:target_base])
      result = ConvertIsbnService.new(params[:origin_isbn], params[:target_base]).call.payload
    else
      render json: {error: "Invalid base"}, status: 422
    end

    if result == 400
      render json: {error: "First 3 digits are not 978"}, status: 400
    elsif result.nil?
      render json: {error: "Invalid ISBN-13"}, status: 422
    else
      render json: {"isbn_#{params[:target_base]}": result}
    end
  end

  private

  def set_book
    if params[:isbn_13].length == 10
      result = ConvertIsbnService.new(params[:isbn_13], 13).call
      @book = (result.success? ? Book.find_by(isbn_13: result.payload) : nil)
    else
      @book = Book.find_by(isbn_13: params[:isbn_13])
    end
  end
end
