class Htmlcode < ActiveRecord::Base
	  attr_accessible :description, :htmlcode, :name, :outputcode, :unicode

	def self.search(search)
	  search_condition = "%" + search + "%"
	  #find(:all, :conditions => ['name LIKE ? OR description LIKE ?', search_condition, search_condition])
	  find(:all, :conditions => ['name LIKE ?', search_condition])
	end

end