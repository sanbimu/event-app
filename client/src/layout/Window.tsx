import { useRef } from 'react';
import { CloseSVG } from '../icons';
import { useClickOutside, useWindowContext } from '../hooks';

const Window: React.FC = () => {
  const { closeWindow, content } = useWindowContext();

  const windowRef = useRef(null);
  useClickOutside(windowRef, () => closeWindow());

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-[100] flex h-screen w-screen items-center justify-center overflow-hidden bg-dark-grey bg-opacity-50">
      <div className="relative border border-black bg-background" ref={windowRef}>
        <div>
          <button
            onClick={closeWindow}
            className="absolute top-2 left-2 border border-black bg-background"
          >
            <img src={CloseSVG} alt="close button" className="h-[25px]" />
          </button>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Window;
