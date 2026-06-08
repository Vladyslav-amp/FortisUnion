import { useNavigate, useParams } from 'react-router-dom';
import { blogPosts } from '../data/siteData';
import '../components/BlogList/BlogList.scss';

function BlogDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find((post) => post.id === Number(id));

  if (!post) {
    return (
      <section className="blog-list">
        <div className="container">
          <h1>Wpis nie istnieje</h1>

          <button type="button" onClick={() => navigate('/blog')}>
            Wróć do bloga
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-list">
      <div className="container">
        <article className="blog-list__card">
          <img
            src={post.image}
            alt={post.title}
            className="blog-list__image"
          />

          <div className="blog-list__content">
            <div className="blog-list__meta">
              <span>{post.category}</span>
              <span>{post.date}</span>
            </div>

            <h1 className="blog-list__title">
              {post.title}
            </h1>

            <p className="blog-list__excerpt">
              {post.excerpt}
            </p>

            <p className="blog-list__excerpt">
              {post.content || post.longText || post.description || post.excerpt}
            </p>

            <button
              type="button"
              onClick={() => navigate('/blog')}
              style={{ marginTop: '32px' }}
            >
              Wróć do bloga
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default BlogDetailsPage;