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
                    <img src="/coffee/3.jpg" alt="bg pic" />
                    <Heading position="absolute" bottom="0" bg="linear-gradient(0deg, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,0) 100%);" p={4} fontSize="3xl">Shoe Lane Coffee Company </Heading>
                    <Flex position="absolute" top="0" right="0" p={3}>
                        <IconButton aria-label="Search database" icon={<Icon color="grey" w={6} h={6} as={BsInstagram} />} mr={2} />
                        <IconButton aria-label="Search database" icon={<Icon color="grey" w={6} h={6} as={AiFillFacebook} />} mr={2} />
                        <IconButton aria-label="Search database" icon={<Icon color="grey" w={6} h={6} as={AiOutlineLink} />} mr={2} />
                    </Flex>
                </Box>
            </Box>
            <Accordion allowToggle borderBottom="1px solid grey">
                {[{ icon: BsFillMapFill, desc: "Map", content: <img src={`/map.jpg`} /> }, { icon: BsFillLightbulbFill, desc: "Lighting", content: "Shoe Lane’s lighting is well lit yet not too harsh; stimulus is mainly concentrated in fairy lights that string across the majority of the ceiling. This offers a setting that is warm and cozy while maintaining a sense of clarity; darkness is minimal and patrons can very easily perceive all that is happening on the floor (excluding the back room and the upstairs area). A large front window also offers plenty of non-aggressive natural light on a clear day. Generally, Shoe Lane’s lighting is non-confrontational and takes little to no adjustment for those who enter. " }, { icon: AiFillSound, desc: "Sound", content: "Employees have the freedom to choose the music for their shifts. There is of course a level of discernment in choosing; employees stray away from playing music that is too intense or vulgar and rather curate a playlist that fits the general feel of a coffee shop. Recurring Spotify stations include: Doors Radio (Classic, 80’s, and Psychedelic rock), Alternative Mix, Folk/Indie Mix, and (specifically on Friday’s) Disco Mix. Volume level of music generally does not breach the hearing barrier, music is intended for background ambience as opposed to a main attraction. As in any coffee shop or cafe, the screeching of the espresso machine and the whirring of the coffee grinder is prevalent. While not too piercing, steaming milk and/or grinding coffee can inhibit hearing. Particularly in rushes, or when sit-in space is full, Shoe Lane’s general volume can quickly rise as the space is relatively small and the sounds of making coffee become coupled with the voices of patrons conversing/ordering. If a patron is feeling overwhelmed or cramped they are encouraged to step outside to wait for their beverage, a barista will gladly walk to them to fulfill their order. Shoe Lane is also situated in a more metropolitan area of Dublin, where bustling Tara Street bridges over the River Liffey. Consequently, traffic can be fairly disruptive at times, particularly in the middle of the afternoon. However, sitting indoors will certainly suffice in suppressing the sounds of vehicles and horns. " }, { icon: GiNoseFront, desc: "Smell", content: "When indoors, Shoe Lane smells of an archetypal coffee shop: freshly ground beans, steamed milk, and rich pastries. Outdoors, smell may contribute to a negative stimulus; because of the heavy traffic, outdoor seating can at times smell of vehicle exhaust and gasoline. When Tara Street is not bustling however, outdoor seating smells rather neutral. " }, { icon: MdOutlineBakeryDining, desc: "Products / Ordering", content: "Shoe Lane sells coffee/espresso beverages as well as pastries, teas, various soft drinks (like water, San Pellegrino, and Kombucha), house-made takeaway breakfast pots (Yogurt + Granola, Overnight Oats), and coffee retail (wholesale beans, coffee brewing mediums [full list at https://shoelanecoffee.ie]). The beverage menu is intended to be simplified for sake of space:" }, {
                    icon: MdOutlineMenuBook, desc: "Menu", content: "However, we have found that for those who are not familiar with the specialty coffee industry the menu can be slightly confusing. The Brazilian coffee described above is our current house espresso; coffees at the retail level are generally characterized by their region of origin (as in, certain areas of the world produce similar tasting coffees, i.e. Ethiopian beans are known as overwhelmingly berry oriented in flavor). “White” coffees refer to espresso based drinks that include steamed/foamed milk: Lattes (espresso + steamed milk), Cappuccinos (espresso + foamed milk), Flat Whites (6 oz latte), Mochas (espresso + chocolate + steamed milk), Macchiato (espresso shot +  spoonfuls of foam in the center), Cortado/Picolo (espresso shot + equal amount of steamed milk). “Black” coffees refer to espresso based drinks that do not include steamed/foamed milk: Americanos (espresso + hot water) and Espresso (double espresso shot a la carte). Shoe Lane also offers filter coffees done by V60 (a filter device to extract more complex and delicate coffees), two V60 options are always in rotation; at the moment we are featuring an Indonesian and a Guatemalan. Alternative lattes are also available like matcha, turmeric, chai, and yuzu tonic. Any of our lattes, as well as americanos, can come iced. Alternative milk options are also widespread: skinny, oat, almond, coconut, and soy. Ordering happens at the bar; masks are still required by Shoe Lane and we have implemented a protective plastic shield between the bar and the customer.The menu hangs beside the bar, on the right wall of the space.Cash or card is acceptable.Employees are wearing all black with a grey Shoe Lane apron.Baristas will call out the beverage ordered on the right end of the bar, and place them on a wood beam under the menu.Patrons are encouraged to move to the side of the queue and wait for their order to be called.If you are wanting to stay for indoor seating COVID- 19 vaccine certifications, as well as a name and phone number for contact tracing, is necessary. If sitting indoors, baristas will bring your coffees and/or pastries to your seat. Sitting is currently limited to the downstairs area; once covid regulations have been relaxed upstairs seating will once again be available."
                }, { icon: FaRestroom, desc: "Restroom", content: "A single-person restroom is located upstairs: first door on the right. The light switch is on the outside to the right of the door frame; once switched, the lights will take a few seconds to flicker on. The staircase is quite hidden from view while on the first floor. They are located to the very right of the bar. Getting to them requires slightly passing through the threshold of the bar; do not worry about making employees uncomfortable, they are well aware that you are going to the restroom!" }, {
                    icon: HiPhotograph, desc: "Photos", content: <Grid gridTemplateColumns="repeat(2,1fr)" rowGap="10px" columnGap="20px" flexDir="column" p={4}>
                        {[1, 2, 3, 4].map(img => { return <img src={`/coffee/${img}.jpg`} alt={img} /> })}
                    </Grid>
                }, {
                    icon: BsFillCameraVideoFill, desc: "Video", content: <iframe width="100%" height="315" src="https://www.youtube.com/embed/W0ioecgJUFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                }].map(data => {
                    return (
                        <AccordionItem border="1px solid grey" borderBottom="0">
                            <AccordionButton p={4}>
                                <Flex justifyContent="space-between" alignItems="center" width="100%">

                                    <Flex alignItems="center">
                                        <Icon color="#589254" w={6} h={6} as={data.icon} />

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
                })}
            </Accordion>
            <br />
            <br />
            <br />

        </Flex >
    )
}
