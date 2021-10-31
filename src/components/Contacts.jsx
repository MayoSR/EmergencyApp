import React, { useEffect, useRef, useState } from 'react'
import { InputLeftElement, InputRightElement, Box, Flex, Heading, Input, Text, HStack, PinInput, PinInputField, InputGroup, InputLeftAddon, Divider, Button, Icon, Center, IconButton } from "@chakra-ui/react"
import classes from "../styles/SignUp.module.css"
import { AiFillCopy, AiFillPhone, AiOutlineClose, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GiCoffeePot, GiHamburger, GiPizzaSlice, GiFastNoodles, GiWineBottle } from "react-icons/gi";
import { BsFillTelephoneFill, BsSearch, BsDot } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { Radio, RadioGroup, useRadio, useRadioGroup } from "@chakra-ui/react"
import EmergencyButton from './microcomponents/EmergencyButton';
import { useHistory } from 'react-router';

export default function Contacts() {

    const history = useHistory()

    return (
        <Flex minHeight="100vh" width="100vw" flexDirection="column" >

            <Flex boxShadow="-2px 3px 5px 0px rgba(0,0,0,0.75)" justifyContent="space-between" alignItems="center" bg="#22262a" height="60px" width="100vw" p={3}>
                <Flex alignItems="center">
                    <Icon w={7} h={7} as={BiArrowBack} mr={2} onClick={() => history.go(-1)} />
                </Flex>
                <EmergencyButton />

            </Flex>
            <Box p={4}>
                {[1, 2, 3, 4].map(contact => {
                    return (<Box mb={3}>
                        <Flex flexDir="column">
                            <Box bg="#22272a" borderRadius="10px" p={3}>

                                <Flex alignItems="center" justifyContent="space-between">
                                    <Heading fontSize="2xl" mb={2}>Lando Norris</Heading>
                                    <Text>Friend</Text>
                                </Flex>
                                <Box>

                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={<Icon as={BsFillTelephoneFill} color="white" />}
                                        />
                                        <Input isReadOnly value="+353 9932434271" />
                                        <InputRightElement children={<Icon as={AiFillCopy} color="green.500" />} />
                                    </InputGroup>
                                </Box>
                            </Box>
                        </Flex>
                    </Box>)
                })}
            </Box>
        </Flex >
    )
}
