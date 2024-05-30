"use client";
import React from "react";
import "../styles/buttons.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const SecondaryButton = (props: ButtonProps) => {
  return (
    <button {...props} className='btn secondary-button'>
      <span>{props.children}</span>
    </button>
  );
};

export default SecondaryButton;
