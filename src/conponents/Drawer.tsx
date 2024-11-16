import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { DiaryModal } from './DiaryModal';

const style = {
  position: 'absolute',
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

export const DrawerModal = ({ isOpen, onClose }: Props) => {
  const [isDiaryModalOpen, setIsDiaryModalOpen] = React.useState(false);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          引き出し
        </Typography>
        <img
          src="/image/drawer.jpg"
          style={{ objectFit: 'contain', width: '100%' }}
        />
        <div //引き出し
          style={{
            position: 'absolute',
            top: '49%',
            left: '45%',
            width: '17%',
            height: '12%',
          }}
          onClick={() => setIsDiaryModalOpen(true)}
        ></div>
        <DiaryModal
          isOpen={isDiaryModalOpen}
          onClose={() => setIsDiaryModalOpen(false)}
        />
      </Box>
    </Modal>
  );
};
