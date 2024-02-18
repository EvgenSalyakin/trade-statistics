import {
  Heading,
  Container,
  Section,
  ProfileCard,
  Statistics,
  ProfileList,
  CryptoHistory,
} from "components";
import card from "data/card.json";
import stats from "data/stats.json";
import profiles from "data/list.json";
import transactions from "data/transactions.json";
import { Component } from "react";

export class App extends Component {
  state = {};

  render() {
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
          <Statistics title="Main statistics" stats={stats} />

          <Heading marginTop="50px" marginBottom="50px" textAlign="center">
            Task 3
          </Heading>
          <ProfileList list={profiles} />

          <Heading marginTop="50px" marginBottom="50px" textAlign="center">
            Task 4
          </Heading>
          <CryptoHistory transactions={transactions} />
        </Container>
      </Section>
    );
  }
}
