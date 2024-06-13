"use client";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
  icon: IconProp;
  content: string;
};

const InfoEntry = ({ icon, content }: Props) => {
  return (
    <div className='flex gap-[8px] items-center info-entry'>
      <div className='w-[24px] h-[24px] flex justify-center items-center'>
        <FontAwesomeIcon icon={icon} color='#9AA61E' />
      </div>
      <span>{content}</span>
    </div>
  );
};

export default InfoEntry;
