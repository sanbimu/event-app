import Logo from '../Logo';
import { useWindowContext } from '../../hooks';
import { NextSVG } from '../../icons';
import { useState } from 'react';
import { Questions } from '../../shared/constants';

const FAQ = () => {
  const { closeWindow } = useWindowContext();

  const [showSection, setSection] = useState('');

  const handleMore = (section: string) => {
    setSection(showSection === section ? '' : section);
  };

  return (
    <div className="scrollbar-hide z-[100] flex h-[85vh] w-[80vw] flex-col overflow-y-auto p-9 md:h-[60vh] md:p-12 lg:h-[85vh] lg:w-[50vw] lg:p-14">
      <div className="mb-4 flex flex-col items-center">
        <Logo />
      </div>

      <p className="text-center font-fromage text-3xl text-dark-grey lg:py-6">FAQ</p>
      <br />
      <div className="flex flex-col gap-4  md:pl-6 ">
        {Questions.map((question) => {
          return (
            <>
              <button
                className="relative flex w-[100%] flex-row border-b border-black py-2 pr-3 text-left font-fromage text-sm font-medium md:w-[500px] md:pr-0 md:text-base"
                onClick={() => handleMore(question.key)}
              >
                {question.question}
                <img
                  src={NextSVG}
                  alt="more"
                  className={`${
                    showSection === question.key ? '-rotate-90' : 'rotate-90'
                  } absolute right-2 h-[22px]`}
                ></img>
              </button>

              {showSection === question.key && (
                <div className="w-[85%] py-2 md:py-4">
                  <p className="text-justify font-franklin text-sm font-light">
                    {question.answer}
                  </p>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
