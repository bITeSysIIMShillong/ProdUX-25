import { useState } from "react";
import {
  Box,
  VStack,
  Button,
  Text,
  createListCollection,
  Grid,
  Heading,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsPersonPlusFill } from "react-icons/bs";
import { IoPersonRemoveSharp } from "react-icons/io5";
import { Switch } from "../../ui/switch";
import { Toaster } from "../../ui/toaster";
import createToaster from "../FormElements/Toaster";
import InputComponent from "../FormElements/Input";
import SelectComponent from "../FormElements/Select";
import SubmitButton from "../FormElements/SubmitButton";
import axios from "axios";
import { API_ENDPOINT } from "../../../utils/constants";

const professions = createListCollection({
  items: [
    { label: "Student", value: "Student" },
    { label: "Working Professional", value: "Working Professional" },
  ],
});

const stateOptions = createListCollection({
  items: [
    { label: "Andhra Pradesh", value: "AP" },
    { label: "Arunachal Pradesh", value: "AR" },
    { label: "Assam", value: "AS" },
    { label: "Bihar", value: "BR" },
    { label: "Chhattisgarh", value: "CG" },
    { label: "Goa", value: "GA" },
    { label: "Gujarat", value: "GJ" },
    { label: "Haryana", value: "HR" },
    { label: "Himachal Pradesh", value: "HP" },
    { label: "Jharkhand", value: "JH" },
    { label: "Karnataka", value: "KA" },
    { label: "Kerala", value: "KL" },
    { label: "Madhya Pradesh", value: "MP" },
    { label: "Maharashtra", value: "MH" },
    { label: "Manipur", value: "MN" },
    { label: "Meghalaya", value: "ML" },
    { label: "Mizoram", value: "MZ" },
    { label: "Nagaland", value: "NL" },
    { label: "Odisha", value: "OD" },
    { label: "Punjab", value: "PB" },
    { label: "Rajasthan", value: "RJ" },
    { label: "Sikkim", value: "SK" },
    { label: "Tamil Nadu", value: "TN" },
    { label: "Telangana", value: "TG" },
    { label: "Tripura", value: "TR" },
    { label: "Uttar Pradesh", value: "UP" },
    { label: "Uttarakhand", value: "UK" },
    { label: "West Bengal", value: "WB" },
  ],
});

