import { useContext } from "react";
import { CatalogContext } from "../contexts/CatalogContext";
import { ScrollView } from 'react-native';
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
import Navigation from "../components/NavigationHome";
import ViewNews from "../components/ViewNews";
import HorizontalRow from "../components/hr";
import ProfessionsView from "../components/ProfessionsView";

const Main = () => {
  const { screen } = useContext(CatalogContext);
  
  return(
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="light" />
        <Header />
        <Navigation />
        {screen === 'catalog' ? (
          <>
            <ViewNews />
            <HorizontalRow />
            <ProfessionsView />
            <HorizontalRow />
            <ProfessionsView />
          </>
        ): null}
      </ScrollView>
    </>
  )
}

export default Main;