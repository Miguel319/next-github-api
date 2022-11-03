import { GitHubCommitCard } from "../../components";
import { GitHubRequest } from "../../core/api/requests";

export default async () => {
  const commits = await GitHubRequest.getCommitsFromRepository(
    "Miguel319",
    "github-api"
  );

  return (
    <div className="grid p-3 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {commits?.map((commit) => (
        <GitHubCommitCard key={commit.nodeId} commit={commit} />
      ))}
    </div>
  );
};
