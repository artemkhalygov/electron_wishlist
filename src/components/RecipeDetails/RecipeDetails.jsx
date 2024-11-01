import React from 'react'
import { Button, CircularProgress, Stack, Typography, Rating, Box, Chip, IconButton } from "@mui/material";
import { NavLink, useParams,useNavigate } from 'react-router-dom';
import useRecipe from '../../api/useRecipe';
import { Favorite, HeartBroken } from '@mui/icons-material';
import { useWishlist } from '../../WishlistContext.jsx';

export default function RecipeDetails() {
  const { recipeId } = useParams();
  const { data, isLoading } = useRecipe(recipeId)
  const navigate = useNavigate();
  const { wishlist, addToWishlist, isInWishlist, removeFromWishlist } = useWishlist()

  const addedToWishlist = isInWishlist(data)
  if(isLoading) {
    return <Stack justifyContent='center' alignItems='center' height='100vh'>
        <CircularProgress />
    </Stack>
  }

  return <Stack alignItems='flex-start'>
    <Stack flexDirection='row' gap={3} alignItems={'center'}>
      <Box component='img' src={data.image} sx={{
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        border: '4px solid var(--text-main)'
      }}
        />
        <Stack gap={2}>
          <Typography variant='h4' component='h1'>{data.name}</Typography>

        <Rating value={data.rating} readOnly />
        <Stack direction='row' gap={1}>
        {data.tags?.map((tag) => <Chip key={tag} label={tag} />)}
        </Stack>

        {
          addedToWishlist
          ? <Button variant='contained' color='error' startIcon={<HeartBroken />} onClick={() => removeFromWishlist(data)}>Remove from Wishlist</Button>
          : <Button variant='contained' color='success' startIcon={<Favorite />} onClick={() => addToWishlist(data)}>Add to Wishlist</Button>
        }

        <IconButton
         onClick={() => addedToWishlist ? removeFromWishlist(data) : addToWishlist(data)}
         color={addedToWishlist ? 'success' : 'default'}
         sx={{
          alignSelf: 'flex-start',
        }}>
          <Favorite />
        </IconButton>
      </Stack>
    </Stack>

    <Stack mt={3}>
      <Typography variant='h5'>Ingredients</Typography>

      <Box component='ul'>
        {data.ingredients?.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
      </Box>
    </Stack>
    <Stack mt={3}>
      <Typography variant='h5'>Instructions</Typography>

      <Box component='ul'>
        {data.instructions?.map((instruction) => <li key={instruction}>{instruction}</li>)}
      </Box>
    </Stack>

    <Button variant="text" onClick={() => navigate(-1)}>Go back</Button>
  </Stack>
}
