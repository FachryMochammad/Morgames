import { Navbar } from "./";

const Loading = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="text-center">
          <div
            className="spinner-border"
            role="status"
            style={{ marginTop: "35vh", color: "#772ce8" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
