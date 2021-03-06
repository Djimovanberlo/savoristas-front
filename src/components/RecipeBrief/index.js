import React from "react";

import {
  Grid,
  Image,
  Text,
  Box,
  Divider,
  ListIcon,
  Link,
} from "@chakra-ui/core";
import { IoIosTimer, IoIosPerson } from "react-icons/io";

import Ingredientpopover from "./Ingredientpopover";

export default function RecipeBrief({ recipe }) {
  const {
    cookTime,
    recipeYield,
    name,
    image,
    description,
    ingredients,
    id,
  } = recipe;

  const recipeUrl = `recipe/${id}`;

  return (
    <Box p={3} Width="20%">
      <Image src={image} alt={name} />

      <Box
        h="auto"
        minH="120px"
        borderWidth="1px"
        boxShadow="md"
        bg="white"
        borderRadius="4px"
      >
        <Box pt={3} px={3} fontWeight="semibold" color="green.600">
          {name}
        </Box>

        <Box
          pt={1}
          pr={3}
          pl={3}
          fontSize="sm"
          fontStyle="italic"
          color="#5a6268"
        >
          {description}
        </Box>
        <Grid templateColumns="1fr 1fr" p={1}>
          <Box>
            <Ingredientpopover ingredients={ingredients} id={id} />
          </Box>
          <Box>
            <Text pr={2} textAlign="right" fontSize="xs" color="#5a6268">
              <ListIcon icon="chevron-right" color="green.500" />{" "}
              <Link href={recipeUrl}>details</Link>
            </Text>
          </Box>
        </Grid>

        <Divider />
        <Grid p={2} templateColumns="repeat(4, 1fr)">
          <Box as={IoIosTimer} />
          <Text fontSize="xs">{cookTime}</Text>
          <Box as={IoIosPerson} />
          <Text fontSize="xs">{recipeYield}</Text>
        </Grid>
      </Box>
    </Box>
  );
}
