import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import CheckIcon from "./icons/CheckIcon";

export default function Pricing() {
  return (
    <Box
      maxW="850px"
      // short form
      mx={{base:"15px", lg:"auto"}}
      // full form
      // ml={{base:"15px", lg:"auto"}}
      // mr={{base:"15px", lg:"auto"}}
      mt="-140px"
      borderRadius="14px"
      overflow="hidden"
      boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
    >
      <Flex direction={{base: "column", lg:"row",}} >
        {/* Left Box */}
        <Box bg="#E5E5E5" textAlign="center" p='40px'>
          <Text fontWeight="bold" fontSize="24px">
            Premium PRO
          </Text>
          <Heading fontSize="60px">$329</Heading>
          <Text>billed just once</Text>
          <Button mt="20px" bg="#805AD5" color="white" w="282px">
            Get Started
          </Button>
        </Box>
        {/* Rigth Box */}
        <Box bg="white" pt="50px" pl="20px">
          <Text mb="24px">
            Access these features when you get this pricing package for your
            business.
          </Text>
          <HStack mb="16px">
            <CheckIcon />
            <Text>International calling and messaging API</Text>
          </HStack>
          <HStack mb="16px">
            <CheckIcon />
            <Text>Additional phone numbers</Text>
          </HStack>
          <HStack mb="16px">
            <CheckIcon />
            <Text>Automated messages via Zapier</Text>
          </HStack>
          <HStack mb="16px">
            <CheckIcon />
            <Text>24/7 support and consulting</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
