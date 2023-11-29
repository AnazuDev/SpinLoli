var CHIP = 101
var LOLI = 0
var type1 = 'M'
var type2 = 'K'
var MAINDL = document.getElementById('main')
var TIPEDL = document.getElementById('tipe')
var DL = document.getElementById('dl')
var IMGDL = document.getElementById('icondl')
var BGX = new Audio ('sfx/bgx.mp3');
var BTSFX = new Audio('sfx/btsfx.mp3');
var COINSFX = new Audio('sfx/coinsfx.mp3');
var JPSFX = new Audio('sfx/jpsfx.mp3');
var LOLISFX = new Audio('sfx/anya.mp3');
function dialog(){
  DL.style.display='none'
}
function dlGone(){
  setTimeout(function(){
    DL.style.display='none'
  },4000)
}
dialog()
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
  const data = ~~(Math.random() * 4100)
  var jp = 'JACKPOT: '
  document.getElementById('kode').innerHTML = data;
  
  if (data > 1000 && data <1200){
    COINSFX.play();
    CHIP += 1
    DL.style.display='inline-block'
    TIPEDL.innerHTML='YOUR SMALL COIN 1+'
    IMGDL.setAttribute("src", "assets/star.png")
    dlGone()
  }
  if (data > 100 && data <300){
    COINSFX.play();
    CHIP += 25
    DL.style.display='inline-block'
    TIPEDL.innerHTML='YOUR BIG COIN 25+'
    IMGDL.setAttribute("src", "assets/star.png")
    dlGone()
  }
  else {
    if (data > 40 && data <200){//BAGIAN 50 KEBAWAH MENDAPATKAN 50 POIN
    COINSFX.play();
    CHIP += 50
    DL.style.display='inline-block'
    TIPEDL.innerHTML='YOUR MEG COIN 50+'
    IMGDL.setAttribute("src", "assets/star.png")
    dlGone()
  }
  }
    if (data > 1 && data <10){//BAGIAN 10 KEBAWAH MENDAPATKAN 800 POIN
     JPSFX.play();
     CHIP += 800
     DL.style.display='inline-block'
     TIPEDL.innerHTML='YOUR JACKPOT 800+'
     IMGDL.setAttribute("src", "assets/star.png")
     dlGone()
    }
   //BAGIAN NAMBAHIN LOLI
      if (data >20 && data <40 ){
        LOLI += 5
        LOLISFX.play();
        DL.style.display='inline-block'
        TIPEDL.innerHTML='YOUR LOLI COIN 5+'
        IMGDL.setAttribute("src", "assets/128loli.png")
        dlGone()
      }
      if (data >300 && data <500 ){
        LOLI += 1
        LOLISFX.play();
        DL.style.display='inline-block'
        TIPEDL.innerHTML='YOUR LOLI COIN 1+'
        IMGDL.setAttribute("src", "assets/128loli.png")
        dlGone()
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