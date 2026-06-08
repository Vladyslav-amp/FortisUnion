import PageHero from '../components/PageHero';
import BlogList from '../components/BlogList';
import Contact from '../components/Contact/Contact';

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Artykuły, relacje, zapowiedzi i opowieści o drodze zawodników"
        description="Content jest przygotowany pod SEO, social proof i budowanie napięcia przed wydarzeniami."
      />
      <BlogList />
      <Contact />
    </>
  );
}

export default BlogPage;
