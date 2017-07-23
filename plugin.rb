# name: discourse-sidebar-blocks
# about: add a sidebar to topic lists (discovery) with several blocks available: category,  category, personal data
# version: 0.1
# authors:  Evg
# url: https://github.com/Toxu-ru/discourse-home-sidebar

register_asset "stylesheets/sidebar.scss"
enabled_site_setting :mitt_newpage_enabled

Discourse::Application.routes.append do
  get '/stats' => 'discourse_stats/stats#my_page'
end

load File.expand_path('../lib/stats/engine.rb', __FILE__)

after_initialize do

  require 'listable_topic_serializer'
  class ::ListableTopicSerializer

    def excerpt
      accepted_id = object.custom_fields["accepted_answer_post_id"].to_i
      if accepted_id > 0
        cooked = Post.where(id: accepted_id).pluck('cooked')
        PrettyText.excerpt(cooked[0], 200, {})
      else
        object.excerpt
      end
    end

    def include_excerpt?
      true
    end
  end
end
