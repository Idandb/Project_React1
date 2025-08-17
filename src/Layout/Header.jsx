import logo from "./images.jpg";

function MainHeader() {
  return (
    <div className="pt-0 pl-2 bg-black">
      <img src={logo} className="align-center" style={{ height: "50px" }}></img>
      <span className="h2 pt-4 text-white-50"> REACT COURSE </span>
    </div>
  );
}

const subHeaderStyle = {
  backgroundColor: "lightgray",
  color: "blueviolet",
};

function SubHeader() {
  return <p style={subHeaderStyle}>Hi All </p>;
}
export default function Header() {
  return (
    <div>
      <MainHeader> </MainHeader>
      <SubHeader> </SubHeader>
    </div>
  );
}
