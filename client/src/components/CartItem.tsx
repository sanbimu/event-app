import React from 'react';
import Button from './Button';
import { CheckSVG, DeleteSVG, SaveSVG, SavedSVG } from '../icons';

const CartItem: React.FC = () => {
  return (
    <div className="flex flex-col border-b border-black lg:ml-6 lg:w-[50vw]">
      <div className="flex flex-row gap-6 pl-6 pt-6">
        <img
          src="https://scontent.fbru5-1.fna.fbcdn.net/v/t39.30808-6/323437252_905907437103276_5605273598100064616_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=340051&_nc_ohc=wlSZvM6lZYQAX_JaqS9&_nc_ht=scontent.fbru5-1.fna&oh=00_AfDn_fODEc_laFxs5BaXHP8lpXHDAjlXjj9Vu4GccF374Q&oe=64670293"
          alt="image"
          className="h-24 w-24"
        ></img>
        <p className="shadow-text font-franklin text-lg font-extralight uppercase md:text-xl ">
          Name
        </p>
      </div>

      <div className="flex flex-col pl-6">
        <div className="flex flex-row items-center pr-12 pt-4">
          <div className="flex w-1/2 flex-row items-center justify-start gap-4 pt-2">
            <p className="font-franklin text-lg font-extralight">Label</p>
            <p className="whitespace-nowrap font-franklin text-base">19.99 €</p>
          </div>

          <div className="flex w-1/2 flex-row justify-end gap-4">
            <select
              name="tickets"
              id="search"
              className="border border-black bg-background"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <button className="border border-black p-1">
              <img src={CheckSVG} alt="V" className="h-6 w-6"></img>
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center pt-4 pr-12 text-lg">
          <div className="flex w-1/2 flex-row items-center justify-start gap-4 pt-2 font-franklin">
            <p className="text-lg font-extralight">Total</p>
            <p className="text-base">19.00 €</p>
          </div>
          <div className="flex w-1/2 flex-row justify-end">
            <Button text="buy" className="w-[150px] py-2 shadow-custom" />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between pr-12 pt-4 pb-6 md:justify-start">
          <button className="flex flex-row items-center">
            <img src={DeleteSVG} alt="delete" className="h-6 w-6"></img>
            <p className="pl-4 font-franklin text-[14px] font-extralight uppercase ">
              Delete
            </p>
          </button>
          <div className="flex flex-row items-center">
            <img src={SaveSVG} alt="save" className="h-[27px] pl-10"></img>
            <p className="pl-4 font-franklin text-[14px] font-extralight uppercase ">
              Save for later
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
