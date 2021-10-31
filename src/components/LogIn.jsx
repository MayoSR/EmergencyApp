import React, { useRef, useState } from 'react'
import { InputRightElement, Link, Box, Flex, Heading, Input, Text, HStack, PinInput, PinInputField, InputGroup, InputLeftElement, InputLeftAddon, Divider, Button, Icon, Center, IconButton } from "@chakra-ui/react"
import classes from "../styles/SignUp.module.css"
import { AiOutlinePlus, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { IoKey } from "react-icons/io5";
import { GiCoffeePot, GiHamburger, GiPizzaSlice, GiFastNoodles, GiSandwich } from "react-icons/gi";
import { useHistory } from 'react-router';
export default function SignUp() {

    const history = useHistory()
    const passwordIpRef = useRef(null)
    const [passwordVisibility, setPasswordVisibility] = useState(0)

    const modifyPasswordVisibility = () => {
        setPasswordVisibility(1 - passwordVisibility)
    }


    return (
        <Flex minHeight="100vh" width="100vw" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
            <Box>
                <Box position="absolute" transform="rotate(-20deg)" top="40px" left="40px">
                    <Icon color="rgba(69, 77, 84,0.3)" as={GiCoffeePot} w={24} h={24} />
                </Box>
                <Box position="absolute" transform="rotate(40deg)" top="80px" right="20px">
                    <Icon color="rgba(69, 77, 84,0.3)" as={GiHamburger} w={24} h={24} />
                </Box>
                <Box position="absolute" transform="rotate(30deg)" top="120px" left="100px">
                    <Icon color="rgba(69, 77, 84,0.3)" as={GiPizzaSlice} w={32} h={32} />
                </Box>
                <Box position="absolute" transform="rotate(-10deg)" bottom="140px" left="40px">
                    <Icon color="rgba(69, 77, 84,0.3)" as={GiFastNoodles} w={24} h={24} />
                </Box>
                <Box position="absolute" transform="rotate(30deg)" bottom="40px" right="200px">
                    <Icon color="rgba(69, 77, 84,0.3)" as={GiSandwich} w={24} h={24} />
                </Box>
                <Box position="absolute" transform="rotate(-40deg)" top="210px" left="-10px">
                    <Icon color="rgba(69, 77, 84,0.3)" as={GiSandwich} w={24} h={24} />
                </Box>
                <Box position="absolute" transform="rotate(-30deg)" top="200px" right="-10px">
                    <Icon color="rgba(69, 77, 84,0.3)" as={GiFastNoodles} w={24} h={24} />
                </Box>
                <Box position="absolute" transform="rotate(-20deg)" bottom="150px" left="200px">
                    <Icon color="rgba(69, 77, 84,0.3)" as={GiCoffeePot} w={24} h={24} />
                </Box>
                <Box position="absolute" transform="rotate(40deg)" bottom="80px" right="-20px">
                    <Icon color="rgba(69, 77, 84,0.3)" as={GiHamburger} w={24} h={24} />
                </Box>
                <Box position="absolute" transform="rotate(30deg)" bottom="200px" left="-50px">
                    <Icon color="rgba(69, 77, 84,0.3)" as={GiPizzaSlice} w={32} h={32} />
                </Box>

            </Box>
            <Heading align="center" fontSize="5xl" mb={10}>Login</Heading>
            <InputGroup mb={4}>
                <InputLeftElement
                    pointerEvents="none"
                    children={<Icon as={MdAlternateEmail} mt={2} w={6} h={6} color="gray.300" />}
                />
                <Input className={classes.darkIp} placeholder="Email" size="lg" />
            </InputGroup>
            <InputGroup mb={4}>
                <InputLeftElement
                    pointerEvents="none"
                    children={<Icon as={IoKey} mt={2} w={6} h={6} color="gray.300" />}
                />
                <Input ref={passwordIpRef} type={passwordVisibility ? "text" : "password"} className={classes.darkIp} placeholder="Password" size="lg" />
                <InputRightElement children={<Icon as={passwordVisibility ? AiOutlineEyeInvisible : AiOutlineEye} mt={2} w={6} h={6} color="gray.300" />} onClick={() => modifyPasswordVisibility()} />
            </InputGroup>
            <Button bg="#FFC107" isFullWidth border="none" variant="outline" onClick={() => history.push("home")} >
                Login
            </Button>
            <Box onClick={() => history.push("signup")}>
                <Text fontSize="sm" align="center" mt={8}>Don't have an account?<Text ml={1} color="#FFC107">Sign up.</Text ></Text>

            </Box>

        </Flex>
    )
}
