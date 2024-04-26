"use client";

import {
  Button,
  Center,
  Container,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
  Checkbox,
} from "@chakra-ui/react";
import { Field, Form, Formik, useField } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { UserSchema } from "./_validationSchema/user.schema";

const FormikInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={meta.touched && !!meta.error}>
      <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
      <Field {...field} {...props} />
      {meta.touched && meta.error ? <FormErrorMessage>{meta.error}</FormErrorMessage> : null}
    </FormControl>
  );
};

export default function Home() {
  return (
    <Center h="100vh">
      <Container p={"5rem"}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={toFormikValidationSchema(
            UserSchema.pick({ email: true, password: true })
          )}
          onSubmit={(values) => {
            console.log("🚀 ~ Home ~ values:", values);
          }}>
          {() => (
            <Form>
              <VStack spacing={4} align="flex-start">
                <FormikInput label="Email" as={Input} name="email" type="email" variant="filled" />
                <FormikInput
                  label="Password"
                  as={Input}
                  name="password"
                  type="password"
                  variant="filled"
                />

                <Button type="submit" colorScheme="purple" width="full">
                  Login
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </Container>
    </Center>
  );
}
