import { useState } from "react";
import {
  Box,
  VStack,
  Heading,
  createListCollection,
  Textarea,
} from "@chakra-ui/react";
import { Toaster } from "../../ui/toaster";
import { motion } from "framer-motion";
import axios from "axios";
import { API_ENDPOINT } from "../../../utils/constants";
import { Field } from "../../ui/field";
import createToaster from "../FormElements/Toaster";
import InputComponent from "../FormElements/Input";
import SelectComponent from "../FormElements/Select";
import SubmitButton from "../FormElements/SubmitButton";

const professions = createListCollection({
  items: [
    { label: "Student", value: "Student" },
    { label: "Working Professional", value: "Working Professional" },
  ],
});

const collegeLevels = createListCollection({
  items: [
    { label: "Undergraduate", value: "UG" },
    { label: "Masters", value: "PG" },
  ],
});

const formatMobileNumber = (mobileNumber: string) => {
  if (mobileNumber.startsWith("+91")) return mobileNumber;
  else if (mobileNumber.startsWith("91")) return `+${mobileNumber}`;
  return `+91${mobileNumber}`;
};

export default function WebinarForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    profession: [] as string[],
    yearsOfExperience: "",
    lastCollegeLevel: [] as string[],
    lastCollegeName: "",
    email: "",
    mobileNumber: "",
    questionForSpeaker: "",
  });

  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (formData.fullName.length < 3 || formData.fullName.length > 100) {
      createToaster({
        title: "Invalid Name",
        description: "Name must be 3-50 characters.",
        type: "error",
      });

      return false;
    }
    if (!formData.profession) {
      createToaster({
        title: "Invalid Profession",
        description: "Please select a valid profession.",
        type: "error",
      });
      return false;
    }
    if (
      isNaN(Number(formData.yearsOfExperience)) ||
      Number(formData.yearsOfExperience) < 0 ||
      Number(formData.yearsOfExperience) > 100
    ) {
      createToaster({
        title: "Invalid Experience",
        description: "Years of experience must be between 0 and 100.",
        type: "error",
      });
      return false;
    }
    if (!formData.lastCollegeLevel) {
      createToaster({
        title: "Invalid College Level",
        description: "Please select UG or PG.",
        type: "error",
      });
      return false;
    }
    if (formData.lastCollegeName.trim() === "") {
      createToaster({
        title: "Invalid College Name",
        description: "College name cannot be empty.",
        type: "error",
      });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      createToaster({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        type: "error",
      });
      return false;
    }
    if (!/^\+91\d{10}$/.test(formatMobileNumber(formData.mobileNumber))) {
      createToaster({
        title: "Invalid Mobile Number",
        description: "Enter valid mobile number",
        type: "error",
      });
      return false;
    }
    if (formData.questionForSpeaker.length > 150) {
      createToaster({
        title: "Question too long",
        description: "Question must be under 150 characters.",
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
        await axios.post(`${API_ENDPOINT}/webinar/register`, {
          fullName: formData.fullName,
          profession: formData.profession.join(""),
          yearsOfExperience: Number(formData.yearsOfExperience),
          lastCollegeLevel: formData.lastCollegeLevel.join(""),
          lastCollegeName: formData.lastCollegeName,
          email: formData.email,
          mobileNumber: formatMobileNumber(formData.mobileNumber),
          questionForSpeaker: formData.questionForSpeaker,
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
            Webinar Registration
          </Heading>
          <VStack as="form" gap={4}>
            <InputComponent
              type="text"
              placeHolder="Full Name"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
            <SelectComponent
              collection={professions}
              value={formData.profession}
              label="Profession"
              placeholder="Select Profession"
              onChange={(value) =>
                setFormData({ ...formData, profession: value })
              }
            />
            <InputComponent
              placeHolder="Years of Experience"
              type="number"
              value={formData.yearsOfExperience}
              onChange={(e) =>
                setFormData({ ...formData, yearsOfExperience: e.target.value })
              }
            />
            <SelectComponent
              collection={collegeLevels}
              value={formData.lastCollegeLevel}
              label="Highest Education"
              placeholder="Select Last College Level"
              onChange={(value) =>
                setFormData({ ...formData, lastCollegeLevel: value })
              }
            />
            <InputComponent
              placeHolder="Last College Name"
              type="text"
              value={formData.lastCollegeName}
              onChange={(e) =>
                setFormData({ ...formData, lastCollegeName: e.target.value })
              }
            />
            <InputComponent
              placeHolder="Email"
              type="text"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <InputComponent
              placeHolder="Mobile Number"
              type="text"
              value={formData.mobileNumber}
              onChange={(e) =>
                setFormData({ ...formData, mobileNumber: e.target.value })
              }
            />
            <Field
              label="Question for Speaker (optional)"
              helperText="Max 500 characters."
            >
              <Textarea
                placeholder="Start typing..."
                minH="50px"
                variant="subtle"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    questionForSpeaker: e.target.value,
                  })
                }
                bg="gray.700"
                color="white"
                size="xl"
                _focus={{
                  borderColor: "blue.400",
                  boxShadow: "0 0 10px #4299E1",
                }}
              />
            </Field>
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
