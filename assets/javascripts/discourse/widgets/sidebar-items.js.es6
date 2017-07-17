import { createWidget } from 'discourse/widgets/widget';
import { h } from 'virtual-dom';

export default createWidget('sidebar-items', {
  tagName: 'div.sidebar-items',
  buildKey: () => 'sidebar-items',

  html(attrs, state) {
  	if (!this.siteSettings.sidebar_enable || this.site.mobileView)
  		return;

    var sidebarBlocks = this.siteSettings.sidebar_block_order.split("|");

    const result = [];
    var self = this;

    sidebarBlocks.map(function(item) {
    
    if (item == 'profile') {
      result.push(self.attach('profile-t'));


    } else if (item == 'custom_html') {
        result.push(self.attach('sidebar-custom-content'));
      
    } else if (item == 'cat') {
        result.push(self.attach('sidebar-cat'));
      
    }

    });

    return result;
  },

});
