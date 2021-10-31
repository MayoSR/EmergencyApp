import React, { useEffect, useRef, useState } from 'react'
import { InputLeftElement, InputRightElement, Box, Flex, Heading, Input, Text, HStack, PinInput, PinInputField, InputGroup, InputLeftAddon, Divider, Button, Icon, Center, IconButton } from "@chakra-ui/react"
import classes from "../styles/SignUp.module.css"
import { AiFillSound, AiOutlineCheck, AiOutlineClose, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GiCoffeePot, GiHamburger, GiPizzaSlice, GiFastNoodles, GiWineBottle } from "react-icons/gi";
import { BsChevronRight, BsFillLightbulbFill, BsDot } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { FaRestroom } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { Radio, RadioGroup, useRadio, useRadioGroup } from "@chakra-ui/react"
import EmergencyButton from './microcomponents/EmergencyButton';
import { useHistory } from 'react-router';
export default function Home() {

    const history = useHistory()

    return (
        <Flex minHeight="100vh" width="100vw" flexDirection="column">

            <Flex boxShadow="-2px 3px 5px 0px rgba(0,0,0,0.75)" justifyContent="space-between" alignItems="center" bg="#22262a" height="60px" width="100vw" p={3}>
                <Flex alignItems="center">
                    <Icon w={7} h={7} as={BiArrowBack} mr={2} onClick={() => history.go(-1)} />
                </Flex>
                <EmergencyButton />

            </Flex>

            <Heading p={4} color="#FFC107" fontSize="3xl">Dukes Coffee Company</Heading>
            <Box className={classes.searchBox} px={4}>
                <img src="map.jpg" alt="map" />
            </Box>
            <Box className={classes.selectionBox}>

                <Flex flexDir="column" p={4}>
                    <Flex bg="#22272a" alignItems="center" justifyContent="space-between" p={3} mb={3} borderRadius="10px">
                        <Flex alignItems="center">
                            <Icon color="#FFC107" w={7} h={7} as={BsFillLightbulbFill} />
                            <Heading ml={3} fontSize="xl"> Lighting</Heading>
                        </Flex>
                        <Icon w={5} h={5} as={BsChevronRight} />

                    </Flex>
                    <Flex bg="#22272a" alignItems="center" justifyContent="space-between" p={3} mb={3} borderRadius="10px">
                        <Flex alignItems="center">
                            <Icon color="#FFC107" w={7} h={7} as={AiFillSound} />
                            <Heading ml={3} fontSize="xl"> Sounds</Heading>
                        </Flex>
                        <Icon w={5} h={5} as={BsChevronRight} />

                    </Flex>
                    <Flex bg="#22272a" alignItems="center" justifyContent="space-between" p={3} mb={3} borderRadius="10px">
                        <Flex alignItems="center">
                            <Icon color="#FFC107" w={7} h={7} as={FaRestroom} />
                            <Heading ml={3} fontSize="xl"> Restrooms</Heading>
                        </Flex>
                        <Icon w={5} h={5} as={BsChevronRight} />

                    </Flex>
                </Flex>
            </Box>

        </Flex>
    )
}
