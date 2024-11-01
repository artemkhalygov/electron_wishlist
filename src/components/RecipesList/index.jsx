import React, {  useCallback, useState } from "react";
import useRecipes from "../../api/useRecipes";

import { debounce } from "lodash";

import { Typography, Table, TableBody, TableCell, TableContainer, TablePagination, TableHead, TableRow, Paper, Box, Stack, TextField, Button } from '@mui/material'
import { NavLink } from "react-router-dom";
import { useTranslation } from "../../TranslationContext.jsx";


export default function RecipesList() {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const { t, setLocale, locale } = useTranslation()

  const [page, setPage] = useState(0);
  const { data } = useRecipes(page, debouncedSearch)

  const setDebouncedValue = useCallback(debounce((value) => {
    setDebouncedSearch(value)
  }, 3000), []) 

  const onChange = (e) => {
    setSearch(e.target.value)

    setDebouncedValue(e.target.value)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return <Stack>
    <Typography variant="h6" sx={{ color: 'var(--text-main)' }}>{t('title')}</Typography>

    <Button variant="outlined" to='/wishlist' LinkComponent={NavLink}>View wishlist</Button>
    <Button variant="outlined" onClick={() => setLocale(locale === 'en' ? 'de' : 'en')}>Toggle language</Button>

    <TableContainer component={Paper} >
      <TextField size="small"
      placeholder="Type to search..."
      label="Search"
      value={search}
      onChange={onChange}
       sx={{
        mt: 2,
        ml: 2,
        width: '350px'
      }} />

      <Table aria-label="simple table" sx={{ mt: 3}}>
        <TableHead>
          <TableRow>
            <TableCell>{t('name')}</TableCell>
            <TableCell align="right">{t('difficulty')}</TableCell>
            <TableCell align="right">{t('prepTime')}</TableCell>
            <TableCell align="right">{t('cookTime')}</TableCell>
            <TableCell align="right">{t('protein')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.recipes?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Stack flexDirection='row' gap={1} alignItems='center'>
                <Box component='img' src={row.image} alt={row.name} sx={{
                  width: 30,
                  height: 30,
                  borderRadius: 5
                }} />
                {row.name}
                </Stack>
              </TableCell>
              <TableCell align="right">{row.difficulty}</TableCell>
              <TableCell align="right">{row.prepTimeMinutes} min.</TableCell>
              <TableCell align="right">{row.cookTimeMinutes} min.</TableCell>
              <TableCell align="right">
                <NavLink to={`/details/${row.id}`}>Recipe details</NavLink></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <TablePagination
      component="div"
      count={data?.total}
      page={page}
      rowsPerPage={10}
      onPageChange={handleChangePage}
    />
  </Stack>
}
