import Link from 'next/link'
import { PageCenter } from 'components/Center'

const Header = () => (
  <header>
    <PageCenter>
      <h1>
        <Link href="/">
          <code>
            <a>acstb.name</a>
          </code>
        </Link>
      </h1>
      {/* Should swap out the self-aggrandizement for some breadcrumbs here when the time comes. */}
    </PageCenter>
  </header>
)

export default Header
