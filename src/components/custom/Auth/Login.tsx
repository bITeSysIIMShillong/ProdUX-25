import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { RiArrowRightLine } from "react-icons/ri";
import { login } from "../../../store/slices/authSlice";

import {
  Box,
  Input,
  Button,
  VStack,
  Heading,
  Text,
  Link,
  HStack,
  Alert,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { API_ENDPOINT } from "../../../utils/constants";

const MotionBox = motion(Box);

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const handleLogin = async () => {
    setLoading(true);
    if (!email || !password || email === "" || password === "") {
      setAlertText("Enter both email and password");
      setError(true);
      setLoading(false);
      setTimeout(() => setError(false), 10000);
      return;
    } else if (!/^[a-zA-Z0-9._%+-]+@iimshillong\.ac\.in$/.test(email)) {
      setAlertText("Enter official IIM Shillong email");
      setError(true);
      setLoading(false);
      setTimeout(() => setError(false), 10000);
      return;
    }
    try {
      const response = await axios.post(`${API_ENDPOINT}/auth/login`, {
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
      console.error("Login failed", error);
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
          Welcome Back
        </Heading>
        <Text fontSize={textSize} color="gray.200">
          Login to continue
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

        <Button
          size={inputSize}
          onClick={handleLogin}
          loading={loading}
          w="full"
          transition="all 0.3s"
          variant="solid"
          _hover={{ transform: "scale(1.05)", bg: "cyan.400" }}
        >
          Login <RiArrowRightLine />
        </Button>
        {error ? alertContent : null}
        <HStack gap={4} justify="center" mt={4}>
          <Text color="gray.200" textStyle="md">
            Don't have an account?
          </Text>
          <Button
            as={Link}
            color="cyan.400"
            variant="ghost"
            fontSize="md"
            onClick={() => (window.location.href = "/signup")}
          >
            Sign up here
          </Button>
        </HStack>
      </VStack>
    </MotionBox>
  );
};

export default LoginForm;
