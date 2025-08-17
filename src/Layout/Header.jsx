import logo from "./images.jpg";

const subHeaderStyle = {
  backgroundColor: "lightgray",
  color: "blueviolet",
  minHeight: "1em",
  margin: "0.5em 0"
};

const MainHeader=()=> {
  return (
    <div className="pt-0 pl-2 bg-black">
      <img src={logo} className="align-center" style={{ height: "50px" }}></img>
      <span className="h2 pt-4 text-white-50"> REACT COURSE </span>
    </div>
  );
}

const SubHeader=()=> {
  return <p style={subHeaderStyle}>{" "}</p>;
}
const Header=()=> {
  return (
    <div>
      <MainHeader /> 
      <SubHeader />
    </div>
  );
}
export default Header;
