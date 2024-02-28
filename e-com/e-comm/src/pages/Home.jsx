import Helmete from "../components/helmete/Helmete";
function Home() {
  const year = new Date().getFullYear();
  return (
    <Helmete title={"Home"}>
      <section>
        <div>
          <p className="">Trending Product in {year}</p>
        </div>
      </section>
    </Helmete>
  );
}

export default Home;
