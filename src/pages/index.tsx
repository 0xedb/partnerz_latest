import Top from "../components/index/Top";
import HeadMeta from "../components/meta/HeadMeta";
import NavBar from "../components/nav/NavBar";
import Content from "../components/index/Content";
import Footer from "../components/footer/Footer";
import Page from "../components/page/Page";
import Main from "../components/index/Main";

const Index = () => (
  <Page>
    <HeadMeta>
      <title>Partnerz FP Limited | Your Financial Architects</title>
    </HeadMeta>
    <NavBar />
    <Top />
    <Main />
    <Content />
    <Footer />
  </Page>
);

export default Index;
// <Stock />
//
//
//
