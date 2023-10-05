$(function() {

    /***
     * USE FOR:
     *   - Quick Equal Heights - Does not work in EPI
     */
     /*
     $(window).on('load resize', function() {
         $('.resource-card').matchHeight({
             byRow: true
         });
     });
     */

    /***
     * USE FOR:
     *   - blog_footer_cta_Oct2021_v1
     */
    (function() {

        let listWidth = $('.link-expander .exp ul').outerWidth();
        let wWidth = $(window).width();

        $(window).on('load resize', function() {
            listWidth = $('.link-expander .exp ul').outerWidth();
            console.log(wWidth);
            wWidth = $(window).width();
            $('.link-expander ul').animate({
                marginLeft: '-' + listWidth + 'px'
            });

            if (wWidth >= 767) {
                $('.mobile-btn-expander').removeClass('expanded');
                $('.expanded-panel').slideUp(100);
                $('.mobile-btn-expander').animate({
                    right: '0px'
                });
                $('.mobile-btn-expander').parent('div').animate({
                    width: '120px'
                });
            }
        });

        //Desktop
        $('.btn-expander').on('click', function(e) {
            console.log(wWidth);
            e.preventDefault();
            e.stopPropagation

            if ($(this).hasClass('expanded')) {
                $(this).removeClass('expanded');
                $('.link-expander ul').animate({
                    marginLeft: '-' + listWidth + 'px'
                }, 400);
            } else {
                $(this).addClass('expanded');
                $('.link-expander ul').animate({
                    marginLeft: 0 + 'px'
                }, 400);
            }
        });

        //Mobile
        $('.mobile-btn-expander').on('click', function(e) {
            e.preventDefault();
            if ($(this).hasClass('expanded')) {
                $(this).removeClass('expanded');
                $('.expanded-panel').slideUp(100);
                $(this).animate({
                    right: '0px'
                });
                $(this).parent('div').animate({
                    width: '120px'
                });
            } else {
                $(this).addClass('expanded');
                $(this).parent('div').animate({
                    width: wWidth + 55 + 'px'
                });
                $(this).animate({
                    right: '-95%'
                });
                $('.expanded-panel').delay(500).slideDown();
            }
        });

    })();

    /***
     * USE FOR:
     *  - sub_nav_img_Oct2021_v1
     *  - sub_nav_txt_Oct2021_v1
     */
    (function() {
        let wWidth = $(window).width();

        let expandBtn = $('button.expand-sub-nav');
        $(expandBtn).on('click', function(e) {
            e.preventDefault();
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).next('.page-nav').slideUp();
            } else {
                $(this).addClass('active');
                $(this).next('.page-nav').slideDown();
            }
        });

        $(window).on('load resize', function() {
            if (wWidth >= 787) {
                $(expandBtn).removeClass('active');
                $('.page-nav').removeAttr('style');
            }
        });

        $('.page-nav ul li a').on('click', function() {
            if( !$(this).hasClass('active') ) {
                $('.page-nav ul li a').removeClass('active');
                $(this).addClass('active')
            }
        });

    })();

    /***
     * USE FOR:
     *  -  faqs_Oct2021_v1
     *  -  faqs_Oct2021_v1 option_v2
     *
     *  Accessible Accordions
     */
    (function() {

        let jsAccordTrigger = $('.js_accordion_trigger--single');
        let jsAccordPanel = $('.js_accordion_panel--single');

        $(jsAccordTrigger).on('keypress click', function() {
            if ($(this).hasClass('is-expanded')) {
                $(this).removeClass('is-expanded').attr('aria-expanded', 'false');
                $(this).next(jsAccordPanel).slideUp().attr('aria-hidden', 'true');
            } else {
                $(this).addClass('is-expanded').attr('aria-expanded', 'true');
                $(this).next(jsAccordPanel).slideDown().attr('aria-hidden', 'false');
            }
        });

        $(window).on('load resize', function() {
            var handleWidth = $('.js-expander').outerWidth();
            var handleContainer = $('.faq-expander-wrapper').width();
            $('.js-expander').removeAttr('style').unbind('click');
            //console.log('handle container: ' + handleContainer);
            //console.log('handle: ' + handleWidth);


            $('.js-expander').on('click', function() {
                if($(this).hasClass('expanded')) {
                    $(this).removeClass('expanded').attr('aria-expanded', 'false');
                    $(this).animate({
                        'width' : handleWidth + 'px'
                    }, 300);
                    $('.faq-close').css({
                        'opacity' : 0
                    }, 500);
                    $('.faq-open').delay(500).css({
                        'opacity' : 1
                    }, 500);

                    //Let's close the FAQs sliders
                    $(this).parent().next('.llc-accordion-main-panel').slideUp().attr('aria-hidden', 'true');
                } else {
                    $(this).addClass('expanded').attr('aria-expanded', 'true');
                    $(this).animate({
                        'width' : '100%'
                    }, 300);
                    $('.faq-open').css({
                        'opacity' : 0
                    }, 500);
                    $('.faq-close').delay(500).css({
                        'opacity' : 1
                    }, 500);

                    //Let's open the FAQs sliders
                    $(this).parent().next('.llc-accordion-main-panel').slideDown().attr('aria-hidden', 'false');
                }
            });
        });

    })();

    /***
     * USE FOR:
     *   - resources_nav_Oct2021_v1
     */
    (function() {
        let resourceSlider = function() {
            let $resourceSlider = $('.resource-cards');

            $resourceSlider.each(function() {
                $(this).slick({
                    dots: false,
                    infinite: false,
                    draggable: false,
                    speed: 300,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    prevArrow: $(this).parents('.resources_nav_Oct2021_v1').next('.section').find('.prev-slide-arrow'),
                    nextArrow: $(this).parents('.resources_nav_Oct2021_v1').next('.section').find('.next-slide-arrow'),
                    appendDots: $(this).parents('.resources_nav_Oct2021_v1').next('.section').find('.dots-controls'),
                    dots: false,
                    dotsClass: 'custom-dots',
                    customPaging: function(slider, i) {
                        var slideNumber = (i + 1),
                            totalSlides = slider.slideCount;
                        return '<button type="button" class="dot" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + ' of ' + totalSlides + ' slides</span></button>';
                    },
                    responsive: [{
                            breakpoint: 1024,
                            settings: {
                                dots: true,
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                dots: true,
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 580,
                            settings: {
                                dots: true,
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            });

            $('.resource-cards').on('setPosition', function() {
                $(this).find('.slick-slide').height('auto');
                var slickTrack = $(this).find('.slick-track');
                var slickTrackHeight = $(slickTrack).height();
                $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
            });
        };
        resourceSlider();

        /****
         * Resources slider BG:
         * Used to calculate the position of the background at different breakpoints
         */
        $(window).on('load resize', function() {
            $('.resources_nav_Oct2021_v1').each(function() {
                let rCardHeight = $('.resource-card-img img').height() + 30;
                $('.resources_nav_Oct2021_v1 .bg').css({
                    'top': rCardHeight + 'px'
                });
            });
        });

        /**
         * Resources Simple BG - No Slider
         */
        $(window).on('load resize', function() {
            $('.resources_nav_Oct2021_v1.simple').each(function() {
                let rCardHeight = $('.resource-card-img img').height();
                $('.resources_nav_Oct2021_v1.simple .bg').css({
                    'top': rCardHeight + 'px'
                });
            });
        });

    })();

    /***
     * USE FOR:
     *   - carousel_multi_Oct2021_v1
     */
    (function() {

        let multi = $('.carousel_multi_Oct2021_v1');
        $(multi).each(function() {

            let multiSlider = $(this).find('.multi-slider');
            let playPause = $(this).find('.multi-play-pause-slider');

            multiSlider.slick({
                dots: false,
                arrows: false,
                draggable: false,
                speed: 300,
                slidesToShow: 1,
                focusOnSelect: true,
                fade: true,
            });

            let multiSliderThumb = $(this).find('.multi-slider-thumb');
            multiSliderThumb.slick({
                arrows: true,
                draggable: false,
                dots: false,
                autoplay: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: $(multiSlider),
                focusOnSelect: true,
                infinite: true,
                centerMode: true,
                centerPadding: '40px',
                prevArrow: $(multiSliderThumb).prev('.custom-arrows').find('.prev-slide-arrow'),
                nextArrow: $(multiSliderThumb).prev('.custom-arrows').find('.next-slide-arrow'),
                responsive: [{
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            });

            //Play/Pause Button
            $(playPause).on('click', function(e) {
                e.preventDefault();
                var btnStatus = $(this).attr('data-buttonStatus');
                console.log(btnStatus);

                if( btnStatus == 'play') {
                    $(this).attr('data-buttonStatus', 'pause').attr('aria-label', 'Play Slider');
                    $(this).find('.pause').attr('data-status', 'false').attr('aria-hidden', 'true');
                    $(this).find('.play').attr('data-status', 'true').attr('aria-hidden', 'false');
                    $(multiSliderThumb).slick('slickPause');
                }else {
                    $(this).attr('data-buttonStatus', 'play').attr('aria-label', 'Pause Slider');
                    $(this).find('.pause').attr('data-status', 'true').attr('aria-hidden', 'false');
                    $(this).find('.play').attr('data-status', 'false').attr('aria-hidden', 'true');
                    $(multiSliderThumb).slick('slickPlay');
                }
            });

        });
    })();

    /***
     * USE FOR:
     *   - video_single_Oct2021_v1
     *   - video_double_Oct2021_v1
     */
    (function() {
        $('.video-play-btn').on('click', function(e) {
            e.preventDefault();
            $(this).prev('iframe').addClass('active');
            $(this).parent('.video-wrapper').find('.video-poster').fadeOut();
            $(this).fadeOut();
            $(this).prev('iframe')[0].src += "?autoplay=1";
        })
    })();

    //Tabs to Accordions
    /*
    $('#horizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        //width: 'auto', //auto or any width like 600px
        //fit: true, // 100% fit in a container
        closed: 'accordion', // Start closed if in accordion view
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
    */

    /***
     * USE FOR:
     *   - single_slider_Oct2021_v1
     */
    (function() {

        let $singleSlider = $('.single-slider');
        $singleSlider.each(function() {

            let thisSlider = $(this);

            let currentSlideNum = $(thisSlider).parent().next().children('.single-dots-controls').find('.currentSlide');
            let slidesTotal = $(thisSlider).parent().next().children('.single-dots-controls').find('.slidesTotal');

            //Count the number of Slides
            $(this).on('init', function(event, slick) {
                $(currentSlideNum).text(slick.slickCurrentSlide() + 1);
                $(slidesTotal).text(slick.slideCount);
            })

            //Setup slider
            $(this).slick({
                autoplay: true,
                dots: true,
                arrows: true,
                draggable: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                infinite: true,
                prevArrow: $(this).parent().next().children('.single-custom-arrows').find('.prev-slide-arrow'),
                nextArrow: $(this).parent().next().children('.single-custom-arrows').find('.next-slide-arrow'),
                appendDots: $(this).parent().next().children('.single-dots-controls').find('.dots-controls'),
		        dotsClass: 'custom-dots',
		        customPaging: function(slider, i) {
		            var slideNumber = (i + 1),
		                totalSlides = slider.slideCount;
		            return '<button type="button" class="dot" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + ' of ' + totalSlides + ' slides</span></button>';
		        }
            });

            //Update current slide count
            $(this).on('beforeChange', function(event, slick, currentSlide, nextSlide){
                $(this).parent().next().children('.single-dots-controls').find('.currentSlide').text(nextSlide + 1);
            });

            //Play Button
            $(this).parent().next().children('.single-custom-arrows').find('.single-slider-play').on('click', function() {
                $(thisSlider).slick('slickPlay');
            });

            //Pause Button
            $(this).parent().next().children('.single-custom-arrows').find('.single-slider-pause').on('click', function() {
                $(thisSlider).slick('slickPause');
            });
        });

    })();

    /***
     * USE FOR:
     *   - mega_slider_Oct2021_v1
     */
    (function() {
        let megaSlider = $('.mega-slider');

        $(megaSlider).each(function() {

            let thisSlider = $(this);

            let currentSlideNum = $(this).parent().next().children('.mega-dots-controls').find('.currentSlide');
            let slidesTotal = $(this).parent().next().children('.mega-dots-controls').find('.slidesTotal');

            //Count the number of Slides
            $(this).on('init', function(event, slick) {
                $(currentSlideNum).text(slick.slickCurrentSlide() + 1);
                $(slidesTotal).text(slick.slideCount);
            })

            $(this).slick({
                autoplay: true,
                dots: true,
                arrows: true,
                draggable: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                infinite: true,
                prevArrow: $(this).parent().next().children('.mega-custom-arrows').find('.prev-slide-arrow'),
                nextArrow: $(this).parent().next().children('.mega-custom-arrows').find('.next-slide-arrow'),
                appendDots: $(this).parent().next().children('.mega-dots-controls').find('.controls'),
		        dotsClass: 'dots-controls',
		        customPaging: function(slider, i) {
		            var slideNumber = (i + 1),
		                totalSlides = slider.slideCount;
		            return '<button type="button" class="dot" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + ' of ' + totalSlides + ' slides</span></button>';
		        }
            });

            //Update current slide count
            $(this).on('beforeChange', function(event, slick, currentSlide, nextSlide){
                $(this).parent().next().children().children('.mega-dots-controls').find('.currentSlide').text(nextSlide + 1);
            });

            //Play Button
            $(this).parent().next().children('.mega-custom-arrows').find('.mega-slider-play').on('click', function() {
                $(thisSlider).slick('slickPlay');
            });

            //Pause Button
            $(this).parent().next().children('.mega-custom-arrows').find('.mega-slider-pause').on('click', function() {
                $(thisSlider).slick('slickPause');
            });

        });

    })();

    /***
     * USE FOR:
     *   - image_compare_slider_Oct2021_v1
     */
    (function() {
        $('#compare-ip').on('input', function(e) {
            $('.image-compare .before .after').css({
                'width' : +e.target.value + 'px'
            });
        });

        $(window).on('load resize', function() {
            let ww = $(window).width();
            if( ww > 541 && ww < 840) {
                $('#compare-ip').attr('max', 480).val(240);
                $('.image-compare .before .after').css({
                    'width' : '240px'
                });
            }else if (ww < 540 ) {
                $('#compare-ip').attr('max', 300).val(150);
                $('.image-compare .before .after').css({
                    'width' : '150px'
                });
            }else {
                $('#compare-ip').attr('max', 770).val(385);
                $('.image-compare .before .after').css({
                    'width' : '385px'
                });
            }
        });

    })();


    /***
     * USE FOR:
     *   - form_salesforce_Oct2021_v1
     */
    $('.form-submit').on('click', function(e) {
        var form = $(this).closest('form');

        var isValid = true;

        //Validate Fields
        $('.js-validate', form).each(function() {
            if($.trim($(this).val()) == '' && !$(this).parents('.form-group').hasClass('hidden') ){
                var $thisId = $(this).attr('id');
                isValid = false;

                $(this).prev().addClass('has-error');
                $(this).next().show();
                $(this).attr({
                    'aria-invalid' : 'true',
                    'aria-describedby' : $thisId + '-error'
                });
            } else {
                $(this).prev().removeClass('has-error');
                $(this).next().hide();
                $(this).attr({
                    'aria-invalid' : 'false',
                    'aria-describedby' : ''
                });
            }
        });

        $('.js-email', form).each(function() {
            var email = $(this).val();
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

            if( $.trim($(this).val()) == '' || !emailReg.test( email ) ){
                var $thisId = $(this).attr('id');
                isValid = false;

                $(this).prev().addClass('has-error');
                $(this).next().show();
                $(this).attr({
                    'aria-invalid' : 'true',
                    'aria-describedby' : $thisId + '-error'
                });
            } else {
                $(this).prev().removeClass('has-error');
                $(this).next().hide();
                $(this).attr({
                    'aria-invalid' : 'false',
                    'aria-describedby' : ''
                });
            }
        });

        //Submit the data OR jump to first error
        if ( isValid == false ) {
            $('.form [aria-invalid="true"]:first', form).focus();
            e.preventDefault();
        } else {
            $(form).hide();
            $(form).next('.thankyou').show();
        }

    });

    /***
     * USE FOR:
     *   - timeline_Oct2021_v1
     */
    (function() {
        let $timelineSlider = $('.timeline-slider');

        $timelineSlider.each(function() {
            $timelineSlider.slick({
                arrows: false,
                dots: false,
                draggable: false,
                infinite: true,
                fade: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.timeline-slider-controls',
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            centerMode: true,
                            slidesToShow: 1,
                            infinite: true,
                        }
                    }
                ]
            });
        });

        let $timelineSliderControls = $('.timeline-slider-controls');

        $timelineSliderControls.each(function() {
            $timelineSliderControls.slick({
                arrows: true,
                dots: false,
                draggable: false,
                fade: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.timeline-slider',
                prevArrow:"<button type='button' class='slick-prev pull-left' aria-label='Previous Timeline Date'></button>",
                nextArrow:"<button type='button' class='slick-next pull-right' aria-label='Next Timeline Date'></button>"
            });
        });

    })();

    /***
     * USE FOR:
     *  -  sound_effects
     */
    (function() {
        $(".btn-sound").on("click", function() {
    		var audio = $(this).next("audio")[0];
    		audio.play();

            $(this).parents('.soundwave').find('.wave-right .wave-motion').removeAttr('style');
            $(this).parents('.soundwave').find('.wave-right .wave-motion').delay(200).animate({
                'left' : '100%'
            }, 800);

            $(this).parents('.soundwave').find('.wave-left .wave-motion').removeAttr('style');
            $(this).parents('.soundwave').find('.wave-left .wave-motion').delay(200).animate({
                'right' : '100%'
            }, 800);
    	});
    })();

    /***
     * USE FOR:
     *  -  switch animation
     */
    (function() {
        $('.button-switch').on('click', function() {
            if( $(this).parents('.button-switch-section').hasClass('active') ) {
                $(this).parents('.button-switch-section').removeClass('active');
                $(this).parents('.light_dark_switch').find('.light-switch-layout').removeClass('hidden');
                $(this).parents('.light_dark_switch').find('.dark-switch-layout').addClass('hidden');
            } else {
                $(this).parents('.button-switch-section').addClass('active');
                $(this).parents('.light_dark_switch').find('.light-switch-layout').addClass('hidden');
                $(this).parents('.light_dark_switch').find('.dark-switch-layout').removeClass('hidden');
            }
        });
    })();

    /***
     * USE FOR:
     *   - carousel_sigle_scroll
     */
    (function() {

        let singleScroll = $('.carousel_single_scroll');
        $(singleScroll).each(function() {

            let singleSlider = $(this).find('.js-single-scroll');
            singleSlider.slick({
                dots: false,
                arrows: false,
                draggable: true,
                speed: 300,
                slidesToShow: 1,
                focusOnSelect: true,
                fade: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            centerMode: true,
                            slidesToShow: 1,
                            infinite: true,
                        }
                    }
                ]
            });

            //Play Button
            let playBtn = $(this).find('.slider-play');
            $(playBtn).on('click', function() {
                $(singleSlider).slick('slickPlay');
            });
            //Pause Button
            let pauseBtn = $(this).find('.slider-pause');
            $(pauseBtn).on('click', function() {
                $(singleSlider).slick('slickPause');
            });
            //Prev and Next Arrows
            $(".prev-slide-arrow").click(function () {
                $(".js-single-scroll").slick("slickPrev");
            });

            $(".next-slide-arrow").click(function () {
                $(".js-single-scroll").slick("slickNext");
            });

            $(".prev-slide-arrow").addClass("slick-disabled");

            $(".js-single-scroll").on("afterChange", function () {
                if ($(".slick-prev").hasClass("slick-disabled")) {
                    $(".prev-slide-arrow").addClass("slick-disabled");
                } else {
                    $(".prev-slide-arrow").removeClass("slick-disabled");
                }
                if ($(".slick-next").hasClass("slick-disabled")) {
                    $(".next-slide-arrow").addClass("slick-disabled");
                } else {
                    $(".next-slide-arrow").removeClass("slick-disabled");
                }
            });
        });
    })();

    /***
     * USE FOR:
     *   - spotlight_slider
     */
    (function() {
        let spotlightSlider = $('.js_spotlight_slider');

        $(spotlightSlider).each(function() {
            $(this).slick({
                autoplay: false,
                dots: true,
                arrows: true,
                draggable: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                infinite: true,
                prevArrow: $(this).parent().next().find('.prev-spotlight-arrow'),
                nextArrow: $(this).parent().next().find('.next-spotlight-arrow'),
                appendDots: $(this).parent('.spotlight-slider-wrapper').next().find('.dots-controls'),
		        dotsClass: 'custom-dots',
		        customPaging: function(slider, i) {
		            var slideNumber = (i + 1),
		                totalSlides = slider.slideCount;
		            return '<button type="button" class="dot" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + ' of ' + totalSlides + ' slides</span></button>';
		        }
            });

            //Update current slide count
            $(this).on('beforeChange', function(event, slick, currentSlide, nextSlide){
                $(this).parent().next().find('.currentSlide').text(nextSlide + 1);
            });

        });

    })();

    /***
     * USE FOR:
     *   - table_compare
     */
    (function() {
        let compareTable = $('.table_compare');

        $(compareTable).each(function() {
            let thisContainer = $(this).find('.cloned-table');
            let clonedTable = $(this).find('.table-compare').clone();

            $(clonedTable).addClass('cloned').appendTo(thisContainer);

        });

    })();


});

