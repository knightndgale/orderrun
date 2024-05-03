"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import useConnectWebSocket from "../_hook/useConnectWebSocket";
import { directus } from "../_directus/webSocket";
import debounce from "lodash.debounce";
import { searchMenu } from "./request";

const Menu = () => {
  useConnectWebSocket(subscribe);
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function subscribe() {
    const menuItemSubs = await directus.subscribe("menu_item");
    for await (const item of menuItemSubs.subscription) {
      if (item.event === "init") {
        setData(item.data);
      }

      if (item.event === "update") {
        setData((prevState) => {
          return [item.data[0], ...prevState.filter((value) => value.id !== item.data[0].id)];
        });
      }
      if (item.event === "delete") {
        setData((prevState) => {
          return [...prevState.filter((value) => value.id !== item.data[0])];
        });
      }

      if (item.event === "create") {
        setData((prevState) => {
          return [item.data[0], ...prevState.filter((value) => value.id !== item.data[0].id)];
        });
      }
    }

    return menuItemSubs;
  }

  const debounceSearch = debounce(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const response = (await searchMenu(e.target.value)) as any[] | [];
    setData(response);
    setIsLoading(false);
  }, 1000);

  return (
    <Grid
      templateAreas={`"header header"
                  "main main"
                  `}
      gridTemplateRows={"4rem 1fr"}
      gridTemplateColumns={"160px 1fr"}
      h="95%"
      gap="2"
      color="blackAlpha.700"
      fontWeight="bold">
      <GridItem
        position={"fixed"}
        w={"100%"}
        h={"4rem"}
        zIndex={1}
        px={7}
        boxShadow="md"
        bg="white"
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        area={"header"}>
        <InputGroup w={"20rem"}>
          <InputRightElement pointerEvents="auto">
            {isLoading ? <Spinner /> : <SearchIcon color="gray.300" />}
          </InputRightElement>
          <Input
            onChange={(e) => {
              setIsLoading(true);
              debounceSearch(e);
            }}
            type="text"
            placeholder="Search menu..."
          />
        </InputGroup>
      </GridItem>

      <GridItem marginX={5} p="2" area={"main"}>
        <SimpleGrid minChildWidth="350px" overflow={"auto"} spacing={5} overflowX={"auto"}>
          {data.map((item: any, index) => {
            return (
              <Box maxW="400px" key={item.id}>
                <Card>
                  <CardBody>
                    <Image
                      borderRadius="full"
                      fallbackSrc="https://via.placeholder.com/250"
                      boxSize="250px"
                      objectFit="cover"
                      src={`http://localhost:8055/assets/${item.image}`}
                      alt="Green double couch with wooden legs"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{item.title}</Heading>
                      <Text>{item.description}</Text>
                      <Text color="blue.600" fontSize="2xl">
                        ₱ {item.price}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Button variant="solid" colorScheme="blue">
                        Add to cart
                      </Button>
                    </ButtonGroup>
                    <NumberInput ml={2} defaultValue={1} min={1} max={10}>
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </CardFooter>
                </Card>
              </Box>
            );
          })}
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
};

export default Menu;
