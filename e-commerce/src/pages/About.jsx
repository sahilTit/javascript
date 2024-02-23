import Items from "../Items/Items";
import "./About.css";
function About(props) {
  return (
    <div className="main-container">
      <div className="container">
        <p>Category</p>
        <br />
        <p>Mens</p>
      </div>
      <div className="cards">
        <Items
          image={
            "https://imgs.search.brave.com/J69COJqoP8RdzeyXRvAECM0HNXbGhaX4fqOT3W1MWXk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL21lbi1jbG90/aGVzLXBuZy1wb2xv/LXNoaXJ0LXBuZy1p/bWFnZS0xMDAwLnBu/Zw"
          }
        />
        <Items
          image={
            "https://imgs.search.brave.com/eTm-D1Jyhc8Q4rXoaEAYk2Ocn-xaB9FetE-rik2XT2M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS80LTQx/MjU1X2Flc3RoZXRp/Yy1ndXktY2xvdGhl/cy1wbmctdHJhbnNw/YXJlbnQtcG5nLnBu/Zw"
          }
        />
        <Items
          image={
            "https://imgs.search.brave.com/teCy9HsVC67L_4k7j_CF_TOh6Tr_qye2PrwrE1l6-wE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8yMTct/MjE3NjYwM19wbmct/aW1hZ2UtYWVzdGhl/dGljLTgwcy12aW50/YWdlLWNsb3RoaW5n/LXBuZy10cmFuc3Bh/cmVudC5wbmc"
          }
        />
        <Items />
        <Items />
      </div>
    </div>
  );
}

export default About;
