# netflix-dummy

## Problem solution thinking

This project was made thinking about reusability and scalability. Here we use [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html) which boosts reusability with the use of composable functions, and [Vuex](https://next.vuex.vuejs.org/) in order to simulate real backend data handling, in this case movies, mocking a movie object simulating a backend API response data.

For the netflix card we have 3 states: **thumbnail**, **hover**, **expanded**. With the first two states '('**thumbnail** and **hover**')' I use a [movie card base component](/src/components/MovieCard.vue), in this component we have a function handling the hover effect conditionally rendering the [controlls section component](/src/components/CardControls.vue) in the card hover state which contains all the controlls and info regarding the hovered '('selected')' movie. Then with the **exapnded** state we have a [Modal](/src/components/Modal.vue) reusable component with a slot used as a portal so the modal always render in front over all the DOM elements in the app along with a [Scrim](/src/components/Scrim.vue). Inside this modal we have the [MovieModal](/src/components/MovieModal.vue) component containing all the info showed in the expanded version of the card, with an easy way to add more, for example using the reusable component of [MovieModalInfoDisplay](/src/components/MovieModalInfoDisplay.vue).

In vuex we have two main stores: the first one [movieCard](/src/store/modules/movieCard.js) is used for handling the general movieCard state and interaction with the modal used while expanded, while the other [movies](/src/store/modules/movies.js) handles all the movie info fetching and movie selection so the selected component work as intended rendering the correct data, also handles all the interactions regarding the user with the movie card, for example, like or dislike a movie for any given user saving that choice and sending it to backend.

## Project setup

This is the first step for running this project.

```
yarn install
```

### Compiles and hot-reloads for development

Use this to start a Vue server with the app locally with hot reload enabled.

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```
