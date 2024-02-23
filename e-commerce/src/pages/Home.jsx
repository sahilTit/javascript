import "./Home.css";

function Home() {
  return (
    <>
      <div className="home-btn">
        <div className="">
          <p>NEW ARRIVALS ONLY</p>
          <p className="big-font">
            NEW <br /> COLLECTIONS{" "}
          </p>
          <p className="big-font">FOR EVERYONE</p>
          <button className="left-side-btn">Latest Collection</button>
        </div>
        <div className="right-side">
          <img
            src="https://imgs.search.brave.com/OT0asf6QNFqn2O4O2cwQA6KpUrNRFxf5spHLYTm3Swk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNS9GYXNo/aW9uLU1vZGVsLU1h/bi1QTkctSW1hZ2Uu/cG5n"
            alt=""
          />
        </div>
      </div>
      {/* <Popular /> */}
    </>
  );
}

export default Home;
