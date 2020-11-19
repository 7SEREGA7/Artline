$(document).ready(function() {

	///>>> SCROLL <<<///
	$(window).scroll(function(){
		let wScroll = $(this).scrollTop();
		if (wScroll > 20) {
			$('.header').addClass('active');
			$('.color').addClass('change-color');
			$('.languages-block__language').addClass('change-border-color');
			$('.main-img').addClass('hide');
      $('.scroll-img').addClass('show');
		}
		else {
			$('.header').removeClass('active');
			$('.color').removeClass('change-color');
      $('.languages-block__language').removeClass('change-border-color');
			$('.main-img').removeClass('hide');
			$('.scroll-img').removeClass('show');
		};
	});
	///>>> SCROLL <<<///

  ///>>> ANCHOR <<<///
  $(".anchor[href*=#]").on("click", function(e){
    let anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 700);
    e.preventDefault();
    return false;
  });
  ///>>> ANCHOR <<<///

  /// >>> MENU <<< ///

  let open = document.querySelector(".menu-open");
  let scrollOpen = document.querySelector(".menu-open-scroll");
  let close = document.querySelector(".menu-close");

  open.onclick = function() {
    document.getElementById("sideNav").style.width = "260px";
    open.style.display = 'none';
  }

  scrollOpen.onclick = function() {
    document.getElementById("sideNav").style.width = "260px";
    scrollOpen.style.display = 'none';
  }
  
  close.onclick = function() {
    document.getElementById("sideNav").style.width = "0";
    open.style.display = 'block';
  }

  /// >>> MENU <<< ///

  ////>>> SLIDER <<<///
  $('.slider-for').slick({
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    appendDots: $('.appendDots'),
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '30px'
      // swipeToSlide: false,
  });

  $(".slider-for").on("afterChange", function(event, slick, currentSlide, nextSlide){
    if (currentSlide === 1) {
      $(".countSlides-2").text(`0${currentSlide + 1}`);
    }
    else if (currentSlide === 2) {
      $(".countSlides-3").text(`0${currentSlide + 1}`);
    }
    else {
      $(".countSlides").text(`0${currentSlide + 1}`);
    }
  });
////>>> SLIDER <<<///

	///>>> TABS <<<///
	var $tabs = function (target) {
      var
        _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
        _eventTabsShow,
        _showTab = function (tabsLinkTarget) {
          var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
          tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
          tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
          tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
          if (tabsLinkTarget === tabsLinkActive) {
            return;
          }
          if (tabsLinkActive !== null) {
            tabsLinkActive.classList.remove('tabs__link_active');
          }
          if (tabsPaneShow !== null) {
            tabsPaneShow.classList.remove('tabs__pane_show');
          }
          tabsLinkTarget.classList.add('tabs__link_active');
          tabsPaneTarget.classList.add('tabs__pane_show');
          document.dispatchEvent(_eventTabsShow);
        },
        _switchTabTo = function (tabsLinkIndex) {
          var tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
          if (tabsLinks.length > 0) {
            if (tabsLinkIndex > tabsLinks.length) {
              tabsLinkIndex = tabsLinks.length;
            } else if (tabsLinkIndex < 1) {
              tabsLinkIndex = 1;
            }
            _showTab(tabsLinks[tabsLinkIndex - 1]);
          }
        };

      _eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

      _elemTabs.addEventListener('click', function (e) {
        var tabsLinkTarget = e.target;
        if (!tabsLinkTarget.classList.contains('tabs__link')) {
          return;
        }
        e.preventDefault();
        _showTab(tabsLinkTarget);
      });

      return {
        showTab: function (target) {
          _showTab(target);
        },
        switchTabTo: function (index) {
          _switchTabTo(index);
        }
      }

    };
  $tabs('.tabs');
///>>> TABS <<<///

///>>> FORM CLOSE <<<///
    const closeBtn = document.getElementById('close-btn');
    let container = document.getElementById('contacts__container');
    let openFormBtn = document.getElementById('open-form-btn');
      
    closeBtn.onclick = function() {
      container.classList.remove('created');
      container.classList.remove('showed');
      container.classList.add('hidden');
      setTimeout(function() {
        container.classList.add('deleted');
        openFormBtn.classList.add('created');
      }, 400);
    }

    openFormBtn.onclick = function() {
      openFormBtn.classList.remove('created');
      openFormBtn.classList.add('deleted');
      container.classList.add('created');
      container.classList.add('showed');
    }

///>>> FORM CLOSE <<<///

});