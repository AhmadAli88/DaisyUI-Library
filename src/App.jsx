import "./App.css";
// import Button from "./components/Button/Button";
import Dialog from "./components/Dialog/Dialog";
// import Dropdown from "./components/Dropdown/Dropdown";
import Swap from "./components/Swap/Swap";
import Accordian from "./Data/Accordian/Accordian";
import Avatar from "./Data/Avatar/Avatar";
import Badge from "./Data/Badge/Badge";
import Card from "./Data/Card/Card";
import Carousel from "./Data/Carousel/Carousel";
import Chat from "./Data/Chat/Chat";
import Collapse from "./Data/Collapse/Collapse";
import Countdown from "./Data/Countdown/Countdown";
import Table from "./Data/Table/Table";
import Timeline from "./Data/Timeline/Timeline";
import Menu from "./Navigation/Menu/Menu";
import Navbar from "./Navigation/Menu/Navbar";
import Pagination from "./Navigation/Pagination/Pagination";
import Steps from "./Navigation/Steps/Steps";
import Tabs from "./Navigation/Tabs/Tabs";

function App() {
  return (
    <>
      {/* <Button />
      <Dropdown /> */}
      <Dialog />
      <Swap />
      <Accordian />
      <Avatar />
      <Badge />
      <Card />
      <Carousel />
      <Chat />
      <Collapse />
      <Countdown />
      <Table />
      <Timeline />
      <Menu />
      <Navbar />
      <Pagination />
      <Steps />
      <Tabs />
    </>
  );
}

export default App;
