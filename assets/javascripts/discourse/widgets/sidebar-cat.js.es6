import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';
import { ajax } from 'discourse/lib/ajax';
import { popupAjaxError } from 'discourse/lib/ajax-error';
 

export default createWidget('sidebar-cat', {
  tagName: 'div.cat',
  buildKey: (attrs) => 'sidebar-cat',

  html(attrs, state) {
    const { currentUser } = this;
    let contents = []
    if (currentUser) {
      const username = currentUser.get('username');
      const name = currentUser.get('name');
   
$.ajax({
          url: "/categories.json",
          dataType: 'json',
          async: false,
          success: function(data) {

          for (var i = 0 ; i < data.category_list.categories.length ; i++) {
          var name;
          var slug;
          var notification_level;              


       name = data.category_list.categories[i].name;
       slug = data.category_list.categories[i].slug;
       notification_level = data.category_list.categories[i].notification_level;

    if (notification_level > 1)  {

          contents.push(  new RawHtml({ html: `<div class="${slug}"> <a href="http://toxu.ru/c/${slug}" class="cat">${name}</a></div>`}));

    } 
}  
}
});

} 
return contents;
}
});
