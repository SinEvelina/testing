$( document ).ready(function() {

    // Header categories Slider
    if ( document.querySelector('.header-main__categories-slider') ) {

        $('.header-main__categories-slider').slick({
            infinite: true,
            slidesToShow: 8,
            responsive: [
            {
                breakpoint: 1350,
                settings: {
                slidesToShow: 6
                }
            },
            {
                breakpoint: 1000,
                settings: {
                slidesToShow: 4
                }
            },
            {
                breakpoint: 800,
                settings: {
                slidesToShow: 5
                }
            },
            {
                breakpoint: 550,
                settings: {
                slidesToShow: 3
                }
            }
            ],
            
            prevArrow: `<button type="button" class="slick-btn slick-next"></button>`,
            nextArrow: `<button type="button" class="slick-btn slick-next"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12.6401H21" stroke="#1B365D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 5.64014L21 12.6401L14 19.6401" stroke="#1B365D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></button>`
        });
    }


    if ( document.querySelector('.recipe-page-gallery__slider') ) {

        $('.recipe-page-gallery__slider').slick({asNavFor:'.recipe-page-gallery__slider-nav', infinite: false, adaptiveHeight:true, accessibility:true, prevArrow: `<button type="button" class="slick-btn slick-prev"><svg width="20" height="21" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12.6401H21" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14 5.64014L21 12.6401L14 19.6401" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></button>`,
        nextArrow: `<button type="button" class="slick-btn slick-next"><svg width="20" height="21" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12.6401H21" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14 5.64014L21 12.6401L14 19.6401" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></button>`});
            
        $('.recipe-page-gallery__slider-nav').slick({
            asNavFor:'.recipe-page-gallery__slider', 
            infinite: false, 
            slidesToShow: 5, 
            accessibility:true, 
            variableWidth: true, 
            focusOnSelect: true, 
            prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-btn slick-next"></button>'
        });

        /*$('.recipe-page-gallery__slider-item-popup').each(function(){
            $(this).magnificPopup({
                type: 'image',
                gallery: { enabled:true }
            });
        });*/

        $('.recipe-page-gallery__slider').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: {
                enabled:true
            }
        });

    }

    if ( document.querySelector('.join-section-container__left-brands-slider') ) {
        $('.join-section-container__left-brands-slider').slick({
            infinite: false, 
            slidesToShow: 4, 
            accessibility:true, 
            focusOnSelect: true, 
            dots: true,
            prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-btn slick-next"></button>'
        });
    }

});

