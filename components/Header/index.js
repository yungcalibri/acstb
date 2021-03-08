import { useRouter } from 'next/router'
import Link from 'next/link'
import { PageCenter } from 'components/Center'

const Header = (props) => {
  const { pathname } = useRouter()
  const atRoot = /^\/$/.test(pathname)

  return (
    <header>
      <PageCenter>
        <Link href="/">
          <h1 id="homeLink">
            <code>
              <a>acstb.name</a>
            </code>
          </h1>
        </Link>
        <h2>Andrew Stebenné</h2>
        {/* Should swap out the self-aggrandizement for some breadcrumbs here when the time comes. */}
      </PageCenter>
      <style jsx>{`
        #homeLink {
          ${atRoot ? 'font-size: var(--s3);' : ''}
        }
      `}</style>
    </header>
  )
}

export default Header
