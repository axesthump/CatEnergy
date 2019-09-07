$(function(){
  $(".slider").twentytwenty({
    default_offset_pct: 0.5, // сколько показывать 'изображение до' в процентах (максимально 1) сразу после загрузки страницы
    orientation: 'horizontal', // ориентация слайдера ('horizontal' или 'vertical')
    before_label: 'До', // подпись 'до'
    after_label: 'После', // подпись 'после'
    no_overlay: true, // не показывать затемнение с надписями 'до' и 'после'
    move_slider_on_hover: false, // двигать "ползунок" слайдера вместе с курсором мыши
    move_with_handle_only: true, // двигать слайдер только за его "ползунок"
    click_to_move: false // разрешить перемещение "ползунка" слайдера по клику на изображении
  });
});