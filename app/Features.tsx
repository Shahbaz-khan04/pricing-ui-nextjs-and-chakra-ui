import React from "react";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import Icon1 from "./icons/Icon1";
import Icon2 from "./icons/Icon2";
import Icon3 from "./icons/Icon3";

export default function Features() {
  return (
    <Box maxW="750px" pt="56px" mx={{ base: "15px", lg: "auto" }} px="15px">
      <Flex direction={{ base: "column", md: "row", lg: "row" }}>
        <HStack mb="20px">
          <Icon1 />
          <Text fontWeight="800">30 days money back Guarantee</Text>
        </HStack>
        <HStack mb="20px">
          <Icon2 />
          <Text fontWeight="800">No setup fees 100% hassle-free</Text>
        </HStack>
        <HStack mb="20px">
          <Icon3 />
          <Text fontWeight="800">
            No monthly subscription Pay once and for all
          </Text>
        </HStack>
      </Flex>
    </Box>
  );
}
