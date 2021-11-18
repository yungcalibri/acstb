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
          <Link href="/" role="listitem">
            <a id="home-link" role="listitem">
              <Icon iconId="home" head>
                acstb.name
              </Icon>
            </a>
          </Link>
          <Link href="/resume" role="listitem">
            <a role="listitem">Resume</a>
          </Link>
        </Cluster>
      </nav>
      {/* Should swap out the self-aggrandizement for some breadcrumbs here when the time comes. */}
    </PageCenter>
  </header>
);

export default Header;
