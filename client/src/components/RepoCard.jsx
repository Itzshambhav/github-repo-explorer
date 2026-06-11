function RepoCard({ repo }) {

  return (

    <div
      style={{
        backgroundColor: "#161b22",
        padding: "20px",
        borderRadius: "15px",
        border: "1px solid #30363d"
      }}
    >

      <h3>{repo.name}</h3>

      <p>
        {repo.description || "No description available"}
      </p>

      <p>
        ⭐ Stars: {repo.stargazers_count}
      </p>
      <p
        style={{
        color: "#8b949e",
        marginTop: "10px",
         fontSize: "14px"
        }}
    >
          Updated:
         {" "}
       {new Date(repo.updated_at).toLocaleDateString()}
         </p>

      <p>
        🍴 Forks: {repo.forks_count}
      </p>

      <p>
        🖥 Language: {repo.language || "Not specified"}
      </p>

      <a
        href={repo.html_url}
        target="_blank"
        style={{
          color: "#58a6ff",
          textDecoration: "none"
        }}
      >
        Open Repository
      </a>

    </div>

  );
}

export default RepoCard;