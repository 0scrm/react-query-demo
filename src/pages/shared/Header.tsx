import { Button, IconButton } from "@chakra-ui/button";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPosts } from "core/features/posts/selectors/selectPosts";

export const Header: FC = () => {
    const { isLoading } = useSelector(selectPosts);
    return (
        <Flex as="nav" py="16" align="center" justify="space-between" wrap="wrap">
            <Box>
                <Flex alignItems="center">
                    <IconButton
                        colorScheme="pink"
                        variant="outline"
                        borderColor="pink.500"
                        border="2px"
                        aria-label="Refresh"
                        isLoading={isLoading}
                    />
                </Flex>
            </Box>
            <Box>
                <Link to="/">
                    <Button ml="4">Home</Button>
                </Link>
                <Link to="/posts">
                    <Button ml="4">Posts</Button>
                </Link>
                <Link to="/add">
                    <Button ml="4">
                        <Text color="pink.500">Add post</Text>
                    </Button>
                </Link>
            </Box>
        </Flex>
    );
};
