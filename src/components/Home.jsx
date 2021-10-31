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

    const filterIpRef = useRef(null)
    const history = useHistory()


    const coffeShopsList = [
        {
            name: "Shoe Lane Coffee Company",
            location: "Dublin, Ireland, Ailesbury Road,Sráid Anna Theas",
            status: "Open",
            closesAt: "8pm",
            distance: "1.0km"
        },
        {
            name: "Dukes Coffee Company",
            location: "Dublin, Ireland, Ailesbury Road,Sráid Anna Theas",
            status: "Open",
            closesAt: "8pm",
            distance: "1.1km"
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
            name: "Lundy Foot’s Bar and Restaurant",
            location: "Dublin, Ireland, Ailesbury Road,Sráid Anna Theas",
            status: "Open",
            closesAt: "11pm",
            distance: "1.1km"
        },
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

    const shopMap = { 1: coffeShopsList, 2: restaurantOrPubsList }

    const [lastList, setLastList] = useState(shopMap[parseInt(1)])

    const filterList = (e) => {

        setCurrentList(currentList.filter(shop => shop.name.toLowerCase().includes(filterIpRef.current.value.toLowerCase())))
    }

    const resetFilter = (e) => {
        if (e.keyCode === 8) {
            setCurrentList(lastList)
        }
    }

    const [restaurantType, setRestaurantType] = useState(1)

    const changeListValue = (value) => {
        setLastList(shopMap[parseInt(value)])
        setCurrentList(shopMap[parseInt(value)])
        setRestaurantType(value)
    }

    const [currentList, setCurrentList] = useState(shopMap[1])

    useEffect(() => {

    }, [currentList])

    const openRestaurantDetails = () => {

    }

    return (
        <Flex minHeight="100vh" width="100vw" flexDirection="column">

            <Flex boxShadow="-2px 3px 5px 0px rgba(0,0,0,0.75)" justifyContent="space-between" alignItems="center" bg="#22262a" height="60px" width="100vw" p={3}>
                <Heading fontSize="2xl">AppName</Heading>
                <EmergencyButton />
            </Flex>
            <Box className={classes.searchBox} max-height="55vh" p={4} mt={4}>
                <InputGroup mb={4} variant="filled" m={0}>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<Icon as={BsSearch} w={6} h={6} color="gray.400" />}
                    />
                    <Input placeholder="Search" size="md" ref={filterIpRef} onChange={(e) => filterList(e)} onKeyDown={resetFilter} />
                </InputGroup>
                <Box borderRadius="10px" borderTopLeftRadius="0" borderTopRightRadius="0" overflow="hidden" border="1px solid grey">
                    {currentList.map(shop => {
                        return <Flex bg="#22272a" borderBottom="1px solid grey" p={2} onClick={() => restaurantType === 1 ? history.push("shop/coffee") : history.push("shop/restaurant")}>
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
            <Box className={classes.selectionBox} height="40vh">
                <RadioGroup onChange={(value) => changeListValue(value)} defaultValue="1" name="shop-category" >
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

        </Flex>
    )
}
