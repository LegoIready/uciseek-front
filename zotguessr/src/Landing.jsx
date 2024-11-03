// import logo from '.public/logo.jpg';

function Landing() {
    return (
      <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh' // Optional: to make it full height of the viewport
      }}
      >
      <h1>UCIseek</h1>
      <img src="/Logo.jpg" height="300" width="300"></img>
      <a href="/quiz">
        <button>Start Seeking</button>
      </a>
      <p>Welcome to UCIseek!</p>
    </div>
    );
}

export default Landing;