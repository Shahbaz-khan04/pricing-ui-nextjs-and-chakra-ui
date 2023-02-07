import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      textAlign={{ base: "left", md: "left", lg: "center" }}
      bg="#6B46C1"
      pt="90px"
      pb="198px"
      color="white"
      px ='20px'
    >
      <Heading fontSize="46px" fontWeight="800">
        Simple Pricing for your business
      </Heading>
      <Text fontWeight="500" fontSize="24px" pt="15px">
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  );
}
