# Simple Movie Database App

This simple movie database application shows data provided by the OMDb API. The app was made in React using the `Next.js` framework and `TypeScript`. It uses all the latest features of Next 13 like the `app router`, `server components`, as well as `server actions`. 

## Security Measures

In order not to leak the API key to the client, I have made it an environment variable called "OMDB_API_KEY". This variable was therefore only accessed in server components ([`src/app/favorites/page.tsx`](src/app/favorites/page.tsx)) and server actions ([`src/redux/features/GetSearchResults.ts`](src/redux/features/GetSearchResults.ts)). It was never passed to the client.

## UI Framework

UI was made using `shadcn/ui` which is an open-source framework built on top of `radix ui` and `tailwindcss`. Shadcn components are located: ([`src/components/ui`](src/components/ui)). I like using it because it gives me full ownership and control over the components, while simply using tailwind.

## State Management

Global state management was done using `redux`. There are 2 slices: one for the search states and for the favorites.

### Search Slice 
[`src/redux/features/SearchSlice.ts`](src/redux/features/SearchSlice.ts)

The search slice stores the page number, search query, search results, and the subsequent search results. Since I went with pagination rather than endless scrolling, I decided to fetch the first 2 pages on the first search because there was no other way of reliably telling whether to render the next page button or not. When the page is incremented or decremented, only one request is made and the 2 results states are reassigned accordingly. For fetching the results, I have used an RTK thunk.

### Favorites Slice 
[`src/redux/features/FavoritesSlice.ts`](src/redux/features/FavoritesSlice.ts)

Stores an array of favorite movies with basic information about the movie. This way, it is not necessary to fetch things like the image URL or the movie title when the user navigates to the favorites page. The client-side persistence of the favorites is done purely using local storage, which is accessed on initial page render from the [redux provider file](src/redux/provider.tsx). Using `redux-persist` was not trivial due to Next.js server-side rendering.

## Deployment

The project is deployed on Vercel: [https://movie-database-gules.vercel.app/](https://movie-database-gules.vercel.app/).
