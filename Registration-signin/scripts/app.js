$('#register-open, #toRegister').on('click',(e)=>{
    e.preventDefault()
    $('.login-container').hide()
    $('.registration-container').fadeIn(1300).css('display','flex')
})

$("#backLogin").on('click',()=>{
    $('.registration-container').hide()
    $('.login-container').fadeIn(1300)
})

data = {}

$('#register-form').on('submit',function(e){
    e.preventDefault();
    var userName = $('#register-username')
    var email = $('#register-email')
    var password = $('#register-password')
    var rptPassword = $('#repeat-password')
    var passworVal = password.val()
    var rptPasswordVal = rptPassword.val()
    if(userName.val() !=='' && email.val() !=='' && password.val() !=='' && rptPasswordVal === passworVal && rptPassword.val() !=='' && rptPasswordVal.length > 8){
        $('#register-form input').removeClass('error')
        $(this).serializeArray().forEach(el => {
            data[el.name] = el.value    
        });
        console.log(data);
        localStorage.setItem('user', JSON.stringify(data))
        var user = JSON.parse(localStorage.getItem('user'))
        console.log(user);
        $('#register-form input').val('')
        setTimeout(() => {
            $('.registration-container').hide()
            $('.login-container').fadeIn(1300)
        }, 1500);
    }
    else{
        $('#register-form input').addClass('error')
        $('.message-modal').fadeIn(500).css('display','flex')
    }
    
});

$('#modal-close').on('click',()=>{
    if($('.message-modal')){
        $('.message-modal').fadeOut(300)
    }
})
    $("body").click(function() {
        if ($(".message-modal").is(":visible")) {
         $(".message-modal").fadeOut(300)
        }
    });

$('#register-password').on('keyup',function(){
    if($(this).val().length < 8){
        $('#password-info').css({
            opacity: 1,
        })
    }else{
        $('#password-info').css({
            opacity: 0,
        })
    }
})

$('#register-password').focusout(function(){
    if($('#password-info')){
        $('#password-info').css({
            opacity: 0,
        })
    }
})
