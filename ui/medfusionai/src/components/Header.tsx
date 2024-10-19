import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Button,
  HStack,
  Link,
  Spacer,
  Image,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import logo from '../assets/img/Logo.png';
export const Header = () => {
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate("/signin"); 
  };

  const handleLogoClick = () => {
    navigate("/"); 
  };
  return (
    <HStack>
      <Box
        bg="white"
        shadow="sm"
        px={8}
        py={3}
        borderRadius="full"
        marginLeft={"150px"}
      >
        <Flex alignItems="center">
          {/* Logo Section */}
          <HStack spacing={4}>
            <Image
              // src="../assets/img/logo.png"
              src ={logo}
              alt="Artisan Logo"
              cursor="pointer"
              onClick={handleLogoClick}
            />
          </HStack>

          {/* Navigation Links */}
          <HStack
            spacing={8}
            display={{ base: "none", md: "flex" }}
            marginLeft={"40px"}
          >
            <Link fontWeight="medium" color="gray.600" href="#">
              Products
            </Link>
            <Link fontWeight="medium" color="gray.600" href="#">
              Solutions
            </Link>
            <Link fontWeight="medium" color="gray.600" href="#">
              Resources
            </Link>
            <Link fontWeight="medium" color="gray.600" href="#">
              Pricing
            </Link>
            <Link fontWeight="medium" color="gray.600" href="#">
              Enterprise
            </Link>
          </HStack>

          <Spacer />

          {/* Login and CTA Button */}
        </Flex>
      </Box>
      <Box
        bg="white"
        shadow="sm"
        px={8}
        py={3}
        borderRadius="full"
        marginLeft={"100px"}
      >
        <Flex alignItems="center">
          {/* Logo Section */}

          {/* Login and CTA Button */}
          <HStack spacing={3}>
            <Button variant="link" color="gray.600" onClick={handleLoginClick}>
              Login
            </Button>
            <Button
              colorScheme="purple"
              borderRadius="full"
              rightIcon={<ArrowForwardIcon />}
              px={6}
            >
              Book A Demo
            </Button>
          </HStack>
        </Flex>
      </Box>
    </HStack>
  );
};
