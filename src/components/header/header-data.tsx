import Link from "next/link";
import { usePathname } from "next/navigation";
import { GitHubUser } from "../../core/interfaces/models";

interface HeaderDataProps {
  userData?: GitHubUser;
}

export const HeaderData = ({ userData }: HeaderDataProps) => {
  const pathname = usePathname();

  return (
    <div className="flex-col flex lg:flex-row items-start lg:items-center">
      <div className="flex items-center">
        <img
          className="border-2 shadow border-gray-600 h-16 rounded-full mr-3"
          src={userData?.avatar}
          alt="logo"
        />
        <div>
          <h5 className="text-sm text-white leading-4 mb-1">
            <span>
              {userData?.name} - {userData?.username}
            </span>
          </h5>
          <p className="text-xs text-gray-400 leading-4">
            {userData?.location}
          </p>
        </div>
      </div>
      <div className="ml-0 lg:ml-20 my-6 lg:my-0">
        <h4 className="text-2xl font-bold leading-tight text-white mb-2">
          {pathname === "/repositories" &&
            `Repositories from ${userData?.name}`}
          {pathname === "/commits" && "Commits from github-api"}
          {pathname === "/branches" && "Branches from github-api"}
        </h4>
        <p className="flex items-center text-gray-300 text-xs">
          <span>
            <Link href="/">Home</Link>
          </span>
          {pathname.includes("/") ? <span className="mx-2">&gt;</span> : null}
          <span>
            {pathname === "/repositories" && (
              <Link href="/repositories">Repositories</Link>
            )}

            {pathname === "/branches" && <Link href="/branches">Branches</Link>}

            {pathname === "/commits" && <Link href="commits">Commits</Link>}
          </span>
        </p>
      </div>
    </div>
  );
};
