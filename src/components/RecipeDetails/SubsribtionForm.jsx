import React, { useState } from 'react'
import { Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required(),
  email: yup.string().email('Invalid email').required(),
}).required();

export default function SubsribtionForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = (values) => {
    console.log({values})
  }
  return <Stack>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={2}>
        <TextField error={!!errors.email?.message} helperText={errors.email?.message} id="outlined-basic"  label="Email" variant="outlined"  {...register("email")}/>

        <TextField error={!!errors.firstName?.message} helperText={errors.firstName?.message} id="outlined-basic" {...register("firstName")} label="First name" variant="outlined" />
        <TextField error={!!errors.lastName?.message} helperText={errors.lastName?.message} id="outlined-basic" {...register("lastName")} label="Last name" variant="outlined" />
      </Stack>

      <Button variant="contained" type="submit">Subscribe</Button>
    </form>
  </Stack>
}
