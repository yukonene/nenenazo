import { useEffect, useState } from 'react';
import * as React from 'react';
import { DoorKeyPanelModal } from './DoorKeyPanelModal';
import { WallGraffiti } from './WallGraffiti';
import { DrawerModal } from './Drawer';
import { UnderTheDeskModal } from './UnderTheDeskModal';
import { Snackbar } from '@mui/material';
import { useRouter } from 'next/router';
import { CalendarModal } from './CalendarModal';

export const Play = () => {
  const [isDoorKeyPanelModalOpen, setIsDoorKeyPanelModalOpen] =
    React.useState(false); //パネル
  // const handleOpenPanel = () => setOpenPanel(true);
  // const handleClosePanel = () => setOpenPanel(false);

  const [isWallModalOpen, setIsWallModalOpen] = React.useState(false); //壁

  const [haveKey, setHaveKey] = React.useState(false); //鍵取得（propsの内容設定）
  const [isDrawerLockMessageVigible, setIsDrawerLockMessageVigible] =
    React.useState(false); //鍵なし引出し
  const [isDrawerModalOpen, setIsDrawerModalOpen] = React.useState(false); //引き出し

  const [isCalendarModalOpen, setIsCalendarModalOpen] = React.useState(false); //カレンダー

  const [isUnderTheDeskModalOpen, setIsUnderTheDeskModalOpen] =
    React.useState(false); //机裏クリック

  const [isDoorKeyOpen, setIsDoorKeyOpen] = React.useState(false); //ドアロック
  const [isDoorLockMessageVigible, setIsDoorLockMessageVigible] =
    React.useState(false); //ドアロックメッセージ

  const router = useRouter();

  const [timer, setTimer] = useState(300); //タイマー
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimer((prev) => {
        const counter = prev - 1;
        if (counter === 0) {
          window.clearInterval(intervalId);
          router.push('/blackout');
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
        onClick={() => setIsDoorKeyPanelModalOpen(true)}
      ></div>
      <DoorKeyPanelModal
        isOpen={isDoorKeyPanelModalOpen}
        onClose={() => setIsDoorKeyPanelModalOpen(false)} //パネルクリックここまで
        setIsDoorKeyOpen={setIsDoorKeyOpen}
      />
      <div //らくがきクリック
        style={{
          position: 'absolute',
          top: '77%',
          left: '77%',
          width: '2%',
          height: '4%',
        }}
        onClick={() => setIsWallModalOpen(true)}
      ></div>
      <WallGraffiti
        isOpen={isWallModalOpen}
        onClose={() => setIsWallModalOpen(false)} //らくがきクリックここまで
      />
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={isDrawerLockMessageVigible}
        onClose={() => setIsDrawerLockMessageVigible(false)}
        message="鍵がかかっているようだ"
        autoHideDuration={1200}
      />
      <div //引き出し
        style={{
          position: 'absolute',
          top: '46%',
          left: '51.5%',
          width: '9%',
          height: '4%',
        }}
        onClick={() => {
          if (haveKey === true) {
            setIsDrawerModalOpen(true);
          } else {
            setIsDrawerLockMessageVigible(true);
          }
        }}
      ></div>
      <DrawerModal
        isOpen={isDrawerModalOpen}
        onClose={() => setIsDrawerModalOpen(false)} //引き出しここまで
      />
      <div //机裏クリック
        style={{
          position: 'absolute',
          top: '51%',
          left: '39%',
          width: '9%',
          height: '4%',
        }}
        onClick={() => setIsUnderTheDeskModalOpen(true)}
      ></div>
      <UnderTheDeskModal
        haveKey={haveKey} //propsを送る準備
        setHaveKey={setHaveKey}
        isOpen={isUnderTheDeskModalOpen}
        onClose={() => setIsUnderTheDeskModalOpen(false)} //机裏クリックここまで
      />
      <div //カレンダークリック
        style={{
          position: 'absolute',
          top: '15%',
          left: '53%',
          width: '7%',
          height: '16%',
        }}
        onClick={() => setIsCalendarModalOpen(true)}
      ></div>
      <CalendarModal
        isOpen={isCalendarModalOpen}
        onClose={() => setIsCalendarModalOpen(false)} //カレンダークリックここまで
      />
      {haveKey && ( //鍵表示
        <img
          style={{
            position: 'absolute',
            top: '78%',
            left: '8%',
            height: '12%',
          }}
          src="/image/key.png"
        /> //鍵表示ここまで
      )}
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
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={isDoorLockMessageVigible}
        onClose={() => setIsDoorLockMessageVigible(false)}
        message="鍵がかかっているようだ"
        autoHideDuration={1200}
      />
      <div
        style={{
          position: 'absolute',

          top: '38%',
          left: '20%',
          width: '6%',
          height: '4%',
        }}
        onClick={() => {
          if (isDoorKeyOpen === true) {
            router.push('/clear');
          } else {
            setIsDoorLockMessageVigible(true);
          }
        }}
      ></div>
      <img
        src="/image/room.jpg"
        style={{ objectFit: 'contain', width: '100%' }}
      ></img>
    </main>
  );
};
