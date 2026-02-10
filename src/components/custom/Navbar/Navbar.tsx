import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  VStack,
  Image,
} from "@chakra-ui/react";
import { MdMenu, MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.scss";

const MotionBox = motion.create(Box);
const MotionButton = motion.create(Button);

function Navbar() {
  const navigateTo = (path: string) => {
    setTimeout(() => {
      if (window.location.pathname !== path) window.location.href = path;
      else setIsOpen(false);
    }, 200);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      as="nav"
      px={4}
      py={2}
      color="white"
      position="sticky"
      top={0}
      zIndex={20}
      bg="black"
      width="100%"
      boxShadow="md"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <a
            href="https://iimshillong.ac.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/IIMS-logo.png"
              alt="College Logo"
              width={{ base: "40px", md: "60px" }}
              height="auto"
              objectFit="contain"
              mr={{ md: 4, base: 1 }}
            />
          </a>

          <Button
            size={{ base: "md", md: "xl" }}
            className={
              window.innerWidth >= 768
                ? "click-btn btn-style506"
                : "underline-button"
            }
            style={{
              color: window.innerWidth < 768 ? "gold" : "",
              textTransform: window.innerWidth < 768 ? "none" : undefined,
            }}
            rounded="l2"
            onClick={() => navigateTo("/")}
          >
            bITeSys
          </Button>
        </Flex>

        {/* Hamburger Menu Icon for Mobile */}
        <IconButton
          display={{ base: "block", md: "none" }}
          onClick={toggleMenu}
          bg="transparent"
          color="white"
          _hover={{ bg: "gray.700" }}
          size="2xl"
          p={{ base: "16px", md: "8px" }}
        >
          {isOpen ? <MdClose /> : <MdMenu />}
        </IconButton>

        {/* Desktop Navigation */}
        <HStack as="nav" gap={8} display={{ base: "none", md: "flex" }}>
          <Button
            className="underline-button"
            onClick={() => navigateTo("/events")}
          >
            events
          </Button>
          <Button
            className="underline-button"
            onClick={() => navigateTo("/sponsors")}
          >
            sponsors
          </Button>
          <Button
            className="underline-button"
            onClick={() => navigateTo("/about")}
          >
            about
          </Button>
          <Button
            className="click-btn btn-style500"
            onClick={() => navigateTo("/register")}
          >
            REGISTER
          </Button>
        </HStack>
      </Flex>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            position="fixed"
            top={0}
            left={0}
            width="100vw"
            height="100vh"
            bg="black"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            zIndex={15}
          >
            {/* Close Icon inside menu */}
            <IconButton
              aria-label="Close Menu"
              position="absolute"
              top="20px"
              right="20px"
              bg="transparent"
              color="white"
              size="lg"
              onClick={toggleMenu}
              _hover={{ bg: "gray.700" }}
            >
              <MdClose />
            </IconButton>

            <VStack gap={8} fontSize="2xl" fontWeight="bold">
              <MotionButton
                className="underline-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigateTo("/events");
                }}
              >
                Events
              </MotionButton>
              <MotionButton
                className="underline-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigateTo("/sponsors");
                }}
              >
                Sponsors
              </MotionButton>
              <MotionButton
                className="underline-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigateTo("/about");
                }}
              >
                About
              </MotionButton>
              <MotionButton
                className="click-btn btn-style500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigateTo("/register");
                }}
              >
                REGISTER
              </MotionButton>
            </VStack>
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default Navbar;
