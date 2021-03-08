import { useRouter } from 'next/router'
import Link from 'next/link'
import { PageCenter } from 'components/Center'

const Header = (props) => {
  const { pathname } = useRouter()
  const atRoot = /^\/$/.test(pathname)

  return (
    <header>
      <PageCenter className="text-align:center">
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
}

export default Header
