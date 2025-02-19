'use client'
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Checkbox, FormControl, FormControlLabel, FormHelperText, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { ButtomCustom } from '../ButtomCustom';
import { fileIcon, heartIcon } from '@/images';
import * as S from './styles'

const FormAssessment = () => {
  const router = useRouter()
  const { control, register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur',
  });

  const formatCurrentDate = () => {
    const now = new Date();
    const options: any = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return now.toLocaleDateString("en-US", options).replace(",", "");
  };

  const generateRandomId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const onSubmit = (data: Event | any) => {
    localStorage.setItem('usersAlma', JSON.stringify([
      {
        name: `${data.firstName} ${data.lastName}`,
        id: generateRandomId(),
        status: 'Pending',
        submitted: formatCurrentDate(),
        ...data
      }
    ]))
    router.push('thank-you')
  };

  return (
    <S.MainContent>
      <Image src={fileIcon} alt="Icon File" style={{ width: '50px', height: '60px'}}/>
      <S.TitleForm>Want to understand your visa options?</S.TitleForm>
      <S.SubtitleForm>Submit the form below and our team of experienced attorneys will review your information and send a preliminary assessment of your case based on your goals.</S.SubtitleForm>
      <S.GroupForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2} sx={{ width: 500 }}>
            <div className="form-field">
              <TextField
                id="firstName"
                label="First Name"
                fullWidth
                error={Boolean(errors?.firstName?.message)}
                helperText={errors?.firstName?.message as string || ''}
                {...register("firstName", { required: "First name is required" })}
              />
            </div>

            <div className="form-field">
              <TextField
                id="lastName"
                label="Last Name"
                fullWidth
                error={Boolean(errors?.lastName?.message)}
                helperText={errors?.lastName?.message as string || ''}
                {...register("lastName", { required: "Last name is required" })}
              />
            </div>

            <div className="form-field">
              <TextField
                id="email"
                label="Email"
                fullWidth
                type='email'
                error={Boolean(errors?.email?.message)}
                helperText={errors?.email?.message as string || ''}
                {...register("email", { required: "Email is required" })}
              />
            </div>

            <FormControl fullWidth error={Boolean(errors?.country?.message)}>
              <InputLabel id="country-label">Country of Citzenship</InputLabel>
              <Controller
                name="country"
                control={control}
                defaultValue=""
                rules={{ required: "Country is required" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    labelId="country-label"
                    id="country"
                    label="Country of Citizenship"
                  >
                    <MenuItem value="">Select</MenuItem>
                    <MenuItem value={'brazil'}>Brazil</MenuItem>
                    <MenuItem value={'england'}>England</MenuItem>
                    <MenuItem value={'united-states'}>United States</MenuItem>
                  </Select>
                )}
              />
              {errors?.country && <FormHelperText>{errors?.country?.message as string}</FormHelperText>}
            </FormControl>

            <div className="form-field">
              <TextField
                id="linkedin"
                label="LinkedIn / Personal Website URL"
                fullWidth
                {...register("linkedin")}
              />
            </div>

            <div className="form-field">
              <Image src={fileIcon} alt="Icon File" style={{ width: '50px', height: '60px'}}/>
              <S.TitleItemForm>Visa Categories of Interest</S.TitleItemForm>
              <div className="checkbox-group">
                <FormControlLabel
                  sx={{ display: 'block', textAlign: 'left' }}
                  label="O-1"
                  control={
                    <Checkbox
                      value="O-1"
                      {...register("visaCategories")}
                    />
                  }
                />
                <FormControlLabel
                  sx={{ display: 'block', textAlign: 'left' }}
                  label="O-1"
                  control={
                    <Checkbox
                      value="O-1"
                      {...register("visaCategories")}
                    />
                  }
                />
                <FormControlLabel
                  sx={{ display: 'block', textAlign: 'left' }}
                  label="EB-1A"
                  control={
                    <Checkbox
                      value="EB-1A"
                      {...register("visaCategories")}
                    />
                  }
                />
                <FormControlLabel
                  sx={{ display: 'block', textAlign: 'left' }}
                  label="EB-2 NIW"
                  control={
                    <Checkbox
                      value="EB-2 NIW"
                      {...register("visaCategories")}
                    />
                  }
                />
                <FormControlLabel
                  sx={{ display: 'block', textAlign: 'left' }}
                  label="I don't know"
                  control={
                    <Checkbox
                      value="I don't know"
                      {...register("visaCategories")}
                    />
                  }
                />
              </div>
            </div>

            <div className="form-field">
              <Image src={heartIcon} alt="Icon File" style={{ width: '50px', height: '60px'}}/>
              <S.TitleItemForm>How can we help you?</S.TitleItemForm>
              <TextField
                id="howCanHelp"
                multiline
                minRows={4}
                fullWidth             
                placeholder="What is your current status and when does it expire? What is your past immigration history? Are you looking for long-term permanent residence or short-term employment visa or both? Are there any timeline considerations?"
                {...register("howCanHelp")}
              />
            </div>
            <ButtomCustom type="submit" variant="contained">Submit</ButtomCustom>
          </Stack>
        </form>
      </S.GroupForm>
    </S.MainContent>
  );
};

export default FormAssessment;
