import Container from "react-bootstrap/Container";

const About = () => {
  return (
    <Container>
      <div className="my-5">
        <h1 className="display-2 text-center text-white">About</h1>
        <p className="text-white font-weight-bold">
          This website was for learning purposes. All data was obtained from the
          Open Opus project. For more information, please visit:
          <a
            className="text-white font-weight-bold text-center"
            href="https://openopus.org/"
          >
            https://openopus.org/
          </a>
        </p>
        <h3> Known Issues</h3>
        <p className="text-white font-weight-bold">
          The http request to the "Open Opus" API used to query data has proven
          to be unreliable at times. Sometimes the latency is huge, which
          results in a slow rendering of the webpage. There are workarounds
          being explored at the moment.
        </p>
      </div>
    </Container>
  );
};
export default About;
