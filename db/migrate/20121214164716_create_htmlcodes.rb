class CreateHtmlcodes < ActiveRecord::Migration
  def change
    create_table :htmlcodes do |t|
      t.string :name
      t.string :htmlcode
      t.string :unicode
      t.string :outputcode
      t.text :description

      t.timestamps
    end
  end
end
