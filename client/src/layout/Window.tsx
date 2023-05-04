import { useRef } from 'react';
import { CloseSVG } from '../icons';
import { useClickOutside, useWindowContext } from '../hooks';

const Window: React.FC = () => {
  const { closeWindow, content } = useWindowContext();

  const windowRef = useRef(null);
  useClickOutside(windowRef, () => closeWindow());

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-[100] flex h-screen w-screen items-center justify-center overflow-hidden bg-dark-grey bg-opacity-50">
      <div
        className="flex flex-col border border-black bg-background p-2"
        ref={windowRef}
      >
        <div>
          <button onClick={closeWindow} className="border border-black">
            <img src={CloseSVG} alt="close button" className="h-6 w-6 px-1 py-1" />
          </button>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Window;
