import "./Home.css";

function Home({ onEntrar }) {
  return (
    <main className="home">
      <div className="home-content">
        <img src="/snoopy/snoopy.png" alt="Snoopy" />

        <h1>oi, momozi</h1>

        <p>fiz uma coisinha pra você</p>

        <button onClick={onEntrar}>
          entrar
        </button>
      </div>
    </main>
  );
}

export default Home;