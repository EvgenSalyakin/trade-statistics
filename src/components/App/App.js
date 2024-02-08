import { Heading, Container, Section, ProfileCard } from "components";
import card from "data/card.json";

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <ProfileCard {...card} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
      </Container>
    </Section>
  );
};
