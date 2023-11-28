var CHIP = 101
var LOLI = 0
var type1 = 'M'
var type2 = 'K'
var BGX = new Audio ('sfx/bgx.mp3');
var BTSFX = new Audio('sfx/btsfx.mp3');
var LOLISFX = new Audio('sfx/loli.mp3');

function chipSpin(){
  CHIP -= 1
  document.getElementById('chip').innerHTML = CHIP+type1
  document.getElementById('loli').innerHTML = LOLI
  if (CHIP == 0){
    document.getElementById('spin').style.visibility='hidden'
  }
}
chipSpin()
function Spin(){
  //LOG ANIM
  var circle = document.getElementById('circle')
  var rotationTime = Math.random() * 2 + 2;
  var btSpin = document.getElementById('spin')
  circle.style.transitionDuration = rotationTime + 's';
  circle.classList.toggle('rotate');
  btSpin.style.display='none'
  setTimeout(function() {
  circle.style.transitionDuration = '0.5s';
  }, rotationTime * 1000)
  setTimeout(function(){
    btSpin.style.display='inline-block'
  },2000)
 SpinLucky()
 chipSpin()
 sfx()
 bgx()
}
function SpinLucky() {
  const data = ~~(Math.random() * 2100)
  var jp = 'JACKPOT: '
  document.getElementById('kode').innerHTML = data;
  
  if (data < 200){
    console.log('LEWAT', data)
  }
  else {
    if (data < 50){//BAGIAN 50 KEBAWAH MENDAPATKAN 10 POIN
    CHIP += 10
  }
  }
    if (data < 5){//BAGIAN 10 KEBAWAH MENDAPATKAN 800 POIN
      CHIP += 800
    }
   //BAGIAN NAMBAHIN LOLI
      if (data < 30 ){
        LOLI += 1
      }
document.querySelector('.circle').style.transform = 'rotate(' + data + 'deg)';

}
//SFX SOUNDTRACK BG MUSIC FUNC
function sfx(){
  
        
        // Memutar SFX
        BTSFX.play();
}
//BGX NON NON BIYORI
function bgx(){
  
  BGX.play();
}