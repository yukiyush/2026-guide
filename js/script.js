$(function() {
  $('.hamburger').click(function() {
    // メニューの開閉状態を切り替える
    $('.menu').toggleClass('open');

    // ハンバーガーボタンのアクティブクラスを切り替える
    $(this).toggleClass('active');

    $('.menu a').on('click', function() {
        $('.hamburger').removeClass('active'); // ボタンの「X」印を元の「三本線」に戻す
        $('.menu').removeClass('open');       // メニューを非表示（透明）に戻す
    });
  });
});

$(document).ready(function() {

    // === 用語解説の「開く・閉じる」往復処理 ===
    $('.toggle-btn').on('click', function() {
        
        // 1. 隠れているコンテンツをスライド開閉（往復）させる
        $('.more-content').slideToggle(400);
        
        // 2. ボカシ用のグラデーションに「is-open」クラスをつけ外しして、消したり出したりする
        $('.fade-overlay').toggleClass('is-open');
        
        // 3. 今の文字が「もっとみる」なら「閉じる」に、それ以外なら「もっとみる」に変更する
        if ($(this).text() === 'もっとみる') {
            $(this).text('閉じる');
        } else {
            $(this).text('もっとみる');
        }
    });
    // === アコーディオンの開閉処理 ===
$('.accordion-header').on('click', function() {
    
    // 1. クリックしたヘッダーの直後にある「中身」をスライド開閉
    $(this).next('.accordion-content').slideToggle(300);
    
    // 2. クリックしたヘッダー自体に「is-active」クラスをつけ外しする
    // (これでCSS側の角の丸み調整と、矢印の180度回転が同時に発動します)
    $(this).toggleClass('is-active');

});

});

$(document).ready(function() {

    // 1. 上のヘッダーをクリックしたとき（開く処理）
    $('.accordion-header').on('click', function() {
        // すでに開いている場合は何もしない（閉じる時は下の↑ボタンに任せる）
        if ($(this).hasClass('is-open')) return;

        $(this).addClass('is-open'); // クリックしたヘッダーだけ角丸を切り替え
        $(this).next('.accordion-content').slideDown(400); // クリックしたヘッダーの「すぐ下の中身だけ」をスライド展開
    });

    // 2. 下の上向き矢印（↑）ボタンをクリックしたとき（閉じる処理）
    $('.accordion-close-icon').on('click', function(e) {
        e.stopPropagation(); // イベントの連鎖を止める保険
        
        const $content = $(this).closest('.accordion-content'); // クリックされた↑ボタンが入っている中身の箱
        const $header = $content.prev('.accordion-header');     // そのすぐ上にあるヘッダー

        $content.slideUp(400, function() {
            // 閉じ終わった瞬間に、上のヘッダーの角丸を元に戻す
            $header.removeClass('is-open');
        });
    });

});