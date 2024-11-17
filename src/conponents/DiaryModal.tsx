import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

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
  isOpen: boolean;
  onClose: () => void;
};

export const DiaryModal = ({ isOpen, onClose }: Props) => {
  const PAGE_CONTENTS = [
    '/image/diary1.jpg',
    '/image/diary2.jpg',
    '/image/diary3.jpg',
  ];
  const [page, setPage] = React.useState(0);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <img
          src={PAGE_CONTENTS[page]}
          style={{ objectFit: 'contain', width: '100%' }}
        />
        <div //右クリック
          style={{
            position: 'absolute',
            top: '25%',
            left: '53%',
            width: '24%',
            height: '36%',
          }}
          onClick={() => {
            if (page === 2) {
              onClose();
              return;
            }
            setPage((prev) => prev + 1);
          }}
        ></div>
        <div //左クリック
          style={{
            position: 'absolute',
            top: '36%',
            left: '27%',
            width: '24%',
            height: '36%',
          }}
          onClick={() => {
            if (page === 0) {
              onClose();
              return;
            }
            setPage((prev) => prev - 1);
          }}
        ></div>
      </Box>
    </Modal>
  );
};
