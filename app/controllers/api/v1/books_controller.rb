class Api::V1::BooksController < ApplicationController
  before_action :set_book, only: [:show]

  def index
    render json: BookSerializer.new(Book.all, {}).serializable_hash
  end

  def show
    if @book
      render json: BookSerializer.new(@book).serializable_hash
    else
      render json: {error: "Book not found"}, status: 404
    end
  end

  private

  def set_book
    @book = Book.find_by(isbn_13: params[:isbn_13])
  end
end
