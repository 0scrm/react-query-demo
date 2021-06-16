import React, { FC, useMemo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { selectPost } from "core/features/posts/selectors/selectPost";
import { Badge, Box, Heading, Text } from "@chakra-ui/layout";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import dayjs from "dayjs";
import { postsSlice } from "core/features/posts/Posts.slice";

export const Post: FC = () => {
    const { id } = useParams<Record<string, string | undefined>>();
    const post = id
        ? useSelector(
              useMemo(() => selectPost(id), [id]),
              shallowEqual
          )
        : null;
    const dispatch = useDispatch();
    const { deletePost } = postsSlice.actions;
    const onDelete = (id: string) => {
        dispatch(deletePost(id));
    };
    return (
        <article>
            {post && (
                <>
                    <Heading size="lg" color="gray.600" mb="4" textTransform="capitalize">
                        <Box display="inline-block" mr="3">
                            <Link to="/posts">
                                <Box
                                    borderRadius="50"
                                    w="8"
                                    h="8"
                                    bg="pink.500"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    _hover={{ bg: "pink.400" }}
                                >
                                    <ArrowBackIcon w={5} h={5} color="white" />
                                </Box>
                            </Link>
                        </Box>
                        {post.title}
                    </Heading>
                    <Badge mb="4">Published on {dayjs(post.createdAt).format("DD/MM/YYYY")}</Badge>
                    <Box mb="8">
                        <Text align="justify">{post.body}</Text>
                    </Box>
                    <ButtonGroup>
                        <Button size="xs" disabled>
                            Edit
                        </Button>
                        <Button onClick={() => onDelete(post.id)} size="xs" textColor="red">
                            Delete
                        </Button>
                    </ButtonGroup>
                </>
            )}
        </article>
    );
};
