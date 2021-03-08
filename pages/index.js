import Link from 'next/link'
import Stack from 'components/Stack'
import Box from 'components/Box'
import Cluster from 'components/Cluster'
import Avatar from 'components/Avatar'

const Home = () => (
  <article id="home">
    <Cluster space="var(--s2)">
      <section>
        <h1>I'm Andrew Stebenné.</h1>
        <p>
          I'm a programmer by trade. Most of my work has been building Web
          frontends, but I take pleasure in solving interesting problems of any
          type.
        </p>
        <p>You can get in touch with me here:</p>
        <Box>
          <Stack space="var(--s0)">
            <Box borderWidth="var(--s-3)">GitHub</Box>
            <Box borderWidth="var(--s-3)">Email</Box>
          </Stack>
        </Box>
      </section>
      <Avatar />
    </Cluster>

    <div style={{ height: '50vh' }} />
    <Cluster>
      <Box>Alpha</Box>
      <Box>Bravo</Box>
      <Box>Charlie</Box>
      <Box>Delta</Box>
      <Box>Echo</Box>
      <Box>Foxtrot</Box>
    </Cluster>

    <Stack space="var(--s0)" asList>
      <p>1</p>
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <div>
        <p>5</p>
        <p>8</p>
        <p>13</p>
      </div>
    </Stack>

    <Box borderWidth="var(--s-2)">
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi.
      </p>
    </Box>

    <main>
      <h1>Available Here</h1>
      <h2>Blog Posts</h2>
      <h2>Projects</h2>
      <h2>Contact Me</h2>
      <h2>
        <Link href="/every-layout">
          <a>Every Layout</a>
        </Link>
      </h2>
      <h2>
        <Link href="/colors">
          <a>Colors</a>
        </Link>
      </h2>
      <p>
        Ihr naht euch wieder, schwankende Gestalten! Die früh sich einst dem
        trüben Blick gezeigt. Versuch’ ich wohl euch diesmal fest zu halten?
        Fühl’ ich mein Herz noch jenem Wahn geneigt? Ihr drängt euch zu! nun
        gut, so mögt ihr walten.{' '}
        <Link href="/colors">
          <a>Wie ihr aus Dunst und Nebel um mich steigt.</a>
        </Link>{' '}
        Mein Busen fühlt sich jugendlich erschüttert. Vom Zauberhauch der euren
        Zug umwittert. Ihr bringt mit euch die Bilder froher Tage. Und manche
        liebe Schatten steigen auf Gleich einer alten, halbverklungnen Sage.
        Kommt erste Lieb’ und Freundschaft mit herauf Der Schmerz wird neu, es
        wiederholt die Klage. Des Lebens labyrinthisch irren Lauf, Und nennt die
        Guten, die, um schöne Stunden Vom Glück getäuscht, vor mir
        hinweggeschwunden. Ihr naht euch wieder, schwankende Gestalten! Die früh
        sich einst dem trüben Blick gezeigt. Versuch’ ich wohl euch diesmal fest
        zu halten? Fühl’ ich mein Herz noch jenem Wahn geneigt? Ihr drängt euch
        zu! nun gut, so mögt ihr walten. Wie ihr aus Dunst und Nebel um mich
        steigt. Mein Busen fühlt sich jugendlich erschüttert. Vom Zauberhauch
        der euren Zug umwittert. Ihr bringt mit euch die Bilder froher Tage. Und
        manche liebe Schatten steigen auf Gleich einer alten, halbverklungnen
        Sage. Kommt erste Lieb’ und Freundschaft mit herauf Der Schmerz wird
        neu, es wiederholt die Klage. Des Lebens labyrinthisch irren Lauf, Und
        nennt die Guten, die, um schöne Stunden Vom Glück getäuscht, vor mir
        hinweggeschwunden
      </p>
    </main>
  </article>
)

export default Home
