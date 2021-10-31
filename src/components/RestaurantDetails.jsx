import React, { useEffect, useRef, useState } from 'react'
import { InputLeftElement, InputRightElement, Grid, Box, Flex, Heading, Input, Text, HStack, PinInput, PinInputField, InputGroup, InputLeftAddon, Divider, Button, Icon, Center, IconButton } from "@chakra-ui/react"
import classes from "../styles/SignUp.module.css"
import { AiFillSound, AiFillFacebook, AiOutlineLink, AiOutlineCheck, AiOutlineClose, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GiNoseFront, GiHamburger, GiPizzaSlice, GiFastNoodles, GiWineBottle } from "react-icons/gi";
import { BsInstagram, BsFillLightbulbFill, BsFillMapFill, BsFillCameraVideoFill } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { FaRestroom } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { HiPhotograph } from "react-icons/hi";
import { MdOutlineBakeryDining, MdOutlineMenuBook } from "react-icons/md";
import { Radio, RadioGroup, useRadio, useRadioGroup } from "@chakra-ui/react"
import EmergencyButton from './microcomponents/EmergencyButton';
import { useHistory } from 'react-router';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react"
export default function CoffeeDetails() {

    const history = useHistory()


    return (
        <Flex minHeight="100vh" width="100vw" flexDirection="column">

            <Flex boxShadow="-2px 3px 5px 0px rgba(0,0,0,0.75)" justifyContent="space-between" alignItems="center" bg="#22262a" height="60px" width="100vw" p={3}>
                <Flex alignItems="center">
                    <Icon w={7} h={7} as={BiArrowBack} mr={2} onClick={() => history.go(-1)} />
                </Flex>
                <EmergencyButton />

            </Flex>

            <Box>
                <Box className="image-overlay" position="relative">
                    <img src="/bakery.jpg" alt="bg pic" />
                    <Heading position="absolute" bottom="0" bg="linear-gradient(0deg, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,0) 100%);" p={4} fontSize="3xl">Dukes Coffee Company</Heading>
                    <Flex position="absolute" top="0" right="0" p={3}>
                        <IconButton aria-label="Search database" icon={<Icon color="grey" w={6} h={6} as={BsInstagram} />} mr={2} />
                        <IconButton aria-label="Search database" icon={<Icon color="grey" w={6} h={6} as={AiFillFacebook} />} mr={2} />
                        <IconButton aria-label="Search database" icon={<Icon color="grey" w={6} h={6} as={AiOutlineLink} />} mr={2} />
                    </Flex>
                </Box>
            </Box>
            <Accordion allowToggle borderBottom="1px solid grey">
                {[{ icon: BsFillMapFill, desc: "Map", content: <img src="/map.jpg" /> }, { icon: BsFillLightbulbFill, desc: "Lighting", content: "This bar has a low level of lighting which is typical of Irish bars. The lights are kept low to create a cozy intimate atmosphere. When entering the bar on a sunny day it may take a moment for your eyes to adjust to the low light. " }, { icon: AiFillSound, desc: "Sound", content: "Usually during lunch the music is kept to a moderate level. They play popular pop and rock songs for background music. However every day from 7pm until 9pm there is live music. This gets very loud particularly when the audience claps or sings along, which is encouraged. After the live music the level of noise continues to be loud as customers get more boisterous and the background music is turned up upon request. " }, { icon: GiNoseFront, desc: "Smell", content: null }, { icon: MdOutlineBakeryDining, desc: "Products / Ordering", content: "Lundy Foots provides table service. Due to Covid 19 restrictions it is not possible to order at the bar. Once you walk inside the entrance stand to the left and a member of staff will greet and sit you. They will give you a detailed menu with food options on one side with drink options on the back. The staff are dressed in white shirts and black aprons. They will check in with you taking your order and ensuring you have everything you need. Your waiter or waitress will take payment by cash or card at your table. " }, {
                    icon: MdOutlineMenuBook, desc: "Menu", content: null
                }, { icon: FaRestroom, desc: "Restroom", content: "The disabilied toilets are just inside the main entrance slightly to the right. However there is a code to access them so one needs to speak to a member of staff. The regular toilets are upstairs. From the main entrance veer left towards the bar walk down the room, pass through a double entranceway on the left and walk up the stairs at the top of the stairs the first door on your left is the female toilets the second door leads to the mens. The bathrooms are generally well lit and clean. " }, {
                    icon: HiPhotograph, desc: "Photos", content: <Grid gridTemplateColumns="repeat(2,1fr)" rowGap="10px" columnGap="20px" flexDir="column" p={4}>
                        {[1, 2, 3, 4].map(img => { return <img src="/bakery.jpg" /> })}
                    </Grid>
                }, {
                    icon: BsFillCameraVideoFill, desc: "Video", content: <img src="/bakery.jpg" />
                }].map(data => {
                    if (data.content !== null)
                        return (

                            <AccordionItem border="1px solid grey" borderBottom="0">
                                <AccordionButton p={4}>
                                    <Flex justifyContent="space-between" alignItems="center" width="100%">

                                        <Flex alignItems="center">
                                            <Icon color="#FFC107" w={6} h={6} as={data.icon} />

                                            <Heading ml={3} fontSize="xl" textAlign="justify">{data.desc}</Heading>

                                        </Flex>
                                        <AccordionIcon />
                                    </Flex>
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Text fontSize="md">{data.content}</Text>
                                </AccordionPanel>
                            </AccordionItem>

                        )
                    else return <></>

                })}
            </Accordion>
            <br />
            <br />
            <br />


        </Flex >
    )
}
