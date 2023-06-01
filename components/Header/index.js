import Link from "next/link";
import { PageCenter } from "components/Center";
import Cluster from "components/Cluster";
import Icon from "components/Icon";

const Header = () => (
  <header>
    <PageCenter>
      <nav id="root-nav">
        <Cluster role="list">
          {/** @todo fix duplicated role=listitem here, conflict with Cluster validation */}
          <Link href="/" role="listitem" id="home-link">

            <Icon iconId="home" head>
              acstb
            </Icon>

          </Link>
          <Link href="/resume" role="listitem">
            Resume
          </Link>
        </Cluster>
      </nav>
      {/* Should swap out the self-aggrandizement for some breadcrumbs here when the time comes. */}
    </PageCenter>
  </header>
);

export default Header;
