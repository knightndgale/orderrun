"use client";
import React from "react";
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
  InputLeftElement,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import useConnectWebSocket from "../_hook/useConnectWebSocket";
import { directus } from "../_directus";

const Menu = () => {
  useConnectWebSocket();
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
          <InputLeftElement pointerEvents="auto">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Search menu..." />
        </InputGroup>
      </GridItem>

      <GridItem marginX={5} p="2" area={"main"}>
        <SimpleGrid minChildWidth="350px" overflow={"auto"} spacing={5} overflowX={"auto"}>
          <Box maxW="400px">
            <Card>
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy
                    toned spaces and for people who love a chic design with a sprinkle of vintage
                    design.
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    ₱ 450
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
          <Box maxW="400px">
            <Card>
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy
                    toned spaces and for people who love a chic design with a sprinkle of vintage
                    design.
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    ₱ 450
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
          <Box maxW="400px">
            <Card>
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy
                    toned spaces and for people who love a chic design with a sprinkle of vintage
                    design.
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    ₱ 450
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
          <Box maxW="400px">
            <Card>
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy
                    toned spaces and for people who love a chic design with a sprinkle of vintage
                    design.
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    ₱ 450
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
          <Box maxW="400px">
            <Card>
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy
                    toned spaces and for people who love a chic design with a sprinkle of vintage
                    design.
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    ₱ 450
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
          <Box maxW="400px">
            <Card>
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy
                    toned spaces and for people who love a chic design with a sprinkle of vintage
                    design.
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    ₱ 450
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
          <Box maxW="400px">
            <Card>
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy
                    toned spaces and for people who love a chic design with a sprinkle of vintage
                    design.
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    ₱ 450
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
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
};

export default Menu;

// <CardBody>
//   <Image
//     src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
//     alt="Green double couch with wooden legs"
//     borderRadius="lg"
//   />
//   <Stack mt="6" spacing="3">
//     <Heading size="md">Living room Sofa</Heading>
//     <Text>
//       This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy
//       toned spaces and for people who love a chic design with a sprinkle of vintage
//       design.
//     </Text>
//     <Text color="blue.600" fontSize="2xl">
//       ₱ 450
//     </Text>
//   </Stack>
// </CardBody>
// <Divider />
// <CardFooter>
//   <ButtonGroup spacing="2">
//     <Button variant="solid" colorScheme="blue">
//       Add to cart
//     </Button>
//   </ButtonGroup>
//   <NumberInput ml={2} defaultValue={1} min={1} max={10}>
//     <NumberInputField />
//     <NumberInputStepper>
//       <NumberIncrementStepper />
//       <NumberDecrementStepper />
//     </NumberInputStepper>
//   </NumberInput>
// </CardFooter>
// </Card>
// <Card>
// <CardBody>
//   <Image
//     src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
//     alt="Green double couch with wooden legs"
//     borderRadius="lg"
//   />
//   <Stack mt="6" spacing="3">
//     <Heading size="md">Living room Sofa</Heading>
//     <Text>
//       This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy
//       toned spaces and for people who love a chic design with a sprinkle of vintage
//       design.
//     </Text>
//     <Text color="blue.600" fontSize="2xl">
//       ₱ 450
//     </Text>
//   </Stack>
// </CardBody>
// <Divider />
// <CardFooter>
//   <ButtonGroup spacing="2">
//     <Button variant="solid" colorScheme="blue">
//       Add to cart
//     </Button>
//   </ButtonGroup>
//   <NumberInput ml={2} defaultValue={1} min={1} max={10}>
//     <NumberInputField />
//     <NumberInputStepper>
//       <NumberIncrementStepper />
//       <NumberDecrementStepper />
//     </NumberInputStepper>
//   </NumberInput>
// </CardFooter>
// </Card>

// <Button width="full" onClick={getMenuHandler}>
//           Get Data
//         </Button>
//         <Button width="full" mt={5} onClick={getTokenHandler}>
//           Get Token
//         </Button>
//         {JSON.stringify(token)}
