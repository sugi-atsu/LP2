'use strict';
// スクロールの処理
const targetElementOdd = document.querySelectorAll('.odd');
document.addEventListener('scroll', function(){
    for (let i = 0; i < targetElementOdd.length; i++) {
        const getElementDistanceOdd = targetElementOdd[i].getBoundingClientRect().top + targetElementOdd[i].clientHeight * .2;
        if(window.innerHeight > getElementDistanceOdd){
            targetElementOdd[i].classList.add('odd_fade_in');
        }
    }
});

const targetElementEven = document.querySelectorAll('.even');
document.addEventListener('scroll', function(){
    for (let i = 0; i < targetElementEven.length; i++) {
        const getElementDistanceEven = targetElementEven[i].getBoundingClientRect().top + targetElementEven[i].clientHeight * .2;
        if(window.innerHeight > getElementDistanceEven){
            targetElementEven[i].classList.add('even_fade_in');
        }
    }
});
// -----------------------スクロールの処理 ここまで-------------------------------
// スライダーの処理
const slideElement = document.querySelectorAll('.belongs_container li');
const prevButton = document.querySelector('.belongs_container .prev');
const nextButton = document.querySelector('.belongs_container .next');
let count = 0;
let before;
let current;
let after;
setInterval(() => {
    for (let i = 0; i < slideElement.length; i++) {
        slideElement[i].classList.remove('before');
        slideElement[i].classList.remove('current');
        slideElement[i].classList.remove('after');
    }
    count--;
    before = count - 1;
    after = count + 1;
    if (count < 0) {
        count = count + slideElement.length;
    }
    if(before < 0){
        before = before  + slideElement.length;
    }
    if(after > slideElement.length){
        after = after - slideElement.length;
    }
    slideElement[before].classList.add('before');
    slideElement[count].classList.add('current');
    slideElement[after].classList.add('after');
}, 5000);

// -----------------------スライダーの処理 ここまで-------------------------------
// flowメニュー処理
const getElementFlowMenu = document.querySelectorAll('.flowContent');
document.addEventListener('scroll', function(){
    for (let i = 0; i < getElementFlowMenu.length; i++) {
        // 表示領域トップから要素までの距離と要素の高さの20％の高さ
        const getElementDistanceFlowMenu = getElementFlowMenu[i].getBoundingClientRect().top + getElementFlowMenu[i].clientHeight * .2;
        // 表示領域の高さと上記の高さを比較
        if(window.innerHeight > getElementDistanceFlowMenu){
            getElementFlowMenu[i].classList.add('show');
        }
    }
});
// -----------------------flowメニューの処理 ここまで-------------------------------
// FAQの処理
const panel_header = document.querySelectorAll('.FAQ_container ul li .header');
console.log(panel_header);
for(let i = 0; i < panel_header.length; i++){
    panel_header[i].addEventListener('click', function(){
        //メニューを開く
        panel_header[i].nextElementSibling.classList.toggle('is_open');
        // ロゴをマイナスに変える
        panel_header[i].classList.toggle('minus');
        // 選択したリスト以外の処理
        for(let j = 0; j < panel_header.length; j++){
            if(j !== i){
                // 他を閉じる
                panel_header[j].nextElementSibling.classList.remove('is_open');
                // 他のマイナスをプラスに戻す
                panel_header[j].classList.remove('minus');
            }
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    // コンテナを指定
    const section = document.querySelector('.cherry-blossom');
  
    // 花びらを生成する関数
    const createPetal = () => {
      const petalEl = document.createElement('span');
      petalEl.className = 'petal';
      const minSize = 10;
      const maxSize = 15;
      const size = Math.random() * (maxSize + 1 - minSize) + minSize;
      petalEl.style.width = `${size}px`;
      petalEl.style.height = `${size}px`;
      petalEl.style.left = Math.random() * innerWidth + 'px';
      section.appendChild(petalEl);
  
      // 一定時間が経てば花びらを消す
      setTimeout(() => {
        petalEl.remove();
      }, 10000);
    }
  
    // 花びらを生成する間隔をミリ秒で指定
    setInterval(createPetal, 300);
  });