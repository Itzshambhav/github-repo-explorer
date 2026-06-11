import { useState } from "react";
import axios from "axios";
import RepoCard from "./components/RepoCard";

function App() {

  const [username, setUsername] = useState("");

  const [user, setUser] = useState(null);

  const [repos, setRepos] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [sortType, setSortType] = useState("stars");

  const fetchGitHubUser = async () => {

    if (!username) return;

    setLoading(true);

    setError("");

    setUser(null);

    setRepos([]);

    try {

      const response = await axios.get(
        `http://localhost:5000/api/github/${username}`
      );

      setUser(response.data.user);

      const sortedRepos = response.data.repos.sort(
        (a, b) => b.stargazers_count - a.stargazers_count
      );

      setRepos(sortedRepos);

    } catch (error) {

      if (error.response?.status === 404) {

        setError("❌ Invalid GitHub Username");

      } else {

        setError("⚠️ Something went wrong");

      }

    } finally {

      setLoading(false);

    }
  };

  const handleSort = (type) => {

    setSortType(type);

    const sorted = [...repos];

    if (type === "stars") {

      sorted.sort(
        (a, b) => b.stargazers_count - a.stargazers_count
      );

    } else if (type === "updated") {

      sorted.sort(
        (a, b) =>
          new Date(b.updated_at) -
          new Date(a.updated_at)
      );

    } else {

      sorted.sort(
        (a, b) => a.name.localeCompare(b.name)
      );

    }

    setRepos(sorted);
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0d1117",
        color: "white",
        padding: "30px",
        fontFamily: "Arial"
      }}
    >

      {/* HERO SECTION */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "50px"
        }}
      >

        <h1
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            marginBottom: "10px",
            lineHeight: "1.1"
          }}
        >

          <span style={{ color: "#39d353" }}>
            GitHub
          </span>{" "}

          <span style={{ color: "white" }}>
            Repo Explorer
          </span>

        </h1>

        <p
          style={{
            color: "#8b949e",
            fontSize: "24px",
            marginTop: "10px"
          }}
        >
          Search any GitHub user and explore repositories
        </p>

        <p
          style={{
            color: "#58a6ff",
            fontSize: "18px",
            marginTop: "8px"
          }}
        >
          Developed by Shambhav Kumar 🚀
        </p>

      </div>

      {/* SEARCH BAR */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "40px",
          flexWrap: "wrap"
        }}
      >

        <input
          type="text"
          placeholder="Enter GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetchGitHubUser();
            }
          }}
          style={{
            padding: "16px",
            width: "360px",
            borderRadius: "14px",
            border: "1px solid #30363d",
            fontSize: "18px",
            backgroundColor: "#161b22",
            color: "white"
          }}
        />

        <button
          onClick={fetchGitHubUser}
          style={{
            padding: "16px 28px",
            borderRadius: "14px",
            border: "none",
            backgroundColor: "#238636",
            color: "white",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "bold"
          }}
        >
          🔍 Search
        </button>

        <select
          value={sortType}
          onChange={(e) => handleSort(e.target.value)}
          style={{
            padding: "16px",
            borderRadius: "14px",
            border: "1px solid #30363d",
            fontSize: "18px",
            backgroundColor: "#161b22",
            color: "white"
          }}
        >

          <option value="stars">
            Sort by Stars
          </option>

          <option value="name">
            Sort by Name
          </option>

          <option value="updated">
            Sort by Updated
          </option>

        </select>

      </div>

      {/* ERROR */}

      {error && (

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px"
          }}
        >

          <div
            style={{
              backgroundColor: "#2d1117",
              color: "#ff7b72",
              padding: "15px 25px",
              borderRadius: "12px",
              border: "1px solid #f85149",
              fontSize: "18px",
              fontWeight: "bold"
            }}
          >
            {error}
          </div>

        </div>

      )}

      {/* LOADING */}

      {loading && (

        <h2
          style={{
            textAlign: "center",
            marginTop: "40px"
          }}
        >
          Loading...
        </h2>

      )}

      {/* USER PROFILE */}

      {user && (

        <div
          style={{
            textAlign: "center",
            marginTop: "40px"
          }}
        >

          <img
            src={user.avatar_url}
            alt="avatar"
            width="170"
            style={{
              borderRadius: "50%",
              border: "5px solid white",
              boxShadow: "0 0 20px rgba(255,255,255,0.2)"
            }}
          />

          <h2
            style={{
              color: "white",
              fontSize: "48px",
              marginTop: "20px"
            }}
          >
            {user.name}
          </h2>

          <p
            style={{
              color: "#c9d1d9",
              fontSize: "20px",
              maxWidth: "900px",
              margin: "20px auto",
              lineHeight: "1.6"
            }}
          >
            {user.bio}
          </p>

          {/* STATS */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
              marginTop: "35px",
              marginBottom: "35px"
            }}
          >

            <div
              style={{
                backgroundColor: "#161b22",
                padding: "20px 40px",
                borderRadius: "14px",
                minWidth: "180px",
                border: "1px solid #30363d"
              }}
            >

              <h3
                style={{
                  color: "#8b949e",
                  marginBottom: "10px"
                }}
              >
                👥 Followers
              </h3>

              <h1
                style={{
                  color: "white",
                  fontSize: "40px"
                }}
              >
                {user.followers}
              </h1>

            </div>

            <div
              style={{
                backgroundColor: "#161b22",
                padding: "20px 40px",
                borderRadius: "14px",
                minWidth: "180px",
                border: "1px solid #30363d"
              }}
            >

              <h3
                style={{
                  color: "#8b949e",
                  marginBottom: "10px"
                }}
              >
                ➕ Following
              </h3>

              <h1
                style={{
                  color: "white",
                  fontSize: "40px"
                }}
              >
                {user.following}
              </h1>

            </div>

            <div
              style={{
                backgroundColor: "#161b22",
                padding: "20px 40px",
                borderRadius: "14px",
                minWidth: "180px",
                border: "1px solid #30363d"
              }}
            >

              <h3
                style={{
                  color: "#8b949e",
                  marginBottom: "10px"
                }}
              >
                📚 Repositories
              </h3>

              <h1
                style={{
                  color: "white",
                  fontSize: "40px"
                }}
              >
                {user.public_repos}
              </h1>

            </div>

          </div>

          {/* PROFILE LINK */}

          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#58a6ff",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: "bold"
            }}
          >
            Visit GitHub Profile ↗
          </a>

          {/* REPOSITORIES */}

          <h2
            style={{
              marginTop: "60px",
              color: "white",
              fontSize: "48px"
            }}
          >
            Repositories
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "25px",
              marginTop: "35px"
            }}
          >

            {repos.map((repo) => (

              <RepoCard
                key={repo.id}
                repo={repo}
              />

            ))}

          </div>

        </div>

      )}

    </div>

  );
}

export default App;