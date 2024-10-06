class Api::V1::BooksController < ApplicationController

  def index
    books = Book.all
    render json: books
  end

  def show
  end

  def create
    book = Book.new(book_params)
    if book.save
      render json: book
    else
      render json: {error: "Unable to create book."}, status: 400
    end
  end

  private

  def set_book
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:title, :author, :genre, :year_published)
  end
end
