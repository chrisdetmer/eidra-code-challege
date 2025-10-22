'use client';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface RestaurantCardProps {
  restaurant: {
    id: string,
    name: string,
    rating: number,
    filter_ids: string[],
    image_url: string,
    delivery_time_minutes: number,
    price_range_id: string
  }
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {

  const viewRestaurant = (restaurantName: string) => {
    console.log(`You picked ${restaurantName}`)
  }
  return (
    <Card 
      variant="outlined" 
      sx={{ 
        padding: '16px', 
        cursor: 'pointer', 
        backgroundImage: `url(${restaurant.image_url})`,
        backgroundPosition: '120% -30px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '50%' 
      }} 
      onClick={() => viewRestaurant(restaurant.name)}
    >
      <Stack sx={{ justifyContent: 'space-between', minHeight: '150px' }}>
        <Stack direction="row" spacing={1}>
          <Chip label="Open" variant="outlined" />
          <Chip label={`${restaurant.delivery_time_minutes} min`} variant="outlined" />
        </Stack>
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-end'}}>
          <Typography variant="h5" component="h5">
            {restaurant.name}
          </Typography>
          <IconButton sx={{ backgroundColor: '#00703A', color: 'white', width: '32px', height: '32px' }}>
            <ArrowForwardIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
    </Card>
  )
}