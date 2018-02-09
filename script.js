function init()
{
  var list = document.getElementById('ques-list');
  var list_icon = document.getElementsByClassName('list-icon')[0];
  var close_list = document.getElementsByClassName('cross')[0];
  var dont_quit = document.getElementsByClassName('dont-quit')[0];
  var yes_quit = document.getElementsByClassName('yes-quit')[0];
  var quit = document.getElementsByClassName('quit')[0];
  var overlay = document.getElementById('overlay');
  var options = document.getElementsByClassName('options')[0].getElementsByTagName('input');
  var skip = document.getElementsByClassName('skip')[0];

  //on option click
  for(i=0; i<options.length; i++)
  {
  	options[i].checked=false;
  }

  // on skip click
  skip.onclick = function() {
  	for(i=0; i<options.length; i++)
	{
		options[i].checked=false;
	}
  };

  quit.onclick = function() {
  	overlay.style.display = 'flex';
  };
  dont_quit.onclick = function() {
  	overlay.style.display = 'none';
  };
  yes_quit.onclick = function() {
  	location.reload();
  }

  list_icon.onclick = function() {
    list.style.right = 0;
  };
  close_list.onclick = function() {
    list.style.right = '100%';
  };

  time = document.getElementsByClassName('time')[0];
  time_bottom = document.getElementsByClassName('time')[1];
  time_bar = document.getElementsByClassName('time-bar')[0];
  time.innerHTML='00:00';
  time_bottom.innerHTML='00:00';
  quiz_len = 60;
  window.onload = function() {
  	min = 0;
  	sec = 0;
  	setInterval(function() {
  		if(sec==59)
  		{
  			if(min==quiz_len-1)
  			{
  				return;
  			}
  			sec=-1;
  			min++;
  		}
  		sec++;
  		sec = sec.toString();
  		min = min.toString();
  		if(sec.length<2)
  			sec='0'+sec;
  		if(min.length<2)
  			min='0'+min;
  		time.innerHTML=min+':'+sec;
      time_bottom.innerHTML=min+':'+sec;
  		sec=parseInt(sec);
  		min=parseInt(min);

  		//change length of time bar
  		time_bar.style.width = (min+sec/60)/quiz_len * 100 + '%';
  	}, 1000);
  };
}
init();