// Easy Responsive Tabs Plugin
(function($) {
    $.fn.extend({
        easyResponsiveTabs: function(options) {
            //Set the default values, use comma to separate the settings, example:
            var defaults = {
                type: 'default', //default, vertical, accordion;
                //width: 'auto',
                //fit: true,
                closed: false,
                //activate: function(){}
            }
            //Variables
            var options = $.extend(defaults, options);
            var opt = options,
                jtype = opt.type,
                vtabs = 'vertical',
                accord = 'accordion';

            //Events
            $(this).bind('tabactivate', function(e, currentTab) {
                if (typeof options.activate === 'function') {
                    options.activate.call(currentTab, e)
                }
            });

            //Main function
            this.each(function() {
                //Setup the Tabs
                var $respTabs = $(this);
                var $respTabsList = $respTabs.find('.resp-tabs-list');
                $respTabs.find('.resp-tabs-list button').addClass('resp-tab-item');
                /*
                $respTabs.css({
                    'display': 'block',
                    //'width': jwidth
                });
                */

                //Setup the Tab Content
                $respTabs.find('.resp-tabs-container > div').addClass('resp-tab-content');
                jtab_options();

                //Properties Function
                function jtab_options() {
                    if (jtype == vtabs) {
                        $respTabs.addClass('resp-vtabs');
                    }
                    /*
                    if (jfit == true) {
                        $respTabs.css({ width: '100%', margin: '0px' });
                    }
                    */
                    if (jtype == accord) {
                        $respTabs.addClass('resp-easy-accordion');
                        $respTabs.find('.resp-tabs-list').css('display', 'none');
                    }
                }

                //Assigning the h2 markup to accordion title
                var $tabItemh2;
                $respTabs.find('.resp-tab-content').before("<button type='button' class='resp-accordion' role='tab'></span></button>");

                //Create the Accordion
                var itemCount = 0;
                $respTabs.find('.resp-accordion').each(function() {
                    $tabItemh2 = $(this);
                    var innertext = $respTabs.find('.resp-tab-item:eq(' + itemCount + ')').html();
                    $respTabs.find('.resp-accordion:eq(' + itemCount + ')').append(innertext);
                    $tabItemh2.attr('aria-controls', 'tab_item-' + (itemCount));
                    itemCount++;
                });

                //Assigning the 'aria-controls' to Tab items
                var count = 0,
                    $tabContent;
                $respTabs.find('.resp-tab-item').each(function() {
                    $tabItem = $(this);
                    $tabItem.attr('aria-controls', 'tab_item-' + (count));
                    $tabItem.attr('role', 'tab');

                    //First active tab, keep closed if option = 'closed' or option is 'accordion' and the element is in accordion mode
                    if (options.closed !== true && !(options.closed === 'accordion' && !$respTabsList.is(':visible')) && !(options.closed === 'tabs' && $respTabsList.is(':visible'))) {
                        $respTabs.find('.resp-tab-item').first().addClass('resp-tab-active');
                        $respTabs.find('.resp-accordion').first().addClass('resp-tab-active');
                        $respTabs.find('.resp-tab-content').first().addClass('resp-tab-content-active').attr('style', 'display:block');
                    }

                    //Assigning the 'aria-labelledby' attr to tab-content
                    var tabcount = 0;
                    $respTabs.find('.resp-tab-content').each(function() {
                        $tabContent = $(this);
                        $tabContent.attr('aria-labelledby', 'tab_item-' + (tabcount));
                        tabcount++;
                    });
                    count++;
                });

                //Tab Click action function
                $respTabs.find("[role=tab]").each(function() {
                    var $currentTab = $(this);
                    $currentTab.click(function() {

                        var $tabAria = $currentTab.attr('aria-controls');

                        if ($currentTab.hasClass('resp-accordion') && $currentTab.hasClass('resp-tab-active')) {
                            $respTabs.find('.resp-tab-content-active').slideUp('', function() {
                                $(this).addClass('resp-accordion-closed');
                            });
                            $currentTab.removeClass('resp-tab-active');
                            return false;
                        }
                        if (!$currentTab.hasClass('resp-tab-active') && $currentTab.hasClass('resp-accordion')) {
                            $respTabs.find('.resp-tab-active').removeClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content-active').slideUp().removeClass('resp-tab-content-active resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active');

                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').slideDown().addClass('resp-tab-content-active');
                        } else {
                            $respTabs.find('.resp-tab-active').removeClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content-active').removeAttr('style').removeClass('resp-tab-content-active').removeClass('resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').addClass('resp-tab-content-active').attr('style', 'display:block');
                        }
                        //Trigger tab activation event
                        $currentTab.trigger('tabactivate', $currentTab);
                    });

                    //Window resize function
                    $(window).resize(function() {
                        $respTabs.find('.resp-accordion-closed').removeAttr('style');
                    });
                });
            });
        }
    });
})(jQuery);


