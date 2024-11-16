import { useEffect, useState } from 'react';
import * as React from 'react';
import { DoorKeyPanelModal } from './DoorKeyPanelModal';
import { WallGraffiti } from './WallGraffiti';
import { DrawerModal } from './Drawerkey';
import { UnderTheDeskModal } from './UnderTheDeskModal';

export const Play = () => {
  const [openPanel, setOpenPanel] = React.useState(false); //パネル
  // const handleOpenPanel = () => setOpenPanel(true);
  // const handleClosePanel = () => setOpenPanel(false);

  const [openWall, setOpenWall] = React.useState(false); //壁

  const [openDrawerModal, setOpenDrawerModal] = React.useState(false); //引き出し

  const [openUnderTheDeskModal, setOpenUnderTheDeskModal] =
    React.useState(false); //机裏クリック

  const [haveKey, setHaveKey] = React.useState(false); //鍵取得

  const [timer, setTimer] = useState(300); //タイマー
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
      <div //パネルクリック
        style={{
          position: 'absolute',
          top: '28%',
          left: '26%',
          width: '2.5%',
          height: '6%',
        }}
        onClick={() => setOpenPanel(true)}
      ></div>
      <DoorKeyPanelModal
        openPanel={openPanel}
        handleClosePanel={() => setOpenPanel(false)} //パネルクリック
      />
      <div //らくがきクリック
        style={{ position: 'absolute', top: '20%', left: '10%' }}
        onClick={() => setOpenWall(true)}
      >
        wall
      </div>
      <WallGraffiti
        openWall={openWall}
        handleCloseWall={() => setOpenWall(false)}
      />
      <div //引き出し
        style={{
          position: 'absolute',
          top: '46%',
          left: '51.5%',
          width: '7%',
          height: '4%',
        }}
        onClick={() => setOpenDrawerModal(true)}
      ></div>
      <DrawerModal
        openDrawerModal={openDrawerModal}
        handleCloseDrawerModal={() => setOpenDrawerModal(false)} //引き出し
      />

      <div //机裏クリック
        style={{
          position: 'absolute',
          top: '51%',
          left: '39%',
          width: '9%',
          height: '4%',
        }}
        onClick={() => setOpenUnderTheDeskModal(true)}
      ></div>
      <UnderTheDeskModal
        openUnderTheDeskModal={openUnderTheDeskModal}
        handleCloseUnderTheDeskModal={() => setOpenUnderTheDeskModal(false)} //机裏クリック
      />
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
        src="/image/room.jpg"
        style={{ objectFit: 'contain', width: '100%' }}
      ></img>
    </main>
  );
};
