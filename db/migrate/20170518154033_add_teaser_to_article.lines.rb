# This migration comes from lines (originally 20141027143656)
class AddTeaserToArticle < ActiveRecord::Migration[5.1]
  def change
    add_column :lines_articles, :teaser, :text
  end
end