//Accessible Tabs to Accordions
(function() {
    'use strict';

    const keyboardSupport = function(container, hasTabs) {
        const tablist = container.querySelectorAll('[role="tablist"]')[0];
        let tabs;
        let panels;

        const generateArrays = function() {
            panels = container.querySelectorAll('[role="tabpanel"]');
            tabs = container.querySelectorAll('[role="tab"]');
        };

        generateArrays();

        // For easy reference
        const keys = {
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            delete: 46,
            enter: 13,
            space: 32
        };

        // Add or subtract depending on key pressed
        const direction = {
            37: -1,
            38: -1,
            39: 1,
            40: 1
        };

        // Deactivate all tabs and tab panels
        const deactivateTabs = function() {
            for (let t = 0; t < tabs.length; t++) {
                tabs[t].setAttribute('tabindex', '-1');
                tabs[t].setAttribute('aria-selected', 'false');
            }
        };

        // Activates any given tab panel
        const activateTab = function(tab, setFocus) {
            setFocus = setFocus || true;
            // Deactivate all other tabs
            deactivateTabs();

            // Remove tabindex attribute
            tab.removeAttribute('tabindex');

            // Set the tab as selected
            tab.setAttribute('aria-selected', 'true');

            // Set focus when required
            if (setFocus) {
                tab.focus();
            }
        };

        const triggerTabClick = function(e) {
            const clickedId = e.target.getAttribute('id');
            if (clickedId) {
                const clickedTab = container.querySelector('[aria-controls="' + clickedId + '"]');
                clickedTab.click();
                document.getElementById(clickedId).scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        };

        const accordionClickEventListener = function(event) {
            triggerTabClick(event);
        };

        // When a tab is clicked, activateTab is fired to activate it
        const clickEventListener = function(event) {
            const tab = event.target;
            activateTab(tab, false);
        };

        // Make a guess
        const focusFirstTab = function() {
            const target = hasTabs ? tabs : panels;
            target[0].focus();
        };

        // Make a guess
        const focusLastTab = function() {
            const target = hasTabs ? tabs : panels;
            target[target.length - 1].focus();
        };

        // Either focus the next, previous, first, or last tab
        // depending on key pressed
        const switchTabOnArrowPress = function(event) {
            const pressed = event.keyCode;

            if (direction[pressed]) {
                const target = event.target;
                const targetElems = hasTabs ? tabs : panels;
                if (target.index !== undefined) {
                    if (targetElems[target.index + direction[pressed]]) {
                        targetElems[target.index + direction[pressed]].focus();
                    } else if (pressed === keys.left || pressed === keys.up) {
                        focusLastTab();
                    } else if (pressed === keys.right || pressed == keys.down) {
                        focusFirstTab();
                    }
                }
            }
        };

        // When a tablist's aria-orientation is set to vertical,
        // only up and down arrow should function.
        // In all other cases only left and right arrow function.
        const determineOrientation = function(event) {
            const key = event.keyCode;
            const vertical = tablist ? tablist.getAttribute('aria-orientation') === 'vertical' : null;
            let proceed = false;

            if (vertical || !hasTabs) {
                if (key === keys.up || key === keys.down) {
                    event.preventDefault();
                    proceed = true;
                }
            } else {
                if (key === keys.left || key === keys.right) {
                    proceed = true;
                }
            }

            if (proceed) {
                switchTabOnArrowPress(event);
            }
        };

        // Handle keydown on tabs
        const keydownEventListener = function(event) {
            const key = event.keyCode;
            switch (key) {
                case keys.end:
                    event.preventDefault();
                    // Activate last tab
                    focusLastTab();
                    break;
                case keys.home:
                    event.preventDefault();
                    // Activate first tab
                    focusFirstTab();
                    break;

                    // Up and down are in keydown
                    // because we need to prevent page scroll >:)
                case keys.up:
                case keys.down:
                    determineOrientation(event);
                    break;
            }
        };

        // Handle keyup on tabs
        const keyupEventListener = function(event) {
            const key = event.keyCode;
            switch (key) {
                case keys.left:
                case keys.right:
                    determineOrientation(event);
                    break;
                case keys.enter:
                case keys.space:
                    if (hasTabs) {
                        activateTab(event.target);
                    } else {
                        triggerTabClick(event);
                    }
                    break;
            }
        };

        const addListeners = function(index) {
            const target = hasTabs ? tabs[index] : panels[index];
            tabs[index].addEventListener('click', clickEventListener);
            if (target) {
                if (!hasTabs) {
                    target.addEventListener('click', accordionClickEventListener);
                }
                target.addEventListener('keydown', keydownEventListener);
                target.addEventListener('keyup', keyupEventListener);
                // Build an array with all tabs (<button>s) in it
                target.index = index;
            }
        };

        // Bind listeners
        for (let i = 0; i < tabs.length; ++i) {
            addListeners(i);
        }

        // Accordion mode
        if (!hasTabs) {
            for (const panel of panels) {
                panel.onclick = function(e) {
                    triggerTabClick(e);
                };
            }
        }
    };

    const toggleClass = function(otherElems, thisELem, className = 'is-active') {
        for (const otherElem of otherElems) {
            otherElem.classList.remove(className);
            otherElem.setAttribute('aria-hidden', 'true');
        }
        thisELem.classList.add(className);
        thisELem.setAttribute('aria-hidden', 'false');
    };

    const toggleVerticalTabs = function(tabContainer, tabs, items, item) {
        item.onclick = function(e) {
            const currId = item.getAttribute('id');
            const tab = tabContainer.querySelector('.ootb-tabcordion--tabs [aria-controls="' + currId + '"]');
            toggleClass(tabs, tab);
            toggleClass(items, item);
        };
    };

    const toggleTabs = function(tabContainer) {
        const tabs = tabContainer.querySelectorAll('.ootb-tabcordion--tabs .tab');
        const items = tabContainer.querySelectorAll('.ootb-tabcordion--entry');
        for (const tab of tabs) {
            tab.onclick = function() {
                const target = tab.getAttribute('aria-controls');
                const content = document.getElementById(target);
                toggleClass(tabs, tab);
                toggleClass(items, content);
            };
        }
        for (const item of items) {
            toggleVerticalTabs(tabContainer, tabs, items, item);
        }
    };

    const hasTabs = function(container) {
        return container.classList.contains('has-tabs');
    };

    const modeSwitcher = function(tabContainer, containerWidth) {
        const tabs = tabContainer.querySelectorAll('.tab');
        const container = tabs[0].closest('.ootb-tabcordion');
        let totalW = 0;
        for (const tab of tabs) {
            totalW += tab.offsetWidth;
        }
        if (totalW >= containerWidth) {
            container.classList.remove('has-tabs');
        } else {
            container.classList.add('has-tabs');
        }
        keyboardSupport(tabContainer, hasTabs(container));
    };

    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            modeSwitcher(entry.target, entry.contentRect.width);
        }
    });

    const tabContainers = document.querySelectorAll('.ootb-tabcordion');
    for (const tabContainer of tabContainers) {
        const tabList = tabContainer.querySelector('.ootb-tabcordion--tabs');
        resizeObserver.observe(tabList);
        toggleTabs(tabContainer);
        keyboardSupport(tabContainer, hasTabs(tabContainer));
    }
})();
