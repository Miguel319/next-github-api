import { GitHubRequest } from "../../core/api/requests";

export default async () => {
  const branches = await GitHubRequest.getBranchesFromRepository(
    "Miguel319",
    "github-api"
  );

  return (
    <div>
      <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Name</div>
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Protected</div>
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Commit Pointer
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {branches.map((branch) => (
              <tr>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {branch.name}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <strong className="rounded bg-red-100 px-3 py-1.5 text-xs font-medium ">
                    <span
                      className={`${
                        branch.protected ? "text-green-700" : "text-red-700"
                      }`}
                    >
                      {branch.protected ? "Yes" : "No"}
                    </span>
                  </strong>
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {branch.commit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
