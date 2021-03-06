jQuery(function() {
  var loadMore = function(url, callback) {
    $('.infinite-pagination').html('<div class="cp-spinner cp-round"></div>');
    $.ajax({
      url: url,
      dataType: "script"
    }).done(function() {
      if (typeof callback === 'function') { callback() }
    }).fail(function (jqxhr, settings, exception) {
      $('.infinite-pagination').html('Error!');
      console.log(exception);
    });
  };

  $(document).on('click', '.infinite-pagination a', function(e) {
    e.preventDefault();
    loadMore(e.target.href);
  });

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
      loadMore(more_posts_url, function () {
        will_paginate_infinite_fetching = false;
      });
    }
  });
});
