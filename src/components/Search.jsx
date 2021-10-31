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
import { useParams } from "react-router-dom";

export default function Contacts() {

    const history = useHistory()
    const { type } = useParams()


    const filterIpRef = useRef(null)


    const coffeShopsList = [

        {
            name: "Dukes Coffee Company",
            location: "Dublin, Ireland, Ailesbury Road,Sráid Anna Theas",
            status: "Open",
            closesAt: "8pm",
            distance: "1.1km"
        },
        {
            name: "Shoe Lane Coffee Company",
            location: "Dublin, Ireland, Ailesbury Road,Sráid Anna Theas",
            status: "Open",
            closesAt: "8pm",
            distance: "1.3km"
        },
        {
            name: "Soma Coffee",
            location: "Dublin, Ireland, Dorset Street,Wellington Pl",
            status: "Open",
            closesAt: "2pm",
            distance: "1.4km"
        },
        {
            name: "The Heron Café",
            location: "Dublin, Ireland, Ely Place,Drumcondra Rd, Bolton St",
            status: "Open",
            closesAt: "4pm",
            distance: "1.5km"
        },
        {
            name: "Budd's",
            location: "Dublin, Ireland, Fitzwilliam Square,	Temple St N",
            status: "Open",
            closesAt: "10pm",
            distance: "2km"
        },
    ]

    const restaurantOrPubsList = [

        {
            name: "The Crosskeys Inn ",
            location: "Dublin, Ireland, Ailesbury Road,Sráid Anna Theas",
            status: "Open",
            closesAt: "11pm",
            distance: "1.3km"
        },
        {
            name: "Teach Beag, Clonakilty",
            location: "Dublin, Ireland, Dorset Street,Wellington Pl",
            status: "Open",
            closesAt: "9pm",
            distance: "1.4km"
        },
        {
            name: "Lundy Foot’s Bar and Restaurant",
            location: "Dublin, Ireland, Ailesbury Road,Sráid Anna Theas",
            status: "Open",
            closesAt: "11pm",
            distance: "1.6km"
        },
        {
            name: "Tigh Ned, Galway",
            location: "Dublin, Ireland, Ely Place,Drumcondra Rd, Bolton St",
            status: "Open",
            closesAt: "2am",
            distance: "1.9km"
        },
        {
            name: "O’Connell’s, Meath",
            location: "Dublin, Ireland, Fitzwilliam Square,	Temple St N",
            status: "Open",
            closesAt: "12am",
            distance: "2.1km"
        },
    ]

    const [currentIpValue, setCurrentIpValue] = useState("")

    const filterList = (e) => {
        setCurrentIpValue(filterIpRef.current.value.toLowerCase())
    }

    const shopMap = { "coffee": coffeShopsList, "restaurant": restaurantOrPubsList }

    return (
        <Flex minHeight="100vh" width="100vw" flexDirection="column" >

            <Flex boxShadow="-2px 3px 5px 0px rgba(0,0,0,0.75)" justifyContent="space-between" alignItems="center" bg="#22262a" height="60px" width="100vw" p={3}>
                <Flex alignItems="center">
                    <Icon w={7} h={7} as={BiArrowBack} mr={2} onClick={() => history.go(-1)} />
                </Flex>
                <EmergencyButton />

            </Flex>
            <Box className={classes.searchBox}>
                <InputGroup mb={4} variant="filled" m={0}>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<Icon as={BsSearch} w={6} h={6} color="gray.400" />}
                    />
                    <Input borderRadius="0" placeholder="Search" size="md" ref={filterIpRef} onChange={(e) => filterList(e)} onKeyDown={(e) => filterList(e)} />
                </InputGroup>
                <Box borderRadius="10px" borderTopLeftRadius="0" borderTopRightRadius="0" overflow="hidden" border="1px solid grey">
                    {shopMap[type].filter(shop => shop.name.toLowerCase().includes(currentIpValue)).map(shop => {
                        return <Flex bg="#22272a" borderBottom="1px solid grey" p={2} onClick={() => type === "coffee" ? history.push("/shop/coffee") : history.push("/shop/restaurant")}>
                            <Icon w={6} h={6} as={GoLocation} mr={4} />
                            <Box>
                                <Heading fontSize="md">{shop.name}</Heading>
                                <Text fontSize="xs">{shop.location}</Text>
                                <Flex alignItems="center">
                                    <Text fontSize="xs" color="green">{shop.status}</Text>
                                    <Icon as={BsDot} />
                                    <Text fontSize="xs">Closes at {shop.closesAt}</Text>
                                    <Icon as={BsDot} />
                                    <Text fontSize="xs">{shop.distance}</Text>
                                </Flex>
                            </Box>
                        </Flex>
                    })}

                </Box>
            </Box>
        </Flex >
    )
}
