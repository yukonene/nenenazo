import { useEffect, useState } from 'react';
import BlackoutStyles from './Blackout.module.css';

export const Blackout = () => {
  const [text, setText] = useState('');
  const blackoutText = [
    'ライトが消えた！？\n',
    '何も見えない・・・\n',
    'これじゃぁ脱出できないよぉ（泣\n',
  ];
  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  useEffect(() => {
    const blackoutTextAnimation = async () => {
      for (let i = 0; i < blackoutText.length; i++) {
        await sleep(1000);
        const str = blackoutText[i]; // 配列の[i]番目を取り出し
        for (let j = 0; j < str.length; j++) {
          await sleep(100);
          const char = str.slice(j, j + 1); //　str（配列の[i]番目）からj番目の文字を1文字ずつ取り出す

          setText((prev) => {
            return prev + char;
          });
        }
      }
    };
    blackoutTextAnimation();
  }, []);
  return (
    <main
      style={{
        position: 'relative',
        backgroundImage: 'url(/image/blackout.jpg)',
        height: '100%',
      }}
    >
      <div
        className={BlackoutStyles.text}
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

      <img
        src="/image/blackouttext.png"
        style={{
          objectFit: 'contain',
          width: '100%',
          position: 'absolute',
          transform: 'translate(-50%,-50%)',
          textAlign: 'center',
          top: '50%',
          left: '50%',
        }}
      ></img>
    </main>
  );
};
