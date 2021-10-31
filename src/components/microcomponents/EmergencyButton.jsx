import React from 'react'
import { InputRightElement, Box, Flex, Heading, Input, Text, HStack, PinInput, PinInputField, InputGroup, InputLeftAddon, Divider, Button, Icon, Center, IconButton } from "@chakra-ui/react"
import { useHistory } from 'react-router'

export default function EmergencyButton() {

    const history = useHistory()

    return (
        <Button variant="filled" bg="red" size="md" onClick={() => history.push("emergency")}>
            Emergency
        </Button>
    )
}
