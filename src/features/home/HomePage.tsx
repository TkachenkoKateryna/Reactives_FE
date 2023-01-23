import { Link } from "react-router-dom";
import { Image, Container, Header, Segment, Button } from "semantic-ui-react";

const HomePage = () => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo.png"
            alt="logo"
            styles={{ marginBottom: 12 }}
          />
          Reactivities
        </Header>
        <Header as="h2" inverted content="Welcome to reactivities" />
        <Button as={Link} to="/activities" size="huge" inverted>
          Take me to the activities
        </Button>
      </Container>
    </Segment>
  );
};

export default HomePage;
