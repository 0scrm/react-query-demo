import { Heading, List, ListIcon, ListItem, Text } from "@chakra-ui/layout";
import { CheckCircleIcon } from "@chakra-ui/icons";
import React, { FC } from "react";

export const Home: FC = () => {
    return (
        <div>
            <Heading size="lg" color="gray.600" mb="4">
                React Query demo
            </Heading>
            <Heading size="md" color="pink.500" mb="4">
                Stack:
            </Heading>
            <List spacing={3}>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="pink.500" />
                    React + Vite
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="pink.500" />
                    Chakra UI
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="pink.500" />
                    React Hook Form
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="pink.500" />
                    Axios
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="pink.500" />
                    Redux (Redux Toolkit & Redux Saga)
                </ListItem>

                <ListItem color="gray.300">
                    <ListIcon as={CheckCircleIcon} color="gray.300" />
                    <Text as="del">React Query</Text>
                </ListItem>
            </List>
        </div>
    );
};
