import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import Roster from "./Roster"
export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const percentage = 1
  const state = "display:block"
  const value = 0
  const handleClose = () => {
        setOpen(false);
  };

  const myFunction = (number) => {
  this.percentage = percentage * number.target.getAttribute('variable');
  console.log(this.percentage)
 }
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Please complete this form below"}</DialogTitle>
        <DialogContent>
            <Roster />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}