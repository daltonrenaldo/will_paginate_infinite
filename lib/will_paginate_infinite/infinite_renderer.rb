module WillPaginateInfinite
  # Contains functionality shared by all renderer classes.
  module InfiniteRenderer
    def pagination
      items = []
      items.push :next_page
    end

    def to_html
      @options[:class] = 'infinite-pagination'
      @options[:next_label] = @options[:label] || 'load more' 
      super
    end
  end
end
