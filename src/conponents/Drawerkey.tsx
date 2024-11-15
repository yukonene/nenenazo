import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

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
  openDrawerkey: boolean;
  handleCloseDrawerkey: () => void;
};

export const Drawerkey = ({ openDrawerkey, handleCloseDrawerkey }: Props) => {
  return (
    <Modal
      open={openDrawerkey}
      onClose={handleCloseDrawerkey}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <img
          src="/image/drawer.jpg"
          style={{ objectFit: 'contain', width: '100%' }}
        />
      </Box>
    </Modal>
  );
};
