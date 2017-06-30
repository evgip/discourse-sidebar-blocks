module DiscourseStats
  class Engine < ::Rails::Engine
    isolate_namespace DiscourseStats

    config.after_initialize do
		Discourse::Application.routes.append do
			mount ::DiscourseStats::Engine, at: "/"
		end
    end
  end
end
