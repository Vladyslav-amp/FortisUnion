import { Link } from 'react-router-dom';
import SectionHeading from '../Layout/SectionHeading/SectionHeading';
import { blogPosts } from '../../data/siteData';
import './BlogPreview.scss';

function BlogPreview() {
  return (
    <section className="blog-preview">
      <div className="container">
        <SectionHeading
          eyebrow="Blog"
          title="Historie zawodników, analizy walk i kulisy sukcesu"
          description="Poznaj zawodników bliżej. Analizy, wywiady, relacje z wydarzeń oraz historie budujące ich markę sportową."
        />

        <div className="blog-preview__grid">
          {blogPosts.slice(0, 3).map((post) => (
            <article className="blog-preview__card" key={post.id}>
              <img
                src={post.image}
                alt={post.title}
                className="blog-preview__image"
              />

              <div className="blog-preview__body">
                <span className="blog-preview__category">
                  {post.category}
                </span>

                <h3 className="blog-preview__title">
                  {post.title}
                </h3>

                <p className="blog-preview__excerpt">
                  {post.excerpt}
                </p>

                <Link
                  className="blog-preview__link"
                  to={`/blog/${post.id}`}
                >
                  Czytaj więcej
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPreview;