this.article_collection = React.createClass({
  getInitialState: function() {
    return {
      articles: this.props.data
    };
  },
  getDefaultProps: function() {
    return {
      articles: []
    };
  },
  render: function() {

    var article;
    return React.DOM.div({
      className: 'articles'
    }, React.DOM.tbody(null, (function() {
      var i, len, ref, results;
      ref = this.state.articles;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        article = ref[i];
        results.push(React.createElement(Article, {
          key: article.id,
          article: article
        }));
      }
      return results;
    }).call(this)));
  }
});
