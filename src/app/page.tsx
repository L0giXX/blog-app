type Repo = {
  id: string;
  name: string;
  description: string | undefined;
  html_url: string;
  language: string;
  color: string;
  stargazers_count: number;
  forks_count: number;
};

async function getRepos() {
  try {
    const res = await fetch("https://api.github.com/user/repos", {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
      cache: "no-cache",
    });
    const json = await res.json();
    return json as Repo[];
  } catch {
    throw new Error("Failed to fetch repos");
  }
}

async function getColors() {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
    );
    const json = await res.json();
    return json as Record<string, { color: string }>;
  } catch {
    throw new Error("Failed to fetch colors");
  }
}

async function Home() {
  const repos = await getRepos();
  const colors = await getColors();
  const filteredRepos = repos?.filter(
    (repo) =>
      repo.name !== "L0giXX" &&
      repo.name !== "SchuleTest" &&
      repo.name !== "todo-list" &&
      repo.name !== "svt-analytics" &&
      repo.name !== "smashpoint-tennis"
  );
  filteredRepos.forEach((repo) => {
    repo.color = colors[repo.language]?.color ?? "gray";
  });

  return (
    <div className="mx-auto max-w-[640px] px-4">
      <div className="flex flex-col">
        {filteredRepos.map((repo) => (
          <div key={repo.id} className="mb-8">
            <a
              href={repo.html_url}
              className="block rounded-lg border border-gray-200 bg-white p-6 shadow duration-200 hover:bg-gray-200"
            >
              <h5 className="mb-2 text-2xl font-bold text-gray-900">
                {repo.name}
              </h5>
              <p className="mb-2 font-normal text-gray-700">
                {repo.description ?? ""}
              </p>
              <div className="flex flex-row">
                <div className="flex items-center">
                  <div
                    style={{ backgroundColor: repo.color }}
                    className="h-5 w-5 rounded-full"
                  ></div>
                  <h5 className="ml-1 text-gray-900">{repo.language}</h5>
                  {repo.stargazers_count > 0 && (
                    <div className="ml-4 flex h-5 items-center gap-1 ">
                      <svg height="16" viewBox="0 0 16 16" width="16">
                        <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                      </svg>
                      <h5 className="text-gray-900">{repo.stargazers_count}</h5>
                    </div>
                  )}
                  {repo.forks_count > 0 && (
                    <div className="ml-4 flex h-5 items-center gap-1 ">
                      <svg height="16" viewBox="0 0 16 16" width="16">
                        <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                      </svg>
                      <h5 className="text-gray-900">{repo.forks_count}</h5>
                    </div>
                  )}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
