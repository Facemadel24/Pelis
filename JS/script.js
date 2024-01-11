var GBL = {
  SPEED_FADE : 500,
  SPEED_MOVE : 750,
  SPEED_SCROLL : 1000,
  SPEED_SLIDE : 350
};


var CAROUSEL = {
 
    actualItem : 1,
    container : null,
    hovered : false,
    items : null,
    itemWidth : 0,
    itemsNumber : 0,
    itemMargin : 0,
    moving : false,
    next : null,
    time : 1000,
    timeout : null,
    visibles : 0,
 
    init : function() {
        CAROUSEL.container = $('.carousel ul');
        CAROUSEL.items = CAROUSEL.container.find('li');
        CAROUSEL.itemsNumber = CAROUSEL.items.length;
        CAROUSEL.itemWidth = CAROUSEL.items.outerWidth();
        CAROUSEL.itemMargin = parseInt(CAROUSEL.items.last().css('margin-left'));
        CAROUSEL.container.css('width', (CAROUSEL.itemsNumber*(CAROUSEL.itemWidth + CAROUSEL.itemMargin)));
        CAROUSEL.visibles = Math.floor(CAROUSEL.container.parent().width()/CAROUSEL.itemWidth);
        CAROUSEL.next = $('.carousel .next button');
        CAROUSEL.limits();
        $('.carousel ol button').on('click', function() {
          CAROUSEL.move($(this).val());
        });
        $('.carousel').on('mouseover', function() {
            CAROUSEL.hovered = true;
            CAROUSEL.stop();
        });
        $('.carousel').on('mouseout', function() {
            CAROUSEL.hovered = false;
            CAROUSEL.automate();
        });
        CAROUSEL.automate();
    },
 
    automate : function() {
        CAROUSEL.timeout = setTimeout(CAROUSEL.trigger, CAROUSEL.time);
    },
 
    stop : function() {
        clearTimeout(CAROUSEL.timeout);
    },
 
    trigger : function() {
        CAROUSEL.next.trigger('click');
    },
 
    limits : function() {
        if (CAROUSEL.actualItem === 1) {
            var cloned = CAROUSEL.container.find('li:last').clone();
            CAROUSEL.container.prepend(cloned);
            CAROUSEL.container.find('li:last').remove();
            CAROUSEL.container.animate({ left: '-=' + (CAROUSEL.itemWidth + CAROUSEL.itemMargin) }, 0);
            CAROUSEL.actualItem++;
        } else if (CAROUSEL.actualItem === (CAROUSEL.itemsNumber - CAROUSEL.visibles + 1)) {
            var cloned = CAROUSEL.container.find('li:first').clone();
            CAROUSEL.container.append(cloned);
            CAROUSEL.container.find('li:first').remove();
            CAROUSEL.container.animate({ left: '+=' + (CAROUSEL.itemWidth + CAROUSEL.itemMargin) }, 0);
            CAROUSEL.actualItem--;
        }
    },
 
    move : function(value) {
        if (!CAROUSEL.moving) {
            CAROUSEL.stop();
            CAROUSEL.moving = true;
            if (value === 'prev') {
                CAROUSEL.actualItem--;
                CAROUSEL.container.animate({ left: '+=' + (CAROUSEL.itemWidth + CAROUSEL.itemMargin) }, GBL.SPEED_MOVE, 'easeOutSine', function() {
                    CAROUSEL.moved();
                });
            } else {
                CAROUSEL.actualItem++;
                CAROUSEL.container.animate({ left: '-=' + (CAROUSEL.itemWidth + CAROUSEL.itemMargin) }, GBL.SPEED_MOVE, 'easeOutSine', function() {
                    CAROUSEL.moved();
                });
            }
        }
    },
 
    moved : function() {
        CAROUSEL.limits();
        CAROUSEL.moving = false;
        if (!CAROUSEL.hovered) {
            CAROUSEL.automate();
        }
    }
 
};

CAROUSEL.init();