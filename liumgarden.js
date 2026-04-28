$(document).ready(function(){
    $('.popupView_close').click(function(){
        $('.popupView').hide();
    })

    $('.community_write').click(function(){
        $('.popupView').show();
    });
    $('#add_btn').click(function(){
        $('.popupView').hide();
    })

    // myPlant 식물 등록하기 팝업
    $('.popupView_close').click(function(){
        $('.plus_input').hide();
    })
    $('.plus_plant').click(function(){
        $('.plus_input').show();
    });

    
});

$(document).ready(function(){
    $('.more_btn').click(function(){
        $('.dic_info_plus').addClass('active');
        $('.more_btn').hide();
    })

});

$(document).ready(function(){
    let currentIndex = 0;
    const slider = document.querySelectorAll('.slider');
    slider.forEach(img => img.style.opacity = '0');
    slider[0].style.opacity = '1';

    setInterval(()=>{
        let nextIndex = (currentIndex + 1) % slider.length;

        slider[currentIndex].style.opacity = '0';
        slider[nextIndex].style.opacity='1';
        slider.forEach(img=>img.style.transition = 'all 2s');

        currentIndex = nextIndex;
    },5000)

});