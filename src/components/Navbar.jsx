import React, { useEffect, useRef, useState } from 'react'
import { InputRightElement, Box, Flex, Heading, Input, Text, HStack, PinInput, PinInputField, InputGroup, InputLeftAddon, Divider, Button, Icon, Center, IconButton } from "@chakra-ui/react"
import classes from "../styles/SignUp.module.css"
import { AiFillHome, AiOutlineCheck, AiOutlineClose, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GiCoffeePot, GiHamburger, GiPizzaSlice, GiFastNoodles, GiAmbulance } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { useHistory } from 'react-router';

export default function Navbar() {

    const history = useHistory()

    const [selectedIcon, setSelectedIcon] = useState(1)


    const selectTab = (tab, path) => {
        setSelectedIcon(tab)
        history.push("/" + path)
    }

    return (
        <Flex position="fixed" bottom="0" left="0" right="0" width="100vw" boxShadow="-2px -3px 5px 0px rgba(0,0,0,0.75)" justifyContent="space-evenly" alignItems="center" bg="#22262a" height="60px" p={3}>
            <Icon color={selectedIcon === 1 ? "#FFC107" : "#f8f8f8"} filter={selectedIcon === 1 ? "drop-shadow(0px -2px 3px #FFC107)" : "drop-shadow(0px 0px 0px #fff)"} w={8} h={8} as={AiFillHome} onClick={() => selectTab(1, "home")} />
            <Icon color={selectedIcon === 2 ? "#FFC107" : "#f8f8f8"} filter={selectedIcon === 2 ? "drop-shadow(0px -2px 3px #FFC107)" : "drop-shadow(0px 0px 0px #fff)"} w={8} h={8} as={GiAmbulance} onClick={() => selectTab(2, "emergency")} />
            <Icon color={selectedIcon === 3 ? "#FFC107" : "#f8f8f8"} filter={selectedIcon === 3 ? "drop-shadow(0px -2px 3px #FFC107)" : "drop-shadow(0px 0px 0px #fff)"} w={8} h={8} as={BiLogOut} onClick={() => selectTab(3, "")} />
        </Flex>
    )
}
