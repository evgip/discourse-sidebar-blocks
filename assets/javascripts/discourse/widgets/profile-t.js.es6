import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';
import { ajax } from 'discourse/lib/ajax';
import { popupAjaxError } from 'discourse/lib/ajax-error';


export default createWidget('profile-t', {
  tagName: 'div.user-profile.widget-container',
  buildKey: (attrs) => 'user-profile',

  html(attrs, state) {
    const { currentUser } = this;
    let contents = []
    if (currentUser) {
      const username = currentUser.get('username');
      const name = currentUser.get('name');
      const trust_level = currentUser.get('trust_level');
      
      if (trust_level === 0) { var doverie = I18n.t("main.d0-you"); var coll = 'col0';}
      if (trust_level === 1) { var doverie = I18n.t("main.d1-you"); var coll = 'col1';}
      if (trust_level === 2) { var doverie = I18n.t("main.d2-you"); var coll = 'col2';}
      if (trust_level === 3) { var doverie = I18n.t("main.d3-you"); var coll = 'col3';}
      if (trust_level === 4) { var doverie = I18n.t("main.d4-you"); var coll = 'col4';}
   
 
    var likes;
    var topic_count;
    var time_read;
    var bookmark_count;    
  $.ajax({
  url: "/users/"+ username +"/summary.json" ,
  dataType: 'json',
  async: false,
  success: function(data) {
    likes = data.user_summary.likes_received;	
    topic_count = data.user_summary.topic_count;	
    time_read  = data.user_summary.time_read;
    bookmark_count  = data.user_summary.bookmark_count;
  }
  });
    
  contents.push(
  new RawHtml({ html: `<div>


<a class="menu-profile" href="http://toxu.ru/u/${username}">@${username}</a> 
<a class="widget-link menu" href="http://toxu.ru/posted">${I18n.t('main.qa-you')}</a> <span class="numer">${topic_count}</span><br>
<a class="widget-link menu" href="http://toxu.ru/bookmarks">${I18n.t('main.bookmark-you')}</a> <span class="numer">${bookmark_count}</span>

<span class="dann">
<a class="widget-link menu" href="http://toxu.ru/t/uroven-doveriya-na-sajte-toxu-ru/61"><span class="${coll}">${doverie}</span></a> 
<span class="numer"><i class="fa fa-heart"></i> ${likes}</span> </span>
<span class="vr">${I18n.t('main.time-you')} <span class="numer">${time_read}</span></span>

<hr>
</div>`})
 
   );
   
} 


return contents;

}
});
