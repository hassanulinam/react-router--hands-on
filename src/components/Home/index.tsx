import { Link } from "react-router-dom";
import LogoutBtn from "../LogoutBtn";

const Home = () => {
  return (
    <div>
      <div className="navbar">
        <h1>Home</h1>
        <div className="nav-items">
          <Link to="/profile-details">Profile-details</Link>
          <LogoutBtn />
        </div>
      </div>
      <br />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque velit
        similique neque cum explicabo illo laborum sint, nisi nemo dolore
        perspiciatis! Tempo ex non iusto minus est? Officia explicabo optio
        <br /> <br />
        ugit veniam aut mollitia nesciunt deleniti labore voluptates. Facilis
        provident corporis voluptas harum ut deserunt. Obcaecati nam blanditiis
        molestiae voluptatibus pamilique odio nostrum culpa tenetur!
      </p>
      <p>
        non asperiores quaerat impedit, ullam et tempora possimus. Nobis, quo
        debitis corporis incidunt repellendus iure facere ipsum reprehenderit
        obcaecati voluptatibus doloribus ut ad laborum quas culpa necessitatibus
        minus aliquam, aut amet quisquam nihil consectetur commodi mollitia vel!
        Officiis.
      </p>
    </div>
  );
};

export default Home;
