class HtmlcodesController < ApplicationController

	def search
	  @htmlcodes = Htmlcode.search params[:query]
	end

end