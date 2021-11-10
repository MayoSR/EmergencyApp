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
        <Flex minHeight="100vh" width="100vw" flexDirection="column" alignItems="center" p={4}>

            <Center width="100vw" overflow="hidden" mb={"40px"}>
                <img src="/logoname.png" style={{ width: "70vw" }} />
            </Center >

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
            <Button bg="#FFC107" isFullWidth border="none" variant="outline" onClick={() => history.push("/home")} >
                Login
            </Button>
            <Box onClick={() => history.push("/signup")}>
                <Text fontSize="sm" align="center" mt={8}>Don't have an account?<Text ml={1} color="#FFC107">Sign up.</Text ></Text>

            </Box>

        </Flex >
    )
}
