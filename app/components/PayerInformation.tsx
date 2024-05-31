"use client";

import React from "react";
import Step from "./Step";
import FieldContainer from "./FieldContainer";
import StyledSelect from "./StyledSelect";
import CustomInput from "./CustomInput";
import CheckboxWithLabel from "./CheckboxWithLabel";
import OrderPrice from "./OrderPrice";
import SecondaryButton from "./SecondaryButton";

type PayerInformationProps = {};

const PayerInformation = ({}: PayerInformationProps) => {
  const payerOptions = [
    {
      value: "thePayerIsTheSender",
      label: "Mokėtojas yra siuntėjas",
    },
    {
      value: "thePayerIsTheRecipient",
      label: "The payer is the recipient",
    },
  ];

  const paymentMethodOptions = [
    {
      value: "cash",
      label: "Grynais",
    },
  ];

  return (
    <Step step={6} title='Užsakovo / mokėtojo informacija'>
      <>
        <div className='flex justify-between mb-[30px]'>
          <FieldContainer
            label='Kas mokės už siuntos pervežimą?'
            description='Prašome iš anksto nurodyti, kas bus atsakingas už siuntos apmokėjimą, kad vėliau nebūtų nesusipratimų ar papildomų klausimų po užsakymo.'
          >
            <StyledSelect
              name='payer'
              options={payerOptions}
              defaultValue={payerOptions[0]}
            />
          </FieldContainer>
          <FieldContainer
            label='Pasirinkite apmokėjimo būdą'
            description='Prašome pasirinkti ir nurodyti atsiskaitymo būdą, kuris jums yra patogus ir teisingas.'
          >
            <StyledSelect
              name='payer'
              options={paymentMethodOptions}
              defaultValue={paymentMethodOptions[0]}
            />
          </FieldContainer>
        </div>
        <div className='w-full mb-[14px]'>
          <FieldContainer
            label='Mokėtojo el. paštas'
            description='Užsakymo ir mokėjimo patvirtinimai bus išsiųsti į šį elektroninį paštą.'
            width='full'
          >
            <CustomInput
              placeholder='Įveskite mokėtojo el. paštą'
              type='text'
            />
          </FieldContainer>
        </div>
        <OrderPrice sum={324} />
        <div className='flex flex-col justify-end gap-[8px] mb-[24px]'>
          <CheckboxWithLabel>
            <span>
              Aš esu susipažinęs(-usi) ir sutinku su{" "}
              <a href='/' className='text-primary underline'>
                {" "}
                EcoTrip siuntos pakavimo ir ženklinimo taisyklėmis
              </a>
            </span>
          </CheckboxWithLabel>
          <CheckboxWithLabel>
            <span>
              Aš esu susipažinęs(-usi) ir sutinku su{" "}
              <a href='/' className='text-primary underline'>
                EcoTrip vežimo taisyklėmis
              </a>
            </span>
          </CheckboxWithLabel>
        </div>
        <div className='w-full flex justify-end'>
          <SecondaryButton>
            <span>PatvirtinTi užsakymą</span>
          </SecondaryButton>
        </div>
      </>
    </Step>
  );
};

export default PayerInformation;
