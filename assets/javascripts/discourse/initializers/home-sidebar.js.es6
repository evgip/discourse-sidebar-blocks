//export default {
//  name: 'home-sidebar',
//  initialize(){
//
//  }
//}
import { withPluginApi } from 'discourse/lib/plugin-api';
import RawHtml from 'discourse/widgets/raw-html';

function attachSignature(api) {
  api.includePostAttributes('reply_to_post_number');
  api.decorateWidget('post-contents:before', dec => {

  const attrs = dec.attrs;
  if (Ember.isEmpty(attrs.reply_to_post_number)) { return; }

  return new RawHtml({html: `<div class='comm'></div> `});
   
  });
  }
  
  
 
export default {
  name: 'home-sidebar',
  initialize(container) {
      withPluginApi('0.1', attachSignature);
   }
   };
