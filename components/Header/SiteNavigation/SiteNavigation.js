import Link from "next/link";

import SubMenu from "./SubMenu";

import { menus } from "./menus";

export default function SiteNavigation() {
  return (
    <ul className="flex space-x-8">
      {menus.map((menu) => {
        return (
          <li key={menu.id}>
            {!!menu.children ? (
              <SubMenu {...menu} />
            ) : (
              <Link href={menu.href} passHref>
                <a className="font-medium">{menu.title}</a>
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
