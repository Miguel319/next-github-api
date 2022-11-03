import { GitHubRepositoryCard } from "../../components";
import { GitHubRequest } from "../../core/api/requests";

export default async () => {
  const repos = await GitHubRequest.getRepositoriesFromUser("Miguel319");

  return (
    <div className="grid p-3 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {repos?.map((repo) => (
        <GitHubRepositoryCard repository={repo} />
      ))}
    </div>
  );
};
