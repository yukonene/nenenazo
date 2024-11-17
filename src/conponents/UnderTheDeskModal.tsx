import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Typography } from '@mui/material';

const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

type Props = {
  //props受け取る準備
  isOpen: boolean;
  onClose: () => void;
  haveKey: boolean;
  setHaveKey: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UnderTheDeskModal = ({
  //props受け取った内容を入れ込む
  isOpen,
  onClose,
  haveKey,
  setHaveKey,
}: Props) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          ・・・
        </Typography>
        <img
          alt="diary"
          src={haveKey ? '/image/diary3.jpg' : '/image/drawer.jpg'}
          style={{ objectFit: 'contain', width: '100%' }}
        />
        <div //机裏クリック
          style={{
            position: 'absolute',
            top: '51%',
            left: '39%',
            // width: '9%',
            // height: '4%',
          }}
          onClick={() => setHaveKey(true)}
        >
          key
        </div>
      </Box>
    </Modal>
  );
};
