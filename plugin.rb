# name: discourse-sidebar-blocks
# about: add a sidebar to topic lists (discovery) with several blocks available: category,  category, personal data
# version: 0.2
# authors:  Evg
# url: https://github.com/Toxu-ru/discourse-home-sidebar

register_asset "stylesheets/sidebar.scss"
enabled_site_setting :mitt_newpage_enabled

Discourse::Application.routes.append do
  get '/stats' => 'discourse_stats/stats#my_page'
end

load File.expand_path('../lib/stats/engine.rb', __FILE__)
