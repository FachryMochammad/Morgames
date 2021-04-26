import { Navbar } from "./";

const Error = ({ error }) => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1
          className="text-center"
          style={{ marginTop: "35vh", color: "#772ce8" }}
        >
          {error}
        </h1>
      </div>
    </div>
  );
};

export default Error;
