/**************************
 * swiper.js
 **************************/
var swiper = new Swiper('.swiper', {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

// 流れ星をランダムの位置で表示
$(function(){
  if (window.matchMedia( '(min-width: 600px)' ).matches) {
  setInterval(function(){
    var width = parseInt($('.mission').css('width'));
    var height = parseInt($('.mission').css('height'));
    var val_x = Math.round( Math.random()* width ) - 250;
    var val_y = Math.round( Math.random()* height );

    $('.star_box').css('top', val_y);
    $('.star_box').css('left', val_x);
  },2000);
}
});

// ページ内リンクのスクロール
$(function(){
  $('a[href^=#]').click(function(){
    var speed = 400;
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position  = target.offset().top;
    $('body,html').animate({scrollTop:position},speed,'swing');
    return false;
  });
});

// スクロールでふわっと表示
$(function () {
  $(window).scroll(function () {
    $('.scroll_item').each(function () {
      const targetElement = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 150) {
        $(this).addClass('view');
      }
    });
  });
});

// particle-js
particlesJS("particles-js", {
	"particles":{
		"number":{
			"value":346,//この数値を変更すると星の数が増減できる
			"density":{
				"enable":true,
				"value_area":800
			}
		},
		"color":{
			"value":"#ffffff"
		},
		"shape":{
			"type":"circle",//形状はcircleを指定
			"stroke":{
				"width":0
			},
			},
		"opacity":{
			"value":1,//シェイプの透明度
			"random":true,//シェイプの透明度をランダムにする
			"anim":{
				"enable":true,//シェイプの透明度をアニメーションさせる
				"speed":3,//シェイプの透明度をアニメーションさせる
				"opacity_min":0,//透明度の最小値０
				"sync":false//全てを同時にアニメーションさせない
			}
		},
		"size":{
			"value":2,
			"random":true,
			"anim":{
				"enable":false,
				"speed":4,
				"size_min":0.3,
				"sync":false
			}
		},
		"line_linked":{
			"enable":false,
		},
		"move":{
			"enable":true,
			"speed":120,//この数値を小さくするとゆっくりな動きになる
		"direction":"none",//方向指定なし
		"random":true,//動きはランダムに
		"straight":true,//動きをとどめる
			"out_mode":"out",
			"bounce":false,
			"attract":{
				"enable":false,
				"rotateX":600,
				"rotateY":600
			}
		}
	},
	"interactivity":{
		"detect_on":"canvas",
		"events":{
			"onhover":{
				"enable":false,
			},
			"onclick":{
				"enable":false,
			},
			"resize":true
		}
	},
	"retina_detect":true
});

