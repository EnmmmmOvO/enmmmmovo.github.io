import React, { useCallback, useEffect, useState } from 'react';
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { DialogContext } from '../../context/DialogContext';
import { LanguageContext } from '../../context/LanguageContext';

interface ChildrenProps {
  children?: React.ReactNode;
}

const NoticeDialog: React.FC<ChildrenProps> = ({ children }) => {
  const [disabled, setDisabled] = useState(false);
  const [open, setOpen] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');
  const [countdown, setCountdown] = useState(5);
  const { content } = React.useContext(LanguageContext);

  const handleCheckbox = (value: React.ChangeEvent<HTMLInputElement>) => setDisabled(value.target.checked)

  const handleClose = useCallback(() => {
    setOpen(false);
    setCountdown(5);
    if (redirectUrl) {
      window.open(redirectUrl, '_blank');
    }
  }, [redirectUrl]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (open && countdown >= 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === -1) {
      handleClose();
    }
    return () => clearTimeout(timer);
  }, [open, countdown, handleClose]);

  const handleClickOpen = useCallback((url: string) => {
    setRedirectUrl(url);
    setOpen(true);
  }, []);

  return (
    <DialogContext.Provider value={{ disabled, handleClickOpen }}>
      {children}
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {content.jumpTitle}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" sx={{ mt: 1, mb: 1 }}>
              {content.jumpContent}
            </DialogContentText>
            <Checkbox value={disabled} onChange={handleCheckbox} /> {content.jumpDismiss}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              {content.jumpButton} ({countdown})
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </DialogContext.Provider>
  );
}

export default NoticeDialog;