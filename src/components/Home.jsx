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
export default function Home() {

    let history = useHistory()
    let [tabToChangeTo, setTabToChangeTo] = useState(1)

    return (
        <Flex minHeight="100vh" width="100vw" flexDirection="column">

            <Flex boxShadow="-2px 3px 5px 0px rgba(0,0,0,0.75)" justifyContent="space-between" alignItems="center" bg="#22262a" height="60px" width="100vw" p={3}>
                <Heading fontSize="2xl">gan eagla</Heading>
                <EmergencyButton />
            </Flex>

            <Box className={classes.selectionBox}>
                <RadioGroup onChange={(value) => setTabToChangeTo(value)} defaultValue="1" name="shop-category" >
                    <Flex flexDir="column" p={4}>
                        <Flex bg="#22272a" alignItems="center" justifyContent="space-between" p={3} mb={3} borderRadius="10px">
                            <Flex alignItems="center">
                                <Icon color="#FFC107" w={9} h={9} as={GiCoffeePot} />
                                <Heading ml={3} fontSize="xl"> Coffee Shops</Heading>
                            </Flex>
                            <Radio size="lg" value="1" colorScheme="yellow" />
                        </Flex>
                        <Flex bg="#22272a" alignItems="center" justifyContent="space-between" p={3} mb={3} borderRadius="10px">
                            <Flex alignItems="center">
                                <Icon color="#FFC107" w={9} h={9} as={GiWineBottle} />
                                <Heading ml={3} fontSize="xl"> Restaurants and Pubs</Heading>
                            </Flex>
                            <Radio size="lg" value="2" colorScheme="yellow" />
                        </Flex>

                    </Flex>
                </RadioGroup>

            </Box>
            <Box px={4} >
                <Button bg="#FFC107" color="#fff" onClick={() => tabToChangeTo === 1 ? history.push("/search/coffee") : history.push("/search/restaurant")} variant="filled" isFullWidth>
                    Search
                </Button>
            </Box>

        </Flex>
    )
}
