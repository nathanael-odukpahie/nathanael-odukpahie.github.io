$(document).ready(function(){
    $('#datepicker').datepicker();
    $('.date').removeClass('gj-textbox-md')
    $('.gj-icon').hide();
    $('.select2').select2();
})

$(document).ready(function(){
    $(".form-control-name").on('input', function(){
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if ($('.fname').val() == "" || $('.sname').val() == "" || !$('.email').val().match(re) || $('.phone').val().length == 0 || $('.phone').val().length >= 15 ){
            $('.continue').addClass('cursor-auto') 
            $('.continue').attr('disabled',true)  
        }
        else{
            $('.continue').removeAttr('disabled')
            $('.continue').removeClass('cursor-auto') 
        }
    })

    $(".form-control-two").on('change', function(){
        if ($('.gender').select2('data')[0]['id'] == "" || $('.state').select2('data')[0]['id'] == "" || $('.job').select2('data')[0]['id'] == "" || $('.religion').select2('data')[0]['id'] == "" || $('.date').val() == ""){
            
            $('.submit').addClass('cursor-auto') 
            $('.submit').attr('disabled',true)   
        }
        else{
            $('.submit').removeAttr('disabled')
            $('.submit').removeClass('cursor-auto') 
        }
    })
    
    $('.continue').on('click', function(){
        $(this).hide();
        $('.submit').show();
        $('.note').show();
        $('.first').hide();
        $('.second').show();
    })

    $('.activate-login').on('click', function(){
        $('.row-login').show();
        $('.row-register').hide();
    })

    $('.activate-register').on('click', function(){
        $('.row-login').hide();
        $('.row-register').show();
    })
});