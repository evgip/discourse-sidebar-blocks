module DiscourseStats
	class StatsController < ApplicationController

		def my_page
			render :json => { name: "succotash", description: "yellow and green" }
      rescue StandardError => e
        render_json_error e.message
   
		end

	end
end
