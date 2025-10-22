'use client';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface FilterCardProps {
  filter: {
    name: string,
    id: string,
    image_url: string
  },
  filterRestaurants: () => void
}

export default function FilterCard({ filter, filterRestaurants }: FilterCardProps) {

  const chooseFilter = () => {
    console.log(`You chose ${filter.name}`);
    filterRestaurants(filter.id);
  }
  
  return (
    <Card variant="outlined" sx={{ cursor: 'pointer', padding: '4px 0px 4px 8px' }} onClick={() => chooseFilter() }>
      <Stack direction="row" sx={{ justifyContent: 'space-between'}}>
        <Typography variant="button" sx={{ textTransform: 'capitalize'}}>{filter.name}</Typography>
        <Box component="img" src={filter.image_url} alt={filter.name} sx={{ width: '80px'}} />
      </Stack>
    </Card>
  )
}