import Header from "./Header";

function Landing() {
    return (
        <div>
        {<Header />}
      <h1>Home Page</h1>
      <a href="/quiz">
        <button>Start Quiz</button>
      </a>
      <p>Welcome to the Home Page.</p>
    </div>
    );
}

export default Landing;