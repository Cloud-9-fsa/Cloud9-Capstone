import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useAuth } from "../context/UseAuth";

export default function AddressForm() {
  const {
    setFirstname,
    setLastname,
    setAddress,
    setCity,
    setState,
    setZipcode,
    setCountry,
  } = useAuth();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            id="address"
            name="address"
            label="Address line "
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={(e) => {
              setCity(e.target.value);
            }}
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) => {
              setState(e.target.value);
            }}
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={(e) => {
              setZipcode(e.target.value);
            }}
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
