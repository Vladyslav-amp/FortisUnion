import { blogPosts } from '../../data/siteData';
import './BlogList.scss';

function BlogList() {
  return (
    <section className="blog-list">
      <div className="container blog-list__grid">
        {blogPosts.map((post) => (
          <article className="blog-list__card" key={post.id}>
            <img src={post.image} alt={post.title} className="blog-list__image" />
            <div className="blog-list__content">
              <div className="blog-list__meta">
                <span>{post.category}</span>
                <span>{post.date}</span>
              </div>
              <h2 className="blog-list__title">{post.title}</h2>
              <p className="blog-list__excerpt">{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BlogList;
