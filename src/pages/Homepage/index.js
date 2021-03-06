import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Divider } from "@chakra-ui/core";
import { Box } from "@chakra-ui/core";
import { Grid } from "@chakra-ui/core";
import { Text } from "@chakra-ui/core";
import { CircularProgress } from "@chakra-ui/core";

import RecipeBrief from "../../components/RecipeBrief";
import Palette from "../../components/Palette";
import CreatePaletteButton from "../../components/CreatePaletteButton";
import CreateRecipeButton from "../../components/CreateRecipeButton";

import { fetchPalettes } from "../../store/palettes/actions";
import { fetchRecipes } from "../../store/recipes/actions";

import { selectPalettes } from "../../store/palettes/selectors";
import { selectRecipes } from "../../store/recipes/selectors";
import { selectFilteredRecipes } from "../../store/filteredrecipes/selectors";
import Filterresult from "../../components/FilterResult";

export default function Homepage() {
  const dispatch = useDispatch();
  const palettes = useSelector(selectPalettes);
  const recipes = useSelector(selectRecipes);

  const filteredRecipes = useSelector(selectFilteredRecipes);
  const filterResult = filteredRecipes && filteredRecipes.length;

  useEffect(() => {
    dispatch(fetchPalettes());
    dispatch(fetchRecipes());
  }, [dispatch]);

  const loader = (
    <CircularProgress isIndeterminate color="green"></CircularProgress>
  );

  const allRecipesList = recipes.length
    ? recipes.map((recipe) => <RecipeBrief key={recipe.id} recipe={recipe} />)
    : loader;

  const recipesList = filteredRecipes.length
    ? filteredRecipes.map((recipe) => (
        <RecipeBrief key={recipe.id} recipe={recipe} />
      ))
    : allRecipesList;

  const paletteList = palettes.length
    ? palettes.map((palette) => (
        <Palette key={palette.id} foodPalette={palette} />
      ))
    : loader;

  return (
    <Box bg="#F7F3E7">
      <Box width="80%" marginLeft="auto" marginRight="auto">
        <Text p={2} fontSize="4xl" color="#5a6268">
          De laatste smaakpaletten
        </Text>

        <Grid templateColumns="repeat(4, 1fr)">
          {paletteList}
          <CreatePaletteButton />
          <Filterresult filterResult={filterResult} />
        </Grid>
        <Divider />
        <Text p={2} fontSize="4xl" color="#5a6268">
          De laatste recepten
        </Text>
        <Grid templateColumns="repeat(4, 1fr)">
          {recipesList}
          <CreateRecipeButton />
        </Grid>
      </Box>
    </Box>
  );
}
