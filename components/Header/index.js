import Link from "next/link";
import { PageCenter } from "components/Center";

const Header = () => (
  <header>
    <PageCenter>
      <nav>
        <Link href="/">
          <a>
            <code>acstb.name</code>
          </a>
        </Link>
      </nav>
      {/* Should swap out the self-aggrandizement for some breadcrumbs here when the time comes. */}
    </PageCenter>
  </header>
);

export default Header;
