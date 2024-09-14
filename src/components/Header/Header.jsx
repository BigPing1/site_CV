import cssHeader from "./Header.module.css";
const Header = props => {
  return (
    <div className='Header'>
      <div className={cssHeader.headerContainer}>
        <h1 className={cssHeader.tytleName}>Deineha Danylo</h1>
        <h2 className={cssHeader.tytleGreeting}>Welcome</h2>
      </div>
    </div>
  );
};
export default Header;
