import React, { useEffect, useRef, useState } from 'react'
import { InputRightElement, Box, Flex, Heading, Input, Text, HStack, PinInput, PinInputField, InputGroup, InputLeftAddon, Divider, Button, Icon, Center, IconButton } from "@chakra-ui/react"
import classes from "../styles/SignUp.module.css"
import { AiOutlinePlus, AiOutlineCheck, AiOutlineClose, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useHistory } from 'react-router';
export default function SignUp() {

    const [contactArr, setContactArr] = useState([1])
    const passwordRef = useRef(null)
    const confirmPasswordRef = useRef(null)
    const [currentPassword, setCurrentPassword] = useState("")
    const [isSamePassword, checkCurrentPassword] = useState(false)
    const [passwordMatch, setPasswordMatch] = useState(false)
    const [passwordVisibility, setPasswordVisibility] = useState(0)
    const history = useHistory()

    useEffect(() => {
        if (currentPassword.length > 8 && isSamePassword === currentPassword) {
            setPasswordMatch(true)
        }
        else {
            setPasswordMatch(false)
        }

    }, [isSamePassword, currentPassword])


    return (
        <Flex minHeight="100vh" width="100vw" flexDirection="column">
            <Flex boxShadow="-2px 3px 5px 0px rgba(0,0,0,0.75)" justifyContent="space-between" alignItems="center" bg="#22262a" height="60px" width="100vw" p={3}>
                <Heading fontSize="2xl">Sign Up</Heading>
                <Button color="white" variant="ghost" size="md" onClick={(e) => history.push("")}>Create</Button>
            </Flex>
            <Flex flexDirection="column" p={5}>

                <Heading color="#FFC107" fontSize="3xl" mb={4}>Personal Details</Heading>
                <Flex mb={3}>
                    <Flex flexDir="column" alignItems="center" mr={2}>
                        <Heading fontSize="md" width="100%" mb={1}>First Name</Heading>
                        <Input fontSize="sm" className={classes.darkIp} variant="filled" placeholder="George" />
                    </Flex>
                    <Flex flexDir="column" alignItems="center">
                        <Heading fontSize="md" width="100%" mb={1}>Last Name</Heading>
                        <Input fontSize="sm" className={classes.darkIp} variant="filled" placeholder="Russell" />
                    </Flex>
                </Flex>
                <Flex flexDir="column" alignItems="center" mb={3}>
                    <Heading fontSize="md" width="100%" mb={1}>Email</Heading>
                    <Input fontSize="md" className={classes.darkIp} variant="filled" placeholder="GeorgeRussell@gmail.com" />
                </Flex>
                <Flex flexDir="column" alignItems="center" mb={3}>
                    <Heading fontSize="md" width="100%" mb={1}>Password</Heading>
                    <InputGroup mb={4}>

                        <Input type={passwordVisibility ? "text" : "password"} fontSize="md" ref={passwordRef} className={classes.darkIp} variant="filled" onKeyUp={() => setCurrentPassword(passwordRef.current.value)} placeholder="Password must be at least 8 characters" />
                        <InputRightElement children={<Icon as={passwordVisibility ? AiOutlineEyeInvisible : AiOutlineEye} w={6} h={6} color="gray.400" />} onClick={() => setPasswordVisibility(1 - passwordVisibility)} />
                    </InputGroup>
                </Flex>
                <Flex flexDir="column" alignItems="center" mb={3}>
                    <Heading fontSize="md" width="100%" mb={1}>Confirm Password</Heading>
                    <InputGroup>
                        <Input type={passwordVisibility ? "text" : "password"} ref={confirmPasswordRef} onKeyUp={() => checkCurrentPassword(confirmPasswordRef.current.value)} fontSize="md" className={classes.darkIp} variant="filled" placeholder="Confirm Password" />
                        {passwordMatch ? <InputRightElement children={<Icon as={AiOutlineCheck} color="green.500" />} /> : <InputRightElement children={<Icon as={AiOutlineClose} color="red.500" />} />}

                    </InputGroup>
                </Flex>
                <Flex flexDir="column" alignItems="center" mb={3}>
                    <Heading fontSize="md" width="100%" mb={2}>Date of Birth</Heading>
                    <Flex flexDir="column">
                        <Flex justifyContent="space-between" className={classes.pinContainer}>
                            <Text>D</Text>
                            <Text>D</Text>
                            <Text>/</Text>
                            <Text>M</Text>
                            <Text>M</Text>
                            <Text>/</Text>
                            <Text>Y</Text>
                            <Text>Y</Text>
                            <Text>Y</Text>
                            <Text>Y</Text>
                        </Flex>
                        <Flex justifyContent="space-between" className={classes.pinContainer}>
                            <PinInput>
                                <PinInputField />
                                <PinInputField />
                                <Box width="20px" border="none"></Box>
                                <PinInputField />
                                <PinInputField />
                                <Box width="20px" border="none"></Box>
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex flexDir="column" alignItems="center" mb={3}>
                    <Heading fontSize="md" width="100%" mb={2}>Phone Number</Heading>
                    <InputGroup size="md">
                        <InputLeftAddon children="+353" color="grey" />
                        <Input style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, }} className={classes.darkIp} type="tel" placeholder="9932434271" />
                    </InputGroup>
                </Flex>
                <Divider my={3} />
                <Heading fontSize="3xl" color="#FFC107" mb={4}>Emergency Details</Heading>
                {contactArr.map(contact => {
                    return (<Box>
                        <Heading fontSize="2xl" mb={2}>Contact {contact}:</Heading>
                        <Box>
                            <Flex flexDir="column" alignItems="center" mb={3}>
                                <Heading fontSize="md" width="100%" mb={2}>Emergency Contact Name</Heading>
                                <Input fontSize="sm" className={classes.darkIp} variant="filled" placeholder="Lando Norris" />
                            </Flex>
                            <Flex flexDir="column" alignItems="6center" mb={3}>
                                <Heading fontSize="md" width="100%" mb={2}>Emergency Contact Association</Heading>
                                <Input fontSize="sm" className={classes.darkIp} variant="filled" placeholder="Ex: Friend" />
                            </Flex>
                            <Flex flexDir="column" alignItems="center" mb={3}>
                                <Heading fontSize="md" width="100%" mb={2}>Emergency Contact Phone</Heading>
                                <InputGroup size="md">
                                    <InputLeftAddon children="+353" color="grey" />
                                    <Input style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, }} className={classes.darkIp} type="tel" placeholder="9932434271" />
                                </InputGroup>
                            </Flex>
                        </Box>
                        <Divider my={3} />
                    </Box>)
                })}
                <Button className={classes.addContactButton} leftIcon={<Icon as={AiOutlinePlus} w={4} h={4} />} variant="outline" onClick={() => setContactArr([...contactArr, (contactArr.at(-1) + 1)])}>
                    Add another contact
                </Button>
            </Flex>
        </Flex>
    )
}
