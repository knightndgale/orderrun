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
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik, useField } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { UserSchema } from "./_validationSchema/user.schema";
import { z } from "zod";
import { login } from "./_directus/request";
import { useRouter } from "next/navigation";

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
type FormType = Pick<z.infer<typeof UserSchema>, "email" | "password">;

export default function Home() {
  const toast = useToast();
  const router = useRouter();
  const TOAST_ID = "login_toast";
  const onSubmitHandler = async (value: FormType) => {
    const response = await login(value);

    if (response?.success === false && !toast.isActive(TOAST_ID)) {
      toast({
        id: TOAST_ID,
        isClosable: true,
        position: "top-right",
        status: "error",
        title: response?.message,
      });
      return;
    }

    router.push("/menu");
  };
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
          onSubmit={onSubmitHandler}>
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
                <Button type="submit" width="full">
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
