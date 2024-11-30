"use client";

import { Container, Grid, Box, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import TextFiled from "./components/muiForm/TextFiled";

export default function Home() {
  return (
    <>
      <Grid container spacing={3}>
        {/* Header Section */}
        <Grid item xs={12}>
          <Typography variant="h5" align="center" gutterBottom>
            Welcome to the Homepage
          </Typography>
        </Grid>

        {/* Form Section */}
        <Grid item xs={12}>
          <Container maxWidth="md">
            <Box sx={{ marginTop: 5, marginBottom: 8 }}>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                <Form>
                  <Grid container spacing={3}>
                    {/* First Name & Last Name */}
                    <Grid item xs={12}>
                      <Typography>Name</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <TextFiled name="firstName" label="First Name" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                      <TextFiled name="lastName" label="Last Name" fullWidth />
                    </Grid>

                    {/* Email */}
                    <Grid item xs={12}>
                      <Typography>Email</Typography>
                      <TextFiled name="email" label="Email" fullWidth />
                    </Grid>

                    {/* Password */}
                    <Grid item xs={12}>
                      <Typography>Password</Typography>
                      <TextFiled
                        name="password"
                        label="Password"
                        type="password"
                        fullWidth
                      />
                    </Grid>

                    {/* Submit Button */}
                    <Grid item xs={12} textAlign="center">
                      <button
                        type="submit"
                        style={{
                          padding: "10px 20px",
                          backgroundColor: "#1976d2",
                          color: "white",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                        }}
                      >
                        Submit
                      </button>
                    </Grid>
                  </Grid>
                </Form>
              </Formik>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
