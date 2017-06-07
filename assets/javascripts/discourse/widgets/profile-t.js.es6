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
      const trust_level = currentUser.get('trust_level');
      
      if (trust_level === 0) { var doverie = 'main.d0-you'; }
      if (trust_level === 1) { var doverie = 'main.d1-you'; }
      if (trust_level === 2) { var doverie = 'main.d2-you'; }
      if (trust_level === 3) { var doverie = 'main.d3-you'; }
      if (trust_level === 4) { var doverie = 'main.d4-you'; }
 
      
      
    contents.push(
      
     h('h3.sidebar-heading', 'Меню'),
      
     h('div.dov', this.attach('link', {
      className: 'menu-dov',
      title: doverie,
      icon: 'user-circle',
      href: 'http://toxu.ru/t/uroven-doveriya-na-sajte-toxu-ru/61'
          })),  
      
    h('div.us', this.attach('link', {
     route: 'user',
     model: currentUser,
     className: 'menu-profile',
     rawLabel: username
          })),  
      
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
