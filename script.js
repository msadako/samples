

<link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap" rel="stylesheet">

.class{
  font-family: 'Noto Sans JP', sans-serif;
}


<link href="https://fonts.googleapis.com/css?family=Noto+Serif+JP&display=swap" rel="stylesheet">

.minchou{
  font-family: 'Noto Serif JP', serif;
}



$(function(){

  //←windowオブジェクトにloadイベントをバインド
    setTimeout(function(){
      window.scrollTo(0,1);　//←windowオブジェクトを1ピクセルスクロール
  　},1);
  
  // 投票ボタンエラー表示
      $('#result').click(function(){
          var cc01 = $('#cL01 input:checked').length;
          if(cc01 != 0) {
              if($("#error p").hasClass('er01')){
              } else {
                  $("#error").hide();
              }
              $("#error p").remove("p.er01");
          } else {
              $("#er01").text("※回答が未選択です。");
              $("#error p").remove("p.er01");
              $("#error").show();
              $("#error").append("<p class='er01 popupnote'><label for='label1'>OK</label><input type='checkbox' id='label1'><span class='popupbox'><img src='./img/popup_note.png' alt=''></span></p>");
              return false;
          }
      });
      
      $('#result').click(function(){
          if($("#error p").hasClass('er01')){
          } else {
              $("#error").hide();
              $('#wrap_re').css("display", "block").fadeTo(1000, 1);
              var result_point = $('h1#result_point').offset().top;
              $('html, body').animate({scrollTop:result_point}, 800, 'swing');
        $('.radio').css("pointer-events", "none"); // 結果見るボタンのあとは選択肢を直せない
          }
      });
  
  
      $('.zangeBtn').click(function(){
          $('#wrap_re').css("display", "block").fadeTo(1000, 1);
          var result_point = $('#result_point').offset().top;
          $('html, body').animate({scrollTop:result_point}, 800, 'swing');
      });
  
  
      $('.zangeBtn_list li').click(function() {
          var index = $('.zangeBtn_list li').index(this);
          console.log(index)
          $('.result_list li:not(:eq(index))').animate({'opacity':'0'});
          $('.result_list li').eq(index).animate({'opacity':'1'});
          //結果の高さを取得してresult_listのheightにanimateする
          var imgHeight = $('.result_list li').eq(index).children('img').height();
          console.log(imgHeight)
          $('.result_list').animate({'height':imgHeight});
      });
  
      
      $('.backBtn > img').click(function(){
          var zangeList_point = $('#zange_start').offset().top;
          $('html, body').animate({scrollTop:zangeList_point}, 800, 'swing');
          setTimeout(function(){
              alert('不摂生警告文');
          },1000);
      });
  
  
  
  // 表示切り替え
    $('ul.tab_area li').click(function() {
      var index = $('ul.tab_area li').index(this);
      $('.content_area').css('display','none');
      $('.content_area').eq(index).fadeIn(800);
      $('.tab_area li').removeClass('select');
      $(this).addClass('select')
    });
  

  // scroll
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });



    

    //スクロールするとふわっと
    // +50 はしたからの距離 50がちょうどいい
    $(window).scroll(function (){

      $('.fadein').each(function(){
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight + 50){
              $(this).css('opacity','1');
              $(this).css('transform','translateY(0)');
          }
      });
      $('.fadein2').each(function(){
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight + 51){
              $(this).css('opacity','1');
              $(this).css('transform','translateY(0)');
          }
      });

    });
      //cssはこんな感じ
      // .fadein {
      //   opacity : 0;
      //   transform: translateY(70px);
      //   transition: all 1s;
      // }
      // .fadein2 {
      //   opacity : 0;
      //   transform: translateY(70px);
      //   transition: all 1.75s;
      // }






      //マウスホバー時のみ
      $("#service-text-list li").on({
        'mouseenter' : function(){
          var index = $(this).index();
          $(".slideAndContents-images-list li").removeClass('active')
          $(".slideAndContents-images-list li").eq(index).addClass('active')
        },
        'mouseleave' : function(){
          
        }
      });
  
















  });