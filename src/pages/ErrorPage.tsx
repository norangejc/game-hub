import NavBar from "@/components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box textAlign="center">
        <Heading size="3xl">Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "404 Page does not exist"
            : "An unexpected error occured."}
        </Text>
      </Box>
    </>
  );
}

export default ErrorPage;
