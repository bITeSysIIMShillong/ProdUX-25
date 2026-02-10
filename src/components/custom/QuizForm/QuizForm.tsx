import { useState } from "react";
import { Box, VStack, Heading } from "@chakra-ui/react";
import { Toaster } from "../../ui/toaster";
import { motion } from "framer-motion";
import axios from "axios";
import { API_ENDPOINT } from "../../../utils/constants";
import createToaster from "../FormElements/Toaster";
import InputComponent from "../FormElements/Input";
import SubmitButton from "../FormElements/SubmitButton";

export default function QuizForm() {
  const [formData, setFormData] = useState({
    teamName: "",
    leaderName: "",
    member2Name: "",
    member3Name: "",
    member4Name: "",
    leaderOfficialMail: "",
    leaderRegistrationNumber: "",
  });

  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (formData.teamName.length < 3 || formData.teamName.length > 50) {
      createToaster({
        title: "Invalid Team Name",
        description: "Name must be 3-50 characters.",
        type: "error",
      });
      return false;
    }
    if (formData.leaderName.length < 3 || formData.leaderName.length > 50) {
      createToaster({
        title: "Invalid Leader Name",
        description: "Name must be 3-50 characters.",
        type: "error",
      });
      return false;
    }
    if (formData.member2Name.length < 3 || formData.member2Name.length > 50) {
      createToaster({
        title: "Invalid Member 2 Name",
        description: "Name must be 3-50 characters.",
        type: "error",
      });
      return false;
    }
    if (formData.member3Name.length < 3 || formData.member3Name.length > 50) {
      createToaster({
        title: "Invalid Member 3 Name",
        description: "Name must be 3-50 characters.",
        type: "error",
      });
      return false;
    }
    if (formData.member4Name.length < 3 || formData.member4Name.length > 50) {
      createToaster({
        title: "Invalid Member 4 Name",
        description: "Name must be 3-50 characters.",
        type: "error",
      });
      return false;
    }
    if (!/^[a-zA-Z0-9]{5,15}$/.test(formData.leaderRegistrationNumber)) {
      createToaster({
        title: "Invalid Registration Number",
        description: "Must be 5-15 alphanumeric characters.",
        type: "error",
      });
      return false;
    }
    if (
      !/^[a-zA-Z0-9._%+-]+@iimshillong\.ac\.in$/.test(
        formData.leaderOfficialMail
      )
    ) {
      createToaster({
        title: "Invalid Email",
        description: "Email must be in iimshillong.ac.in domain.",
        type: "error",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    setLoading(true);
    e.preventDefault();
    if (validateForm()) {
      try {
        await axios.post(`${API_ENDPOINT}/quiz/register`, formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        createToaster({
          title: "Registration successful!",
          description: "Redirecting to main page...",
          type: "success",
        });
        setTimeout(() => {
          window.location.href = "/register";
        }, 2000);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          createToaster({
            title: "Registration Failed",
            description: error?.response?.data?.message,
            type: "error",
          });
        } else {
          createToaster({
            title: "Registration Failed",
            description: "An unexpected error occurred.",
            type: "error",
          });
        }
      }
    }
    setLoading(false);
  };

  return (
    <>
      <Toaster />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box
          p={8}
          maxW="500px"
          mx="auto"
          borderRadius="lg"
          boxShadow="0px 0px 15px rgba(0, 255, 255, 0.4)"
          bg="rgba(25, 25, 25, 0.8)"
          backdropFilter="blur(12px)"
          color="white"
          mt={10}
          mb={10}
        >
          <Heading
            textAlign="center"
            mb={4}
            color="cyan.400"
            size="4xl"
            fontFamily="iceland"
          >
            Registration Form
          </Heading>
          <VStack as="form" gap={4}>
            <InputComponent
              placeHolder="Team Name"
              type="text"
              value={formData.teamName}
              onChange={(e) =>
                setFormData({ ...formData, teamName: e.target.value })
              }
            />
            <InputComponent
              placeHolder="Leader Name"
              type="text"
              value={formData.leaderName}
              onChange={(e) =>
                setFormData({ ...formData, leaderName: e.target.value })
              }
            />
            <InputComponent
              placeHolder="Leader Registration Number"
              type="text"
              value={formData.leaderRegistrationNumber}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  leaderRegistrationNumber: e.target.value,
                })
              }
            />
            <InputComponent
              placeHolder="Leader Official Email"
              type="text"
              value={formData.leaderOfficialMail}
              onChange={(e) =>
                setFormData({ ...formData, leaderOfficialMail: e.target.value })
              }
            />
            <InputComponent
              placeHolder="Member 2 Name"
              type="text"
              value={formData.member2Name}
              onChange={(e) =>
                setFormData({ ...formData, member2Name: e.target.value })
              }
            />
            <InputComponent
              placeHolder="Member 3 Name"
              type="text"
              value={formData.member3Name}
              onChange={(e) =>
                setFormData({ ...formData, member3Name: e.target.value })
              }
            />
            <InputComponent
              placeHolder="Member 4 Name"
              type="text"
              value={formData.member4Name}
              onChange={(e) =>
                setFormData({ ...formData, member4Name: e.target.value })
              }
            />
            <SubmitButton
              CTA="Register"
              handleSubmit={handleSubmit}
              loading={loading}
            />
          </VStack>
        </Box>
      </motion.div>
    </>
  );
}
