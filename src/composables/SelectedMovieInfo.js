import { useStore } from "vuex";
import { computed } from "vue";
export default function getSelectedMovieInfo(getter) {
  const store = useStore();
  const selectedMovie = computed(() => store.getters[getter]);
  const getValueFromMovie = (property) =>
    computed(() => (selectedMovie.value ? selectedMovie.value[property] : []));
  const matchRate = computed(() =>
    selectedMovie.value ? `${selectedMovie.value.matchRate} Match` : "No movie"
  );
  const classification = getValueFromMovie("classification");
  const seasons = computed(() =>
    selectedMovie.value
      ? `${selectedMovie.value.seasons} Season${
          selectedMovie.value.seasons > 1 ? "s" : ""
        }`
      : "No movie"
  );
  const maxRes = getValueFromMovie("maxResolution");
  const genres = getValueFromMovie("genres");
  const description = getValueFromMovie("description");
  const cast = getValueFromMovie("cast");
  return {
    classification,
    matchRate,
    seasons,
    maxRes,
    genres,
    description,
    cast,
  };
}
