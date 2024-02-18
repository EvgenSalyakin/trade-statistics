import {
  Heading,
  Container,
  Section,
  ProfileCard,
  Statistics,
  ProfileList,
  CryptoHistory,
  CryptoContainer,
  CoinInfo,
} from "components";
import card from "data/card.json";
import stats from "data/stats.json";
import profiles from "data/list.json";
import transactions from "data/transactions.json";
import { Component } from "react";

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <CryptoContainer />

        <Heading marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <CoinInfo />

        <Heading marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <p>Under development</p>

        <Heading marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <ProfileCard {...card} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 5
        </Heading>
        <Statistics title="Main statistics" stats={stats} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 6
        </Heading>
        <ProfileList list={profiles} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 7
        </Heading>
        <CryptoHistory transactions={transactions} />
      </Container>
    </Section>
  );
};
