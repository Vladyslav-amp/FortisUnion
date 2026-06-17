import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../../data/siteData';
import './BlogList.scss';

function BlogList() {
  const navigate = useNavigate();

  return (
    <section className="blog-list">
      <div className="container blog-list__grid">
        {blogPosts.map((post) => (
          <article
            className="blog-list__card"
            key={post.id}
            onClick={() => navigate(`/blog/${post.id}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                navigate(`/blog/${post.id}`);
              }
            }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="blog-list__image"
            />

            <div className="blog-list__content">
              <div className="blog-list__meta">
                <span className="blog-list__meta-item">{post.category}</span>
                <span className="blog-list__meta-item">{post.date}</span>
              </div>

              <h2 className="blog-list__title">
                {post.title}
              </h2>

              <p className="blog-list__excerpt">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BlogList;
