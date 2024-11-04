import React from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, Typography } from "@mui/material";
import { CloseRounded } from '@mui/icons-material';

export default function DialogContainer({
  open,
  onClose,
  titleIcon,
  title,
  subTitle,
  content,
  hideActions,
  cancelButtonText = 'Cancel',
  confirmButtonText = 'Save',
}){
  return <Dialog open={open} onClose={onClose}>
    <DialogTitle sx={{
      m: 0,
      p: 3,
      fontSize: '1.5rem'
    }} variant='h1'>
      <Stack alignItems='center' flexDirection='row' gap={2}>
        {titleIcon}

        <Typography variant='h4'>{title}</Typography>

        <IconButton onClick={onClose} sx={{ ml: 'auto'}}>
          <CloseRounded />
        </IconButton>
      </Stack>
      {subTitle && <Typography variant='body2' color='text.secondary' mt={2} display='inline-block'>
        {subTitle}
        </Typography>}
    </DialogTitle>

    {content && <DialogContent sx={{
      overflowY: 'visible',
      p: 3,
    }}>
      {content}
      </DialogContent>}

    {!hideActions && (<DialogActions sx={{
      p: 3,
      pt: 0,
      gap: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    }}>
      <Button onClick={onClose}>{cancelButtonText}</Button>
      <Button variant='contained' type='submit' onClick={onClose}>{confirmButtonText}</Button>
    </DialogActions>) }
  </Dialog>
}
