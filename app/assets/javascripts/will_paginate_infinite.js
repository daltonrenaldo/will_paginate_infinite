jQuery(function() {
  $(window).on('scroll', function() {
    if ($('.infinite-pagination').size() <= 0) return;

    var bottom_distance;
    var will_paginate_infinite_fetching = false;
    var more_posts_url = $('.infinite-pagination a.next_page').attr('href');
    var threshold = $('.infinite-pagination').data('trigger-threshold').toString();
    var pixel_value = threshold.match(/(.*)(px)$/);

    if (pixel_value) {
      bottom_distance = pixel_value[1];
    } else {
      bottom_distance = ($(window).height() * threshold) / 100;
    }

    if (more_posts_url && $(window).scrollTop() > $(document).height() - $(window).height() - bottom_distance && !will_paginate_infinite_fetching) {
      will_paginate_infinite_fetching = true;
      $('.infinite-pagination').html('<div class="cp-spinner cp-round"></div>');
      
      $.getScript(more_posts_url).done(function () {
        will_paginate_infinite_fetching = false;
      }).fail(function (jqxhr, settings, exception) {
        console.log(exception);
      });
    }
  });
});
