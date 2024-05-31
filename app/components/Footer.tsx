import React from "react";
import "../styles/footer.css";
import LinkList from "./LinkList";

type Props = {};

const Footer = (props: Props) => {
  const firstColumnList = [
    {
      label: "Krovinių pervežimas",
      href: "/",
    },
    {
      label: "Siuntų gabenimas",
      href: "/",
    },
    {
      label: "Pristatymas iš parduotuvių",
      href: "/",
    },
    {
      label: "Vežimo taisyklės",
      href: "/",
    },
  ];

  const secondColumnList = [
    {
      label: "Krovinių pervežimas",
      href: "/",
    },
    {
      label: "Siuntų gabenimas",
      href: "/",
    },
    {
      label: "Perkraustymo paslaugos",
      href: "/",
    },
    {
      label: "Siuntos pakavimo ir ženklinimo taisyklės",
      href: "/",
    },
    {
      label: "Vežimo taisyklės",
      href: "/",
    },
  ];

  return (
    <div className='footer-wrapper'>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className='flex justify-between'>
            <LinkList list={firstColumnList} title='Pervežimai Lietuvoje' />
            <LinkList list={secondColumnList} title='Pervežimai užsienyje' />
            <div className='link-list-container'>
              <h2>Kontaktai</h2>
            </div>
            <div className='link-list-container'>
              <h2>Naujenlaiskis</h2>
            </div>
          </div>
          <p className='copyright'>@ 2023 ecotrip.lt | Visos teisės saugomos</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
