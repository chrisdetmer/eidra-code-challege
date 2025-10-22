
export async function getRestaurants() {
  const data = await fetch('/api/restaurants', { cache: 'force-cache', next: { revalidate: 600 } })
  const restaurants = await data.json()
  return restaurants;
}

export async function getFilters() {
  const data = await fetch('/api/filter', { cache: 'force-cache', next: { revalidate: 600 } })
  const filters = await data.json()
  return filters;
}

export async function getRestaurantOpen(id:string) {
  const data = await fetch(`/api/open/${id}`, { cache: 'force-cache', next: { revalidate: 300 } })
  const open = await data.json()
  return open;
}

export async function getRestaurantPriceRange(id:string) {
  const data = await fetch(`/api/price-range/${id}`, { cache: 'force-cache', next: { revalidate: 300 } })
  const priceRange = await data.json()
  return priceRange;
}
