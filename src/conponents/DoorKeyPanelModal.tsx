import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  setIsDoorKeyOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DoorKeyPanelModal = ({
  isOpen,
  onClose,
  setIsDoorKeyOpen,
}: Props) => {
  const [result, setResult] = React.useState('');
  const handleCalculation = (number: string) => {
    let newResult = result + number;
    if (newResult.length === 4) {
      if (newResult === '1224') {
        newResult = 'OPEN';
        setIsDoorKeyOpen(true);
      } else {
        newResult = 'ERROR';
        setTimeout(() => {
          setResult('');
        }, 3000);
      }
    }
    setResult(newResult);
  };
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="App">
          <p className="string-box">{result}</p>
          <div className="column-box">
            <div className="row-box">
              <button
                className="normal"
                onClick={() => handleCalculation('7')}
                disabled={result.length > 3}
              >
                7
              </button>
              <button
                className="normal"
                onClick={() => handleCalculation('8')}
                disabled={result.length > 3}
              >
                8
              </button>
              <button
                className="normal"
                onClick={() => handleCalculation('9')}
                disabled={result.length > 3}
              >
                9
              </button>
            </div>
            <div className="row-box">
              <button
                className="normal"
                onClick={() => handleCalculation('4')}
                disabled={result.length > 3}
              >
                4
              </button>
              <button
                className="normal"
                onClick={() => handleCalculation('5')}
                disabled={result.length > 3}
              >
                5
              </button>
              <button
                className="normal"
                onClick={() => handleCalculation('6')}
                disabled={result.length > 3}
              >
                6
              </button>
            </div>
            <div className="row-box">
              <button
                className="normal"
                onClick={() => handleCalculation('1')}
                disabled={result.length > 3}
              >
                1
              </button>
              <button
                className="normal"
                onClick={() => handleCalculation('2')}
                disabled={result.length > 3}
              >
                2
              </button>
              <button
                className="normal"
                onClick={() => handleCalculation('3')}
                disabled={result.length > 3}
              >
                3
              </button>
            </div>
            <div className="row-box">
              <button
                className="normal"
                onClick={() => handleCalculation('0')}
                disabled={result.length > 3}
              >
                0
              </button>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};
