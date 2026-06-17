import PageHero from '../components/PageHero/PageHero';
import BlogList from '../components/BlogList/BlogList';
import Contact from '../components/Contact/Contact';

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Aktualności ze świata Fortis Union"
        description="Relacje z wydarzeń, sukcesy zawodników, zapowiedzi walk oraz najważniejsze informacje z życia naszego zespołu."
      />
      <BlogList />
      <Contact />
    </>
  );
}

export default BlogPage;
