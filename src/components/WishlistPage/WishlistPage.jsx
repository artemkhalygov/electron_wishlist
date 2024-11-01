import React from 'react'
import { Button, CircularProgress, Stack, Typography, Rating, Box, IconButton, ButtonBase, Tooltip } from "@mui/material";
import { NavLink } from 'react-router-dom';
import { useWishlist } from '../../WishlistContext.jsx';
import { HeartBroken } from '@mui/icons-material';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist()
  return <Stack>
    <Typography variant='h3'>Wishlist</Typography>
    
    <Button variant="text" to='/' LinkComponent={NavLink}>Go back</Button>

    <Stack gap={2} alignItems='flex-start'>
      {
      wishlist?.map((item) => (
        <Stack flexDirection='row' gap={2}  key={item.id} alignItems='center'>
        <ButtonBase  to={`/details/${item.id}`} LinkComponent={NavLink}>
          <Stack flexDirection='row' gap={2} alignItems='center'>
            <Box component='img' src={item.image} sx={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              border: '4px solid var(--text-main)'
            }}
            />
            <Typography>{item.name}</Typography>
          </Stack>
        </ButtonBase>

        <Tooltip title='Remove from wishlist'>
        <HeartBroken color='error' onClick={() => removeFromWishlist(item)} />
        </Tooltip>
      </Stack>))
      }
  </Stack>
  </Stack>
}
