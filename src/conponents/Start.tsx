import { useEffect, useState } from 'react';
import startStyles from './Start.module.css';
import Button from '@mui/material/Button';
import Link from 'next/link';

export const Start = () => {
  const [text, setText] = useState('');
  const startText = [
    '扉が開かない。\n',
    '閉じ込められた？\n',
    '仕掛けを解いて脱出しよう！\n',
  ];
  const [startFlag, setStartFlag] = useState(false);

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  useEffect(() => {
    const startTextAnimation = async () => {
      for (let i = 0; i < startText.length; i++) {
        await sleep(1000);
        const str = startText[i]; // 配列の[i]番目を取り出し
        for (let j = 0; j < str.length; j++) {
          await sleep(100);
          const char = str.slice(j, j + 1); //　str（配列の[i]番目）からj番目の文字を1文字ずつ取り出す

          setText((prev) => {
            return prev + char;
          });
        }
      }
      setStartFlag(true); //値の入れ替え。スイッチしないから!要らない。
    };
    startTextAnimation();
  }, []);

  return (
    <main
      style={{
        position: 'relative',
      }}
    >
      <div
        className={startStyles.text}
        style={{
          position: 'absolute',
          transform: 'translate(-50%,-50%)',
          textAlign: 'center',
          top: '40%',
          left: '50%',
        }}
      >
        {text}
      </div>
      {startFlag && (
        <Link href="/play">
          <Button
            variant="contained"
            style={{
              backgroundColor: '#666666',
              position: 'absolute',
              transform: 'translate(-50%,-50%)',
              top: '70%',
              left: '50%',
              width: '15%',
              height: '10%',
            }}
          >
            start
          </Button>
        </Link>
      )}
      <img
        src="/image/start.jpg"
        style={{ objectFit: 'contain', width: '100%' }}
      ></img>
    </main>
  );
};

//   useEffect(() => {
//     const intervalId = window.setInterval(() => {
//       setText((prev) => {
//         const textLength = prev.length;
//         const char = startText.slice(0, textLength + 1);
//         if (textLength + 1 === startText.length) {
//           window.clearInterval(intervalId);
//         }
//         return char;
//       });
//     }, 100);
//     return () => {
//       window.clearInterval(intervalId);
//       //   setInterval、clearInterval、クリーンアップ関数は必ずセットで
//     };
//   }, []);
