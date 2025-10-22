'use client';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface FilterListProps {
  filterDeliveryTime: () => void
}

export default function FilterList({ filterDeliveryTime }: FilterListProps) {
  return (
    <Card variant="outlined" sx={{ padding: '16px'}}>
      <Stack spacing={2}>
        <Typography variant="h4" component="h4">Filters</Typography>
        <Box>
          <Typography variant="caption" component="p" sx={{ textTransform: 'uppercase', opacity: '0.5', marginBottom: '8px' }}>Food Category</Typography>
          <Stack spacing={1} sx={{ alignItems: 'flex-start'}}>
            <Button variant="outlined">Hamburger</Button>
            <Button variant="outlined">Pizza</Button>
            <Button variant="outlined">Tacos</Button>
            <Button variant="outlined">Coffee</Button>
          </Stack>
        </Box>
        <Box>
          <Typography variant="caption" component="p" sx={{ textTransform: 'uppercase', opacity: '0.5', marginBottom: '8px' }}>Delivery Time</Typography>
          <Button variant="outlined" onClick={() => filterDeliveryTime([0, 10])}>0-10 min</Button>
          <Button variant="outlined" onClick={() => filterDeliveryTime([10, 30])}>10-30 min</Button>
          <Button variant="outlined" onClick={() => filterDeliveryTime([30, 60])}>30-60 min</Button>
          <Button variant="outlined" onClick={() => filterDeliveryTime([60])}>1 hour+</Button>
        </Box>
        <Box>
          <Typography variant="caption" component="p" sx={{ textTransform: 'uppercase', opacity: '0.5', marginBottom: '8px' }}>Price Range</Typography>
          <Button variant="outlined">$</Button>
          <Button variant="outlined">$$</Button>
          <Button variant="outlined">$$$</Button>
          <Button variant="outlined">$$$$</Button>
        </Box>
      </Stack>
    </Card>
  )
}