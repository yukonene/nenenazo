import { useEffect, useState } from 'react';
import * as React from 'react';
import { DoorKeyPanelModal } from './DoorKeyPanelModal';
import { WallGraffiti } from './WallGraffiti';

export const Play = () => {
  const [openPanel, setOpenPanel] = React.useState(false);
  const handleOpenPanel = () => setOpenPanel(true);
  const handleClosePanel = () => setOpenPanel(false);

  const [openWall, setOpenWall] = React.useState(false);
  const handleOpenWall = () => setOpenWall(true);
  const handleCloseWall = () => setOpenWall(false);

  const [timer, setTimer] = useState(300);
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimer((prev) => {
        const counter = prev - 1;
        if (counter === 0) {
          window.clearInterval(intervalId);
        }
        return counter;
      });
    }, 1000);
    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <main
      style={{
        position: 'relative',
      }}
    >
      <div
        style={{ position: 'absolute', top: '40%', left: '40%' }}
        onClick={handleOpenPanel}
      >
        Open modal
      </div>
      <DoorKeyPanelModal
        openPanel={openPanel}
        handleClosePanel={handleClosePanel}
      />
      <div
        style={{ position: 'absolute', top: '20%', left: '10%' }}
        onClick={handleOpenWall}
      >
        wall
      </div>
      <WallGraffiti openWall={openWall} handleCloseWall={handleCloseWall} />
      <div
        style={{
          position: 'absolute',
          transform: 'translateX(-50%)',
          top: '2%',
          left: '50%',
        }}
      >
        {Math.floor(timer / 60)}分{timer % 60}秒
      </div>
      <img
        src="/yuki.jpg"
        style={{ objectFit: 'contain', width: '100%' }}
      ></img>
    </main>
  );
};