window.addEventListener("DOMContentLoaded", function() {

    // Explore Menu
    initModal('explore-menu__modal', 'header-nav__menu-btn-inner')

    initModal('sign-in__modal', 'header-account__login')
    initModal('sign-in__modal', 'header-account__mobile-signin')
    initModal('sign-up__modal', 'header-account__join-now')
    initModal('reg-confirm__modal', 'sign-up__register-btn')


    if ( document.querySelector('.account-settings-btn') ) {
        initModal('account-settings__modal', 'account-settings-btn')
    }

    if ( document.querySelector('.share-icon') ) {
        initModal('share__modal', 'share-icon')
    }

    if ( document.querySelector('.recipe-page-rating-stars') ) {
        initModal('review__modal', 'recipe-page-rating-stars')
    }

    let regLink = document.querySelector('.sign-in__modal-register-link')
    let loginLink = document.querySelector('.sign-up__modal-login-link')
    regLink.addEventListener('click',  function(e) {
        e.preventDefault()

        let activeModals = document.querySelectorAll('.active-modal')
        for (let m of activeModals){
            m.classList.remove('active-modal');
        }
        let activeOverlays = document.querySelectorAll('.active-overlay')
        for (let o of activeOverlays){
            o.classList.remove('active-overlay');
        }

        document.querySelector('.header-account__join-now').click()

    })

    loginLink.addEventListener('click',  function(e) {
        e.preventDefault()

        let activeModals = document.querySelectorAll('.active-modal')
        for (let m of activeModals){
            m.classList.remove('active-modal');
        }
        let activeOverlays = document.querySelectorAll('.active-overlay')
        for (let o of activeOverlays){
            o.classList.remove('active-overlay');
        }

        document.querySelector('.header-account__login').click()

    })


    function initModal(wrapperClass, openClass) {
        let wrapper = document.querySelector(`.${wrapperClass}`)
        let modalBlock = wrapper.querySelector('._modal')
        let closeBtn = modalBlock.querySelector('.close-btn')
        let overlay = wrapper.querySelector('._modal-overlay')
        let body = document.body

        let openBtns = document.querySelectorAll(`.${openClass}`)

        for (let openBtn of openBtns){
            openBtn.addEventListener('click', openModal );
        }

        closeBtn.addEventListener('click', closeModal );
        overlay.addEventListener('click', closeModal );

        function openModal(){
            let activeModals = document.querySelectorAll('.active-modal')
            for (let m of activeModals){
                m.classList.remove('active-modal');
            }
            let activeOverlays = document.querySelectorAll('.active-overlay')
            for (let o of activeOverlays){
                o.classList.remove('active-overlay');
            }

            modalBlock.classList.add('active-modal');
            overlay.classList.add('active-overlay');
            body.classList.add('body-active-modal');
        }

        function closeModal(){
            modalBlock.classList.remove('active-modal');
            body.classList.remove('body-active-modal');
            overlay.classList.remove('active-overlay'); 
        }
    }


    /*let regBtn = document.querySelectorAll('.sign-up__register-btn')[0]
    regBtn.addEventListener('click',  function(e) {
        e.preventDefault()

    })*/
    
    //Explore - Sidebar Menu
    let exploreCatTitles = document.querySelectorAll('.explore-menu-sidebar__categories-item')
    let exploreFindRecipeTitle = document.querySelector('.explore-menu-sidebar__find-recipe')
    let exploreMain = document.querySelectorAll('.explore-main')

    for ( t of exploreCatTitles ) {
        t.addEventListener('click', function () {

            if ( window.innerWidth <= 700 && this.classList.contains('active') ) {
                
                this.classList.remove('active')
            } else {

                for (title of exploreCatTitles) {
                    title.classList.remove('active')
                }
                exploreFindRecipeTitle.classList.remove('active')
                document.querySelector('.explore-menu-sidebar__find-recipe-section').classList.remove('active')
                this.classList.add('active')

                let exploreCatTitle = this.getAttribute('data-explore-title')

                if (document.querySelectorAll('.explore-main.active')[0]) {
                    document.querySelectorAll('.explore-main.active')[0].classList.remove('active')
                }

                for (let em of exploreMain) {

                    if (em.getAttribute('data-explore-main') == exploreCatTitle) {
                        
                        em.classList.add('active')
                    }
                }

            }

        })
    }

    
    exploreFindRecipeTitle.addEventListener('click', function () {

        if ( window.innerWidth <= 700 && this.classList.contains('active') ) {
            
            this.classList.remove('active')
            this.closest('.explore-menu-sidebar__find-recipe-section').classList.remove('active')
        } else {

            for (let title of exploreCatTitles) {
                title.classList.remove('active')
            }
            this.classList.add('active')

            if (document.querySelectorAll('.explore-main.active')[0]) {
                document.querySelectorAll('.explore-main.active')[0].classList.remove('active')
            }

            document.querySelector('.explore-main_find-recipe').classList.add('active')

            if (window.innerWidth <= 700) {
                //this.classList.toggle('active')
                this.closest('.explore-menu-sidebar__find-recipe-section').classList.add('active')
            }

        }
    })
    
    
    //Checkboxes
    if ( document.querySelector('._checkbox-item') ) {
        let checkboxItems = document.querySelectorAll('._checkbox-item')
        for (let item of checkboxItems) {
            item.addEventListener('click', function(e){
                console.log('targ', e.target.closest('._checkbox-item'))
            if ( e.target.closest('._checkbox-item').classList.contains('checked') ) {
                e.target.closest('._checkbox-item').classList.remove('checked')
            } else {
                e.target.closest('._checkbox-item').classList.add('checked')
                console.log('targ added')
            }
            })
        }
    }
    

    
    
    //1100px
    const bp1100 = window.matchMedia( '(max-width:1100px)' );
            
    const bp1100Checker = function() {

        if ( document.querySelector('.recipe-page__main-recipe__left') ) {
            let mainRecipeLeftContainer = document.querySelector('.recipe-page__main-recipe__left')
            let mainRecipeRightContainer = document.querySelector('.recipe-page__main-recipe__right')
            let recipeSummary = document.querySelector('.recipe-page__summary-wrapper')
            let recipeUnderSummaryAd = document.querySelector('.recipe-page__main-ad-item')
            let last = mainRecipeLeftContainer.children.length

            if ( bp1100.matches === true ) {
                mainRecipeLeftContainer.insertBefore(recipeSummary, mainRecipeLeftContainer.children[3])
                mainRecipeLeftContainer.insertBefore(recipeUnderSummaryAd, mainRecipeLeftContainer.children[last+1])
                        
            } else if ( bp1100.matches === false ) {

                mainRecipeRightContainer.insertBefore(recipeSummary, mainRecipeLeftContainer[0])
                mainRecipeRightContainer.insertBefore(recipeUnderSummaryAd, mainRecipeLeftContainer[1])
                
            }

        }
                
    };
            
    bp1100.addEventListener("change", () => {
        bp1100Checker()
    });
            
    bp1100Checker();
    
    
});    