import Link from "next/link";

import Container from "components/Container";
import Logo from "components/Logo";

import { Wrapper } from "./Header.styled";
import ButtonLink from "components/ButtonLink";

export default function Header() {
  return (
    <Wrapper className="sticky top-0 z-40 -mx-6 px-6 h-16 md:h-20  flex items-center bg-secondary-50 bg-opacity-90">
      <Container>
        <div className="flex items-center">
          <Link href="/" passHref>
            <a>
              <Logo />
            </a>
          </Link>
          <nav className="flex flex-grow items-center pl-8">
            <ul className="flex space-x-8">
              <li>Treningi 1 na 1</li>
              <li>Kursy</li>
              <li>Resources</li>
              <li>Kontakt</li>
            </ul>
            <div className="ml-auto">
              <ButtonLink href="/">Take the test</ButtonLink>
            </div>
          </nav>
        </div>
      </Container>
    </Wrapper>
  );
}
