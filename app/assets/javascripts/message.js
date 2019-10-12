$(function(){
  function buildHTML(message){  
    img = message.image.url !== null ? `<img class="contents__chat__box__message__image" src = ${message.image.url}>` : "";
    var html = `<div class="contents__chat__box">
                  <div class="contents__chat__box__top-box">
                    <div class="contents__chat__box__top-box__name">
                      ${ message.user_name }
                    </div>
                    <div class="contents__chat__box__top-box__time">
                      ${ message.time }
                    </div>
                  </div>
                  <div class="contents__chat__box__message">
                    <p class="contents__chat__box__message__text">
                    ${ message.body }
                    </p>
                    ${img}
                  </div>
                </div>`
    return html;      
  }

  $('#new_message').submit(function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false    
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.contents__chat').append(html);
      $('.contents__chat').animate({scrollTop:$('.contents__chat')[0].scrollHeight});
      $('#new_message')[0].reset();
    })
    .fail(function(){
      alert('error');
    });
  });
});

