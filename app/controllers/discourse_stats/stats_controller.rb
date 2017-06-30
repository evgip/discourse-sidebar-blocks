module DiscourseStats
	class StatsController < ApplicationController

		def my_page
			render :json => { name: "Нас посетили за 24 часа... (в стадии разработки)" }
      rescue StandardError => e
        render_json_error e.message
   
		end

	end
end
