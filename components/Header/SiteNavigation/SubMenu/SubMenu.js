import { useState } from "react";
import Link from "next/link";
import classNames from "classnames";

function Menu({ children, isSecondary }) {
  const commonClassNames = "grid gap-4 p-4";
  const backgroundColorClassNames = isSecondary ? "bg-primary-50" : null;

  const menuClassNames = classNames(
    commonClassNames,
    backgroundColorClassNames
  );

  return <div className={menuClassNames}>{children}</div>;
}

function MenuItem({ emoji, title, description, href }) {
  return (
    <Link href={href} passHref>
      <a className="block">
        <p className="text-sm font-medium">
          {emoji && (
            <span className="pr-1" aria-hidden>
              {emoji}
            </span>
          )}
          {title}
        </p>
        <p className="text-xs opacity-75">{description}</p>
      </a>
    </Link>
  );
}

export default function SubMenu({ title, children }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = ({ title, children }) => {
    setIsActive(!isActive);
  };

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  const subMenuClass = isActive ? "block" : "hidden";

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={handleClick}
        aria-pressed={isActive}
        className="font-medium"
      >
        {title}
      </button>
      <div className={subMenuClass}>
        <div className="absolute bg-white shadow-2xl rounded-xl w-72 overflow-hidden">
          {children?.primary && (
            <Menu>
              {children.primary.map((child) => (
                <MenuItem key={child.id} {...child} />
              ))}
            </Menu>
          )}
          {children?.secondary && (
            <Menu isSecondary>
              {children.secondary.map((child) => (
                <MenuItem key={child.id} {...child} />
              ))}
            </Menu>
          )}
        </div>
      </div>
    </div>
  );
}
