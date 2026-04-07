import PageHero from '../components/PageHero/PageHero';
import BlogList from '../components/BlogList/BlogList';
import Newsletter from '../components/Newsletter/Newsletter';

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Artykuły, relacje, zapowiedzi i opowieści o drodze zawodników"
        description="Content jest przygotowany pod SEO, social proof i budowanie napięcia przed wydarzeniami."
      />
      <BlogList />
      <Newsletter />
    </>
  );
}

export default BlogPage;
