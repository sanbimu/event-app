import { useWindowContext } from '../../hooks';
import { DateSVG, LocationSVG, SaveSVG } from '../../icons';
import Button from '../Button';

const ShowOne = () => {
  return (
    <>
      {/* MOBILE */}

      <div className="scrollbar-hide flex h-[85vh] w-[85vw] flex-col overflow-y-scroll md:hidden">
        {/* INFORMATION */}

        <div className="flex h-auto flex-col items-center border-b border-black">
          <div className="relative inline-block pt-12">
            <div className="relative inline-block h-[20px]">
              <p className="toolong relative z-40 font-franklin text-2xl font-light">
                Name
              </p>
              <div className="absolute top-0 bottom-0 left-0 right-0 z-30 translate-x-[0.45rem] translate-y-[0.40rem] bg-dark-pink-transparent"></div>
            </div>
            <div className="flex flex-row pt-5">
              <img src={DateSVG} alt="date" className="h-[20px] pl-1"></img>
              <p className="pl-5 font-franklin text-[16px] font-extralight uppercase ">
                Date
              </p>
            </div>

            <div className="flex flex-row pt-4">
              <img src={LocationSVG} alt="date" className="h-[27px]"></img>
              <p className="pl-4 pt-1 font-franklin text-[16px] font-extralight uppercase ">
                Location
              </p>
            </div>

            <div className="flex flex-row pt-4 pb-8 ">
              <img src={SaveSVG} alt="date" className="h-[27px]"></img>
              <p className="pl-4 pt-1 font-franklin text-[16px] font-extralight uppercase ">
                Save for later
              </p>
            </div>
          </div>
        </div>

        {/* PICTURE */}

        <div className="flex h-auto flex-col items-center border-b border-black">
          <img src="" alt="image event" className="object-cover p-3"></img>
        </div>

        {/* DESCRIPTION */}

        <div className="flex min-h-[35%] flex-col items-center overflow-auto border-b border-black p-4">
          <p className="font-franklin text-[15px] font-extralight">
            Dear citizens,
            <br />
            Our 2022 edition was an unbelievable success. Improving last year’s incredible
            celebrations will be difficult, but we like a challenge! There’s not much we
            can share with you just yet, but we’re working hard to deliver another
            unforgettable experience. So expect more artists, new stage designs and even
            greater sustainability efforts.
            <br />
            Paradise City 2023 will be another precious moment to kickstart your summer. A
            beautiful lush green location in a castle garden surrounded by water,
            enchanting music from the world's best electronic artists, and above all, a
            community of like-minded dancers. That's our recipe for creating lasting
            memories. Good times are coming, and everyone's invited.
          </p>
        </div>

        {/* PRICES */}

        <div className="flex h-auto flex-col gap-4 border-b border-black py-6 pl-8">
          <p className="pb-2 font-fromage text-2xl font-medium">Prices</p>
          <div className="flex flex-row gap-6">
            <p className="font-franklin text-[15px] font-light">FRIDAY :</p>
            <p>€ 65.00</p>
          </div>
          <div className="flex flex-row gap-6">
            <p className="font-franklin text-[15px] font-light">FRIDAY :</p>
            <p>€ 65.00</p>
          </div>
          <div className="flex flex-row gap-6">
            <p className="font-franklin text-[15px] font-light">FRIDAY :</p>
            <p>€ 65.00</p>
          </div>
          <Button text="buy tickets" className="mt-4 w-[180px] p-4 shadow-custom" />
        </div>

        {/* TAGS */}

        <div className="flex h-auto flex-row flex-wrap gap-4 p-4">
          <Button
            className="h-[38px] px-3 font-franklin text-[15px] font-light"
            text="FESTIVAL"
          />
          <Button
            className="h-[38px] px-3 font-franklin text-[15px] font-light"
            text="FESTIVAL"
          />
          <Button
            className="h-[38px] px-3 font-franklin text-[15px] font-light"
            text="FESTIVAL"
          />
        </div>
      </div>

      {/* DESKTOP */}

      <div className="hidden h-[85vh] w-[75vw] flex-row md:flex">
        <div className="scrollbar-hide flex w-[50%] flex-col overflow-y-scroll border-r border-black">
          {/* INFORMATION */}

          <div className="flex h-auto flex-col items-center border-b border-black">
            <div className="relative inline-block pt-12">
              <div className="relative inline-block h-[20px]">
                <p className="toolong relative z-40 font-franklin text-2xl font-light">
                  Name
                </p>
                <div className="absolute top-0 bottom-0 left-0 right-0 z-30 translate-x-[0.45rem] translate-y-[0.40rem] bg-dark-pink-transparent"></div>
              </div>
              <div className="flex flex-row pt-5">
                <img src={DateSVG} alt="date" className="h-[20px] pl-1"></img>
                <p className="pl-5 font-franklin text-[16px] font-extralight uppercase ">
                  Date
                </p>
              </div>

              <div className="flex flex-row pt-4">
                <img src={LocationSVG} alt="date" className="h-[27px]"></img>
                <p className="pl-4 pt-1 font-franklin text-[16px] font-extralight uppercase ">
                  Location
                </p>
              </div>

              <div className="flex flex-row pt-4 pb-8 ">
                <img src={SaveSVG} alt="date" className="h-[27px]"></img>
                <p className="pl-4 pt-1 font-franklin text-[16px] font-extralight uppercase ">
                  Save for later
                </p>
              </div>
            </div>
          </div>

          {/* PRICES */}

          <div className="flex h-auto flex-col gap-4 border-b border-black py-6 pl-12">
            <p className="pb-2 font-fromage text-2xl font-medium">Prices</p>
            <div className="flex flex-row gap-6">
              <p className="font-franklin text-[15px] font-light">FRIDAY :</p>
              <p>€ 65.00</p>
            </div>
            <div className="flex flex-row gap-6">
              <p className="font-franklin text-[15px] font-light">FRIDAY :</p>
              <p>€ 65.00</p>
            </div>
            <div className="flex flex-row gap-6">
              <p className="font-franklin text-[15px] font-light">FRIDAY :</p>
              <p>€ 65.00</p>
            </div>
            <Button
              text="buy tickets"
              className="mt-4 mb-4 w-[180px] p-4 shadow-custom"
            />
          </div>

          {/* TAGS */}

          <div className="flex h-auto flex-row flex-wrap gap-4 p-4 pt-6">
            <Button
              className="h-[38px] px-3 font-franklin text-[15px] font-light"
              text="FESTIVAL"
            />
            <Button
              className="h-[38px] px-3 font-franklin text-[15px] font-light"
              text="FESTIVAL"
            />
            <Button
              className="h-[38px] px-3 font-franklin text-[15px] font-light"
              text="FESTIVAL"
            />
          </div>
        </div>

        <div className="flex w-[50%] flex-col">
          {/* PICTURE */}

          <div className="flex h-auto flex-col items-center">
            <img src="" alt="image event" className="object-cover p-6"></img>
          </div>

          {/* DESCRIPTION */}

          <div className="scrollbar-hide flex min-h-[35%] flex-col items-center overflow-auto px-6 pt-4 pb-6">
            <p className="font-franklin text-[15px] font-extralight">
              Dear citizens,
              <br />
              <br />
              Our 2022 edition was an unbelievable success. Improving last year’s
              incredible celebrations will be difficult, but we like a challenge! There’s
              not much we can share with you just yet, but we’re working hard to deliver
              another unforgettable experience. So expect more artists, new stage designs
              and even greater sustainability efforts.
              <br />
              <br />
              Paradise City 2023 will be another precious moment to kickstart your summer.
              A beautiful lush green location in a castle garden surrounded by water,
              enchanting music from the world's best electronic artists, and above all, a
              community of like-minded dancers. That's our recipe for creating lasting
              memories. Good times are coming, and everyone's invited.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowOne;
