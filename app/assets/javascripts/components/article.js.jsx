this.Article = React.createClass({
  render: function() {
    return(
      <div class="article_header">
      <h1><a href = {'/blog/articles/'+ this.props.article.id }>{this.props.article.title}</a></h1>
      <h2>{this.props.article.sub_title}</h2>
      <div class="author_name"><span>by</span> James </div>
      </div>
      );
  }
});
