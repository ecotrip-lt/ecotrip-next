import React from "react";
import "../styles/footer.css";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className='flex justify-between'></div>
          <p className='copyright'></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
