import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import { login } from "../../../store/slices/authSlice";
import axios from "axios";

import {
  Box,
  Input,
  Button,
  VStack,
  Heading,
  Text,
  HStack,
  Link,
  Alert,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { API_ENDPOINT } from "../../../utils/constants";

const MotionBox = motion(Box);

const SignupForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const alertContent = (
    <Alert.Root status="error" variant="solid" colorPalette="red">
      <Alert.Indicator />
      <Alert.Title fontSize="lg">{alertText}</Alert.Title>
    </Alert.Root>
  );

  const handleSignup = async () => {
    setLoading(true);
    if (!email || !password || email === "" || password === "") {
      setAlertText("Enter all details");
      setError(true);
      setLoading(false);
      setTimeout(() => setError(false), 10000);
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!/^[a-zA-Z0-9._%+-]+@iimshillong\.ac\.in$/.test(email)) {
      setAlertText("Enter official IIM Shillong email");
      setError(true);
      setLoading(false);
      setTimeout(() => setError(false), 10000);
      return;
    }
    try {
      const response = await axios.post(`${API_ENDPOINT}/auth/signup`, {
        email,
        password,
      });
      dispatch(login(response.data.token));
      setLoading(false);

      const redirectTo = localStorage.getItem("redirectPath") || "/";
      localStorage.removeItem("redirectPath");

      navigate(redirectTo, { replace: true });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setAlertText(error.response.data.message);
      } else {
        setAlertText("An unexpected error occurred");
      }
      setError(true);
      setLoading(false);
      setTimeout(() => setError(false), 10000);
      console.error("Signup failed", error);
      setLoading(false);
    }
  };

  const inputSize = { base: "md" as const, md: "2xl" as const };
  const headingSize = { base: "xl" as const, md: "5xl" as const };
  const textSize = { base: "md" as const, md: "2xl" as const };

  return (
    <MotionBox
      p={{ base: 4, md: 6 }}
      maxW={{ base: "90%", md: "fit-content" }}
      minW={{ base: "90%", md: "400px" }}
      mx="auto"
      mt="3vh"
      mb="3vh"
      borderRadius="2xl"
      bg="rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(10px)"
      boxShadow="xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <VStack gap={4}>
        <Heading size={headingSize} color="white" fontFamily="Iceland">
          Welcome
        </Heading>
        <Text fontSize={textSize} color="gray.200">
          Sign up to continue
        </Text>

        <Input
          type="email"
          placeholder="Official Email"
          onChange={(e) => setEmail(e.target.value)}
          size={inputSize}
          borderRadius="lg"
          _focus={{ borderColor: "blue.400", boxShadow: "0 0 10px #4299E1" }}
        />

        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          size={inputSize}
          borderRadius="lg"
          _focus={{ borderColor: "blue.400", boxShadow: "0 0 10px #4299E1" }}
        />

        <Input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          size={inputSize}
          borderRadius="lg"
          _focus={{ borderColor: "blue.400", boxShadow: "0 0 10px #4299E1" }}
        />

        <Button
          size={inputSize}
          onClick={handleSignup}
          loading={loading}
          w="full"
          transition="all 0.3s"
          variant="solid"
          _hover={{ transform: "scale(1.05)", bg: "green.400" }}
        >
          Sign Up <RiArrowRightLine />
        </Button>
        {error ? alertContent : null}
        <HStack gap={4} justify="center" mt={4}>
          <Text color="gray.200" textStyle="md">
            Have an account?
          </Text>
          <Button
            as={Link}
            color="green.400"
            variant="ghost"
            fontSize="md"
            onClick={() => (window.location.href = "/login")}
          >
            Login here
          </Button>
        </HStack>
      </VStack>
    </MotionBox>
  );
};

export default SignupForm;
