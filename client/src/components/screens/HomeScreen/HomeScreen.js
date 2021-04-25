import React, { useState, useEffect } from "react";
import axios from "axios";

const HomeScreen = ({ history }) => {
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/login");
    }

    const fetchData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized. Please log in");
      }
    };

    fetchData();
  }, [history]);

  const logOutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
  };

  return (
    <div>
      {error ? (
        <span className="error-message">{error}</span>
      ) : (
        <>
          <div style={{ background: "green", color: "white" }}> {data ? data : 'loading'} </div>
         <button onClick={logOutHandler}>
          Log out
         </button>
        </>
      )}
    </div>
  );
};

export default HomeScreen;
