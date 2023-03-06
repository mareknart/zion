import SearchBar from "../components/ui/SearchBar";
import { StyledH1, StyledH1Blue } from "./Main.styled";

const Main = (props) => {
  return (
    <>
        <StyledH1>MESS<StyledH1Blue>AI</StyledH1Blue></StyledH1>
        <SearchBar />
    </>
  );
};

export default Main;
