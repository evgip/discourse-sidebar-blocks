import { createWidget } from 'discourse/widgets/widget';
import { h } from 'virtual-dom';

export default createWidget('profile-t', {
  tagName: 'div.user-profile.widget-container',
  buildKey: (attrs) => 'user-profile',

  html(attrs, state) {
    const { currentUser } = this;
    let contents = []
    if (currentUser) {
      const username = currentUser.get('username');
 
    contents.push(
    h('div', this.attach('link', {
      className: 'menu',
      label: 'main.qa-you',
      href: 'http://toxu.ru/posted'
          })),
 
  
    h('div', this.attach('link', {
      className: 'menu',
      label: 'main.bookmark-you',
      href: 'http://toxu.ru/bookmarks'
          }))  

         
          );
   
} 

return h('div.sidebar-menu', contents);
}

});
