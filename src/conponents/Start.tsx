import { useEffect, useState } from 'react';
import startStyles from './Start.module.css';

export const Start = () => {
  const [text, setText] = useState('');
  const startText = [
    '今回はjavascriptで文字列をDOM要素に1文字ずつ表示させ',
    'クリック時に一括で表示させる、',
    'ADVによくある文章表示方法について書きます。',
  ];

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  useEffect(() => {
    const startTextAnimation = async () => {
      for (let i = 0; i < startText.length; i++) {
        await sleep(1000);
        const str = startText[i]; // 配列の[i]番目の文字列
        console.log(str);
        for (let j = 0; j < str.length; j++) {
          await sleep(100);
          const char = str.slice(j, j + 1); //　strからj番目の文字を1文字ずつ取り出す
          setText((prev) => {
            return prev + char;
          });
        }
      }
    };
    startTextAnimation();
  }, []);

  return <div className={startStyles.test}>{text}</div>;
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
