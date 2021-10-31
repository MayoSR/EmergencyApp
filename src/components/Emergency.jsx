import React, { useEffect, useRef, useState } from 'react'
import { InputLeftElement, InputRightElement, Box, Flex, Heading, Input, Text, HStack, PinInput, PinInputField, InputGroup, InputLeftAddon, Divider, Button, Icon, Center, IconButton } from "@chakra-ui/react"
import classes from "../styles/SignUp.module.css"
import { AiOutlinePlus, AiOutlineCheck, AiOutlineClose, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GiCoffeePot, GiHamburger, GiPizzaSlice, GiFastNoodles, GiWineBottle } from "react-icons/gi";
import { BsChevronRight, BsSearch, BsDot } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { Radio, RadioGroup, useRadio, useRadioGroup } from "@chakra-ui/react"
import EmergencyButton from './microcomponents/EmergencyButton';
import { useHistory } from 'react-router';

export default function Emergency() {

    const history = useHistory()

    return (
        <Flex minHeight="100vh" width="100vw" flexDirection="column" >

            <Flex boxShadow="-2px 3px 5px 0px rgba(0,0,0,0.75)" justifyContent="space-between" alignItems="center" bg="#22262a" height="60px" width="100vw" p={3}>
                <Heading fontSize="2xl">AppName</Heading>
                <EmergencyButton />
            </Flex>
            <Flex flexDirection="column" p={4}>

                <Flex mb={4} borderRadius="20px" boxShadow="-2px 5px 5px 0px rgba(0,0,0,0.75);" height="25vh" bg="red" color="white" position="relative" justifyContent="center" alignItems="center">
                    <Heading align="center" fontSize="4xl">S.O.S</Heading>
                    <Text position="absolute" bottom="0" p={3}>Emergency medical services</Text>
                </Flex>
                <Flex onClick={() => history.push("contacts")} borderRadius="20px" boxShadow="-2px 5px 5px 0px rgba(0,0,0,0.75);" height="25vh" bg="red" color="white" position="relative" justifyContent="center" alignItems="center">
                    <Heading fontSize="4xl" align="center" width="60%">Emergency Contacts</Heading>
                    <Text position="absolute" bottom="0" p={3}>Saved Emergency Numbers</Text>
                </Flex>
            </Flex>
        </Flex >
    )
}
