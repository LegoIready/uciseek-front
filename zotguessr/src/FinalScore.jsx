// eslint-disable-next-line react/prop-types
function FinalScore({score}) {
    return (
        <div>
      <h1>Final Score</h1>
      <p>Congratulations! Your Final Score is: {score}</p>
      <p>Email your photo submission to cynthiro@uci.edu for it to be featured in UCIseek!</p>
      <a href="/">
        <button>Go Home</button>
      </a>
    </div>
    );
}

export default FinalScore;