import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useAuth } from "../context/UseAuth";

export default function Review() {
  const {
    order,
    firstname,
    lastname,
    address,
    city,
    state,
    zipcode,
    country,
    cardName,
    cardExpiry,
    cardNumber,
  } = useAuth();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {order.listings.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0, color: "black" }}>
            <ListItemText
              primary={product.name}
              secondary={`Quantity:${product.quantity}`}
            />
            <Typography variant="body2">
              ${product.price * product.quantity}
            </Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0, color: "black" }}>
          <ListItemText primary="Total" />
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, color: "black" }}
          >
            ${order.total}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {firstname} {lastname}
          </Typography>
          <Typography gutterBottom>
            {`${address}, ${city}, ${state}, ${zipcode}, ${country}`}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>Card Type:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>VISA</Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>Card Owner:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{cardName}</Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>Card Number:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{cardNumber}</Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>Card Expiry:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{cardExpiry}</Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
