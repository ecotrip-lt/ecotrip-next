import React from "react";
import "../styles/step.css";

type Props = {
  title: string;
  step: number;
  children: React.ReactNode;
};

const Step = ({ title, step, children }: Props) => {
  const stepTitle = `${step}. ${title}`;

  return (
    <div className='step-columns'>
      <div className='title-column'>
        <span>{stepTitle}</span>
      </div>
      <div className='content-column'>{children}</div>
    </div>
  );
};

export default Step;
