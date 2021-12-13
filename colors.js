function setBackgroundColor(color){
  // document.querySelector('body').style.backgroundColor = color;
  $('body').css('backgroundColor', color);
}
function setStringColor(color){
  // document.querySelector('body').style.color = color;
  $('body').css('color', color);
}
function setLinkColor(color){
  // var alist = document.querySelectorAll('a');
  // var i = 0;
  // while(i < alist.length){
  //   alist[i].style.color = color;
  //   i = i + 1;
  // }
  $('a').css('color', color);//이 웹페이지에 있는 모든 a태그를 jQuery로 제어하겠다 라는 의미
}
function setKategorieColor(color){
  // document.querySelector('#kategorie').style.color = color;
  $('#kategorie').css('backgroundColor', color);
}
function setCapBackgroundColor(color){
  $('#cap').css('backgroundColor', color);
}
function setCapColor(color){
  $('#cap > a').css('color', color);
}
function LightSwitch(self) { //매개변수 설정 제대로 해줘야함
  if(self.value === 'dark mode'){
    setBackgroundColor('#1f2023');
    setStringColor('white');
    setLinkColor('white');
    setKategorieColor('#2d2f34');
    setCapBackgroundColor('#DB7093');
    setCapColor('#1f2023');
    self.value = 'light mode';
  } else {
    setBackgroundColor('white');
    setStringColor('black');
    setLinkColor('black');
    setKategorieColor('#f5f6fa');
    setCapBackgroundColor('#192233');
    setCapColor('white');
    self.value = 'dark mode';
  }
}
