import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BookCard(props) {
  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          ID: {props.bookId}
        </Typography>
        <Typography variant="h3" component="div">
          {props.bookName}
        </Typography>
        <Button variant="contained" size="small">View Trades</Button>
      </CardContent>
    </Card>
  );
}
