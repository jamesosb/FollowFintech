this.Article = React.createClass({
  render: function() {
    return(

      <div class= {'article' + this.props.article.id }>

      <div class="hero_image">
      <a href = {'/blog/articles/'+ this.props.article.id }>
      <img src = {this.props.article.short_hero_image} alt={this.props.article.title} />
      </a>
      </div>

      <div class="article_header">
      <h1><a href = {'/blog/articles/'+ this.props.article.id }>{this.props.article.title}</a></h1>
      <h2>{this.props.article.sub_title}</h2>
      <div class="author_name"><span>by</span> James </div>
      </div>

      <div class="article_teaser">
      <p>{this.props.article.teaser}</p>
      <div class="more-link">
      <h2>{this.props.article.sub_title}</h2>
      <a href = {'/blog/articles/'+ this.props.article.id }>Read full article</a>
      </div>
      </div>
      
      </div>
    );
  }
});
