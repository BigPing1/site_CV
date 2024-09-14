import cssFooter from "./Footer.module.css";

const Footer = props => {
  return (
    <div className='Footer'>
      <img
        className={cssFooter.icon}
        src='https://thumbs.dreamstime.com/b/javascript-icon-logo-javascript-often-abbreviated-as-js-programming-language-conforms-to-ecmascript-specification-204759326.jpg'
        alt='Js'
      />
      <img
        className={cssFooter.icon}
        src='https://cdn-icons-png.flaticon.com/512/732/732190.png'
        alt='CSS'
      />
      <img
        className={cssFooter.icon}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBd2rMcfI56SZEenhvautbZl_xUsPSHaktNw&s'
        alt='HTML'
      />
      <img
        className={cssFooter.icon}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s'
        alt='React'
      />
      <img
        className={cssFooter.icon}
        src='https://en.proft.me/media/js/react_flux.png'
        alt='flux'
      />
    </div>
  );
};

export default Footer;
