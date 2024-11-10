import { useState } from 'react';
import * as React from 'react';
import { DoorKeyPanelModal } from './DoorKeyPanelModal';

export const Play = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <main
      style={{
        position: 'relative',
      }}
    >
      <div
        style={{ position: 'absolute', top: '40%', left: '40%' }}
        onClick={handleOpen}
      >
        Open modal
      </div>
      <DoorKeyPanelModal open={open} handleClose={handleClose} />
      <img
        src="/yuki.jpg"
        style={{ objectFit: 'contain', width: '100%' }}
      ></img>
    </main>
  );
};
