import Link from 'next/link'

const Home = () => (
  <article id="home">
    <header>
      <div data-role="title">
        <h1>arth.li</h1>
      </div>
      <div>
        <h2>A Website by Andrew Stebenné</h2>
      </div>
    </header>

    <main>
      <h1>Available Here</h1>
      <h2>Blog Posts</h2>
      <h2>Projects</h2>
      <h2>Contact Me</h2>
      <Link href="/every-layout">
        <h2>
          <a>Every Layout</a>
        </h2>
      </Link>
    </main>
  </article>
)

export default Home
