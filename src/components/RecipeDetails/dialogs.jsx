import React from 'react'
import FlatwareIcon from '@mui/icons-material/Flatware';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import { Box, Stack } from '@mui/material';

export const viewRecipePicture = (imageUrl) => ({
  titleIcon: <FlatwareIcon color='primary' />,
  title: 'Recipe Image',
  subTitle: 'Test subtitle',
  content: <Box component='img' src={imageUrl} sx={{ width: '100%' }} />,
  hideActions: true,
})

export const viewRecipeDetails = (recipe) => ({
  titleIcon: <BakeryDiningIcon color='primary' />,
  title: 'Recipe Details',
  subTitle: 'Test subtitle',
  content: <Stack>
    <Stack>Calories per serving: {recipe.caloriesPerServing}</Stack>
    <Stack>Cuisine: {recipe.cuisine}</Stack>
    <Stack>Difficulty: {recipe.difficulty}</Stack>
    <Stack>Cook time: {recipe.cookTimeMinutes}</Stack>
  </Stack>,
  hideActions: true,
})
