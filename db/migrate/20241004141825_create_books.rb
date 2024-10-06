class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :isbn_13, null: false, unique: true
      t.string :isbn_10
      t.decimal :price, precision: 10, scale: 2, null: false
      t.integer :publication_year, null: false
      t.string :edition
      t.string :image_url
      t.references :publisher, null: false, foreign_key: true

      t.timestamps
    end

    add_index :books, :isbn_13, unique: true
  end
end
