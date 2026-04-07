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
          title="Osobna sekcja contentowa na historie walk, analizy i newsy"
          description="Blog wzmacnia SEO i pozwala prowadzić narrację wokół zawodników oraz turniejów."
        />
        <div className="blog-preview__grid">
          {blogPosts.slice(0, 3).map((post) => (
            <article className="blog-preview__card" key={post.id}>
              <img src={post.image} alt={post.title} className="blog-preview__image" />
              <div className="blog-preview__body">
                <span className="blog-preview__category">{post.category}</span>
                <h3 className="blog-preview__title">{post.title}</h3>
                <p className="blog-preview__excerpt">{post.excerpt}</p>
                <Link className="blog-preview__link" to="/blog">
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
