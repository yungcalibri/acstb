import Link from "next/link";
import { PageCenter } from "components/Center";
import Icon from "components/Icon";

const Header = () => (
  <header>
    <PageCenter>
      <nav id="root-nav">
        <Link href="/">
          <a id="home-link">
            <Icon iconId="home" head lower>
              acstb.name
            </Icon>
          </a>
        </Link>
      </nav>
      {/* Should swap out the self-aggrandizement for some breadcrumbs here when the time comes. */}
    </PageCenter>
  </header>
);

export default Header;
