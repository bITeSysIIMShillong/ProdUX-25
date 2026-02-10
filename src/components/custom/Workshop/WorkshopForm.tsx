import { useState } from "react";
import { Box, VStack, Heading, createListCollection } from "@chakra-ui/react";
import { Toaster } from "../../ui/toaster";
import { motion } from "framer-motion";
import axios from "axios";
import { API_ENDPOINT } from "../../../utils/constants";
import createToaster from "../FormElements/Toaster";
import InputComponent from "../FormElements/Input";
import SelectComponent from "../FormElements/Select";
import SubmitButton from "../FormElements/SubmitButton";

const experienceLevels = createListCollection({
  items: [
    { label: "Beginner", value: "Beginner" },
    { label: "Intermediate", value: "Intermediate" },
    { label: "Advanced", value: "Advanced" },
    { label: "Refresher", value: "Refresher" },
  ],
});

interface WorkshopProps {
  workshopType: string;
}

const formatMobileNumber = (mobileNumber: string) => {
  if (mobileNumber.startsWith("+91")) return mobileNumber;
  else if (mobileNumber.startsWith("91")) return `+${mobileNumber}`;
  return `+91${mobileNumber}`;
};

export default function WorkshopForm({ workshopType }: WorkshopProps) {
  const [formData, setFormData] = useState({
    name: "",
    registrationNumber: "",
    officialMail: "",
    mobileNumber: "",
    priorExperience: [] as string[],
  });

  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (formData.name.length < 3 || formData.name.length > 50) {
      createToaster({
        title: "Invalid Name",
        description: "Name must be 3-50 characters.",
        type: "error",
      });
      return false;
    }
    if (!/^[a-zA-Z0-9]{5,15}$/.test(formData.registrationNumber)) {
      createToaster({
        title: "Invalid Registration Number",
        description: "Must be 5-15 alphanumeric characters.",
        type: "error",
      });
      return false;
    }
    if (
      !/^[a-zA-Z0-9._%+-]+@iimshillong\.ac\.in$/.test(formData.officialMail)
    ) {
      createToaster({
        title: "Invalid Email",
        description: "Email must be in iimshillong.ac.in domain.",
        type: "error",
      });
      return false;
    }
    if (!/^\+91[0-9]{10}$/.test(formatMobileNumber(formData.mobileNumber))) {
      createToaster({
        title: "Invalid Mobile Number",
        description: "Enter valid mobile number",
        type: "error",
      });
      return false;
    }
    if (!formData.priorExperience) {
      createToaster({
        title: "Invalid Selection",
        description: "Please select prior experience.",
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
        const priorExperience = formData.priorExperience.join("");
        await axios.post(
          `${API_ENDPOINT}/workshop/register`,
          {
            priorExperience,
            student: {
              name: formData.name,
              registrationNumber: formData.registrationNumber,
              officialMail: formData.officialMail,
              mobileNumber: formatMobileNumber(formData.mobileNumber),
            },
            workshopType,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
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
              placeHolder="Full Name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <InputComponent
              placeHolder="Registration Number"
              type="text"
              value={formData.registrationNumber}
              onChange={(e) =>
                setFormData({ ...formData, registrationNumber: e.target.value })
              }
            />
            <InputComponent
              placeHolder="Official Email"
              type="text"
              value={formData.officialMail}
              onChange={(e) =>
                setFormData({ ...formData, officialMail: e.target.value })
              }
            />
            <InputComponent
              placeHolder="Mobile Number (+91XXXXXXXXXX)"
              type="text"
              value={formData.mobileNumber}
              onChange={(e) =>
                setFormData({ ...formData, mobileNumber: e.target.value })
              }
            />
            <SelectComponent
              collection={experienceLevels}
              value={formData.priorExperience}
              label="Prior Experience"
              placeholder="Select Experience Level"
              onChange={(value) =>
                setFormData({ ...formData, priorExperience: value })
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
