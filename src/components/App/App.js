import {
  Container,
  Section,
  ProfileCard,
  Statistics,
  ProfileList,
  CryptoHistory,
  CryptoContainer,
  CoinInfo,
  BinanceForm,
} from "components";
import card from "data/card.json";
import stats from "data/stats.json";
import profiles from "data/list.json";
import transactions from "data/transactions.json";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export const App = () => {
  return (
    <Section>
      <Container>
        <Tabs>
          <TabList>
            <Tab>Crypto coingecko</Tab>
            <Tab>Binance market</Tab>
            <Tab>Binance form</Tab>
            <Tab>Profile .csv</Tab>
            <Tab>Card</Tab>
            <Tab>List</Tab>
            <Tab>Statistics</Tab>
          </TabList>
          <TabPanel>
            <CryptoContainer />
          </TabPanel>
          <TabPanel>
            <CoinInfo />
          </TabPanel>
          <TabPanel>
            <BinanceForm />
          </TabPanel>
          <TabPanel>
            <ProfileCard {...card} />
          </TabPanel>
          <TabPanel>
            <Statistics title="Main statistics" stats={stats} />
          </TabPanel>
          <TabPanel>
            <ProfileList list={profiles} />
          </TabPanel>
          <TabPanel>
            <CryptoHistory transactions={transactions} />
          </TabPanel>
        </Tabs>
      </Container>
    </Section>
  );
};