const VentureClashForm = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    canTravel: false,
    members: [
      {
        fullName: "",
        email: "",
        mobileNumber: "",
        profession: [] as string[],
        city: "",
        state: [] as string[],
        pincode: "",
        collegeName: "",
        collegeLocation: "",
        companyName: "",
        companyLocation: "",
      },
      {
        fullName: "",
        email: "",
        mobileNumber: "",
        profession: [] as string[],
        city: "",
        state: [] as string[],
        pincode: "",
        collegeName: "",
        collegeLocation: "",
        companyName: "",
        companyLocation: "",
      },
    ],
  });

  const [loading, setLoading] = useState(false);

  const addMember = () => {
    if (formData.members.length < 4) {
      setFormData({
        ...formData,
        members: [
          ...formData.members,
          {
            fullName: "",
            email: "",
            mobileNumber: "",
            profession: [] as string[],
            city: "",
            state: [] as string[],
            pincode: "",
            collegeName: "",
            collegeLocation: "",
            companyName: "",
            companyLocation: "",
          },
        ],
      });
    }
  };

  const removeMember = (index: number) => {
    const updatedMembers = formData.members.filter((_, i) => i !== index);
    setFormData({ ...formData, members: updatedMembers });
  };

  const formatMobileNumber = (mobileNumber: string) => {
    if (mobileNumber.startsWith("+91")) return mobileNumber;
    else if (mobileNumber.startsWith("91")) return `+${mobileNumber}`;
    return `+91${mobileNumber}`;
  };

  const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^\+91\d{10}$/;
    const pincodePattern = /^\d{6}$/;

    const emailAddresses = new Set();

    if (!formData.teamName.trim()) {
      createToaster({
        title: `Team Name Missing`,
        description: "Team Name is required.",
        type: "error",
      });
      return false;
    }

    for (let i = 0; i < formData.members.length; i++) {
      const member = formData.members[i];

      if (!member.fullName.trim()) {
        createToaster({
          title: `Member ${i + 1} - Missing Info`,
          description: "Full Name is required.",
          type: "error",
        });
        return false;
      }

      if (!member.email.trim()) {
        createToaster({
          title: `Member ${i + 1} - Missing Info`,
          description: "Email is required.",
          type: "error",
        });
        return false;
      }

      if (!emailPattern.test(member.email)) {
        createToaster({
          title: `Member ${i + 1} - Invalid Email`,
          description: "Enter a valid email address.",
          type: "error",
        });
        return false;
      }

      emailAddresses.add(member.email.trim());

      if (!member.mobileNumber.trim()) {
        createToaster({
          title: `Member ${i + 1} - Missing Info`,
          description: "Mobile Number is required.",
          type: "error",
        });
        return false;
      }

      if (!mobilePattern.test(formatMobileNumber(member.mobileNumber))) {
        createToaster({
          title: `Member ${i + 1} - Invalid Mobile Number`,
          description: "Enter a valid Mobile Number",
          type: "error",
        });
        return false;
      }

      if (!member.profession[0].trim()) {
        createToaster({
          title: `Member ${i + 1} - Missing Info`,
          description: "Profession is required.",
          type: "error",
        });
        return false;
      }

      if (!member.city.trim()) {
        createToaster({
          title: `Member ${i + 1} - Missing Info`,
          description: "City is required.",
          type: "error",
        });
        return false;
      }

      if (!member.state[0].trim()) {
        createToaster({
          title: `Member ${i + 1} - Missing Info`,
          description: "State selection is required.",
          type: "error",
        });
        return false;
      }

      if (!member.pincode.trim()) {
        createToaster({
          title: `Member ${i + 1} - Missing Info`,
          description: "Pincode is required.",
          type: "error",
        });
        return false;
      }

      if (!pincodePattern.test(member.pincode)) {
        createToaster({
          title: `Member ${i + 1} - Invalid Pincode`,
          description: "Pincode must be a 6-digit number.",
          type: "error",
        });
        return false;
      }

      if (member.profession[0] === "Student") {
        if (!member.collegeName.trim()) {
          createToaster({
            title: `Member ${i + 1} - Missing Info`,
            description: "College Name is required for students.",
            type: "error",
          });
          return false;
        }

        if (!member.collegeLocation.trim()) {
          createToaster({
            title: `Member ${i + 1} - Missing Info`,
            description: "College Location is required for students.",
            type: "error",
          });
          return false;
        }
      }

      if (member.profession[0] === "Working Professional") {
        if (!member.companyName.trim()) {
          createToaster({
            title: `Member ${i + 1} - Missing Info`,
            description: "Company Name is required for working professionals.",
            type: "error",
          });
          return false;
        }

        if (!member.companyLocation.trim()) {
          createToaster({
            title: `Member ${i + 1} - Missing Info`,
            description:
              "Company Location is required for working professionals.",
            type: "error",
          });
          return false;
        }
      }
    }

    if (emailAddresses.size != formData.members.length) {
      createToaster({
        title: `Duplicate Mail IDs`,
        description: "All members should have unique email IDs",
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
      const tempFormData = JSON.parse(JSON.stringify(formData));

      for (let index = 0; index < formData.members.length; index++) {
        tempFormData.members[index].profession =
          formData.members[index].profession[0];
        tempFormData.members[index].state = formData.members[index].state[0];
        tempFormData.members[index].mobileNumber = formatMobileNumber(
          formData.members[index].mobileNumber
        );

        Object.keys(tempFormData.members[index]).forEach((key) => {
          if (
            !tempFormData.members[index][key].trim() ||
            tempFormData.members[index][key].trim().length == 0
          )
            delete tempFormData.members[index][key];
        });
      }

      const requestBody = {
        member1: tempFormData.members[0],
        member2: tempFormData.members[1],
        member3: tempFormData.members[2],
        member4: tempFormData.members[3],
        teamName: tempFormData.teamName,
        canTravel: tempFormData.canTravel,
      };

      try {
        await axios.post(`${API_ENDPOINT}/ventureclash/register`, requestBody, {
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
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Box
        p={8}
        maxW="600px"
        mx="auto"
        borderRadius="lg"
        boxShadow="0px 0px 15px rgba(0, 255, 255, 0.4)"
        bg="rgba(25, 25, 25, 0.8)"
        backdropFilter="blur(12px)"
        color="white"
        mt={10}
        mb={10}
      >
        <Toaster />
        <Heading
          textAlign="center"
          mb={4}
          color="cyan.400"
          size="4xl"
          fontFamily="iceland"
        >
          Venture Clash Registration
        </Heading>
        <VStack gap={6} align="stretch">
          <InputComponent
            placeHolder="Team Name"
            value={formData.teamName}
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, teamName: e.target.value })
            }
          />
          <Box display="flex" alignItems="center" gap={2}>
            <Text>Can you travel to IIM Shillong campus?</Text>
            <Switch
              checked={formData.canTravel}
              onCheckedChange={(e) =>
                setFormData({ ...formData, canTravel: e.checked })
              }
            />
          </Box>

          {formData.members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Box
                p={4}
                border="1px solid gray"
                borderRadius="md"
                w="full"
                transition="all 0.3s ease-in-out"
                _hover={{ boxShadow: "0 0 10px gray" }}
              >
                <Text fontWeight="bold" mb={2}>
                  Member {index + 1}
                </Text>
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                  <InputComponent
                    placeHolder="Full Name"
                    type="text"
                    value={member.fullName}
                    onChange={(e) => {
                      const members = [...formData.members];
                      members[index].fullName = e.target.value;
                      setFormData({ ...formData, members });
                    }}
                  />
                  <InputComponent
                    placeHolder="Email"
                    type="text"
                    value={member.email}
                    onChange={(e) => {
                      const members = [...formData.members];
                      members[index].email = e.target.value;
                      setFormData({ ...formData, members });
                    }}
                  />
                  <InputComponent
                    placeHolder="Mobile Number"
                    type="text"
                    value={member.mobileNumber}
                    onChange={(e) => {
                      const members = [...formData.members];
                      members[index].mobileNumber = e.target.value;
                      setFormData({ ...formData, members });
                    }}
                  />
                  <SelectComponent
                    label="Profession"
                    placeholder="Select Profession"
                    value={member.profession}
                    collection={professions}
                    onChange={(value) => {
                      const members = [...formData.members];
                      members[index].profession = value;
                      setFormData({ ...formData, members });
                    }}
                  />
                  <InputComponent
                    placeHolder="City"
                    type="text"
                    value={member.city}
                    onChange={(e) => {
                      const members = [...formData.members];
                      members[index].city = e.target.value;
                      setFormData({ ...formData, members });
                    }}
                  />
                  <SelectComponent
                    label="State"
                    placeholder="Select State"
                    value={member.state}
                    collection={stateOptions}
                    onChange={(value) => {
                      const members = [...formData.members];
                      members[index].state = value;
                      setFormData({ ...formData, members });
                    }}
                  />
                  <InputComponent
                    placeHolder="Pincode"
                    type="text"
                    value={member.pincode}
                    onChange={(e) => {
                      const members = [...formData.members];
                      members[index].pincode = e.target.value;
                      setFormData({ ...formData, members });
                    }}
                  />
                </Grid>

                {member.profession[0] === "Student" && (
                  <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={4}
                    mt={4}
                  >
                    <InputComponent
                      placeHolder="College Name"
                      type="text"
                      value={member.collegeName}
                      onChange={(e) => {
                        const members = [...formData.members];
                        members[index].collegeName = e.target.value;
                        setFormData({ ...formData, members });
                      }}
                    />
                    <InputComponent
                      placeHolder="College Location"
                      type="text"
                      value={member.collegeLocation}
                      onChange={(e) => {
                        const members = [...formData.members];
                        members[index].collegeLocation = e.target.value;
                        setFormData({ ...formData, members });
                      }}
                    />
                  </Grid>
                )}

                {member.profession[0] === "Working Professional" && (
                  <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={4}
                    mt={4}
                  >
                    <InputComponent
                      placeHolder="Company Name"
                      type="text"
                      value={member.companyName}
                      onChange={(e) => {
                        const members = [...formData.members];
                        members[index].companyName = e.target.value;
                        setFormData({ ...formData, members });
                      }}
                    />
                    <InputComponent
                      placeHolder="Company Location"
                      type="text"
                      value={member.companyLocation}
                      onChange={(e) => {
                        const members = [...formData.members];
                        members[index].companyLocation = e.target.value;
                        setFormData({ ...formData, members });
                      }}
                    />
                  </Grid>
                )}

                {index >= 2 && (
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Button
                      colorScheme="red"
                      mt={4}
                      onClick={() => removeMember(index)}
                      _hover={{ bg: "red.500", color: "white" }}
                    >
                      Remove Member
                      <IoPersonRemoveSharp />
                    </Button>
                  </motion.div>
                )}
              </Box>
            </motion.div>
          ))}

          {formData.members.length < 4 && (
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                onClick={addMember}
                _hover={{ bg: "green.500", color: "white" }}
              >
                Add Member
                <BsPersonPlusFill />
              </Button>
            </motion.div>
          )}

          <motion.div whileHover={{ scale: 1.05 }}>
            <SubmitButton
              CTA="Submit"
              handleSubmit={handleSubmit}
              loading={loading}
            />
          </motion.div>
        </VStack>
      </Box>
    </motion.div>
  );
};

export default VentureClashForm;
