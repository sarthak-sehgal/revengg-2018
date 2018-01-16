function init()
{
  var list = document.getElementById('ques-list');
  var list_icon = document.getElementsByClassName('list-icon')[0];
  var close_list = document.getElementsByClassName('cross')[0];

  list_icon.onclick = function() {
    list.style.top = 0;
  };
  close_list.onclick = function() {
    list.style.top = '100%';
  };
}
init();
