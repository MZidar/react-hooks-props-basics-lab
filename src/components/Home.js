import React from "react";

function Home(user) {
  return (
    <div id="home">
      <h1 style={{ color: user.color }}>
        {user.username} is a Web Developer from {user.city}
      </h1>
    </div>
  );
}

export default Home;
