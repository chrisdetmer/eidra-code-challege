'use client';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FilterCard from "./components/FilterCard";
import FilterList from "./components/FilterList";
import RestaurantCard from "./components/RestaurantCard";
import { useEffect, useState } from "react";
import { getRestaurants, getFilters } from "./api/getData";
import { getRouteRegex } from "next/dist/shared/lib/router/utils/route-regex";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [filters, setFilters] = useState([]);
  const [showRestaurantError, setShowRestaurantError] = useState(false);
  const [showFilterError, setShowFilterError] = useState(false);

  useEffect(() => {
    console.log("updating restaurant list...");
    if(restaurants.length < 1) {
      getRestaurants()
        .then(response => {
          console.log(response);
          setShowRestaurantError(false);
          setRestaurants(response.restaurants);
        })
        .catch(error => {
          console.log(error.reason);
          setShowRestaurantError(true);
        });
    }
  }, [restaurants.length]);

  useEffect(() => {
    console.log('updating filter list...');
    if(filters.length < 1) {
      getFilters()
        .then(response => {
          console.log(response);
          setShowFilterError(false);
          setFilters(response.filters);
        })
        .catch(error => {
          console.log(error.reason);
          setShowFilterError(true);
        });
    }
  }, [filters.length]);

  const filterRestaurants = (filterId:string) => {
    console.log('filtering restaurants by', filterId);
    getRestaurants().then(response => {
      const filteredRestaurants = response.restaurants.filter(obj => obj.filter_ids.includes(filterId));
      setRestaurants(filteredRestaurants);
    });
  }

  const filterDeliveryTime = (times:string[]) => {
    console.log('filtering by delivery time:', times);
  };

  return (
    <Container maxWidth="xl" sx={{ padding: '32px 16px'}}>
      <Stack spacing={4}>
        <Box component="img" src="/images/munchies-logo--web.svg" alt="Munchies" sx={{ width: '273px' }} />
        <Grid container spacing={4}>
          <Grid size={2}>
            <FilterList filterDeliveryTime={filterDeliveryTime}/>
          </Grid>
          <Grid size={10}>
            <Stack spacing={4}>
              {filters.length > 0 && (
                <Grid container spacing={2}>
                  {filters.map((filter) => (
                    <Grid key={filter.id} size={2}>
                      <FilterCard filter={filter} filterRestaurants={filterRestaurants} />
                    </Grid>
                  ))}
                </Grid>
              )}
              {filters.length < 1 && !showFilterError && <Typography component="p">Loading...</Typography>}
              {showFilterError && <Typography component="p">There was an error getting filters. Please refresh the page to try again.</Typography>}
              <Typography variant="h2" component="h2">Restaurants</Typography>
              {restaurants.length > 0 && (
                <Grid container spacing={2}>
                  {restaurants.map((restaurant) => (
                    <Grid key={restaurant.id} size={3}>
                      <RestaurantCard restaurant={restaurant} />
                    </Grid>
                  ))}
                </Grid>)}
              {restaurants.length < 1 && !showRestaurantError && <Typography component="p">Loading...</Typography>}
              {showRestaurantError && <Typography component="p">There was an error getting restaurants. Please refresh the page to try again.</Typography>}
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
