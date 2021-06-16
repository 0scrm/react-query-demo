import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "core/features/posts/selectors/selectPosts";
import { Badge, Box, Heading, Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import * as dayjs from "dayjs";
import { Button, ButtonGroup } from "@chakra-ui/button";
import { postsSlice } from "core/features/posts/Posts.slice";
export const Posts: FC = () => {
    const { data } = useSelector(selectPosts);

    const dispatch = useDispatch();
    const { deletePost } = postsSlice.actions;
    const onDelete = (id: string) => {
        dispatch(deletePost(id));
    };
    return (
        <div>
            <Heading size="lg" color="gray.600" mb="4">
                Posts ({data?.length})
            </Heading>
            {data?.map(({ title, body, id, createdAt }, index) => (
                <Box key={index} mb="12">
                    <Link to={`/posts/${id}`}>
                        <Heading size="md" color="pink.500" mb="4" textTransform="capitalize">
                            <Badge mr="2">{dayjs(createdAt).format("DD/MM/YYYY")}</Badge>
                            {title}
                        </Heading>
                    </Link>
                    <Text align="justify" mb="4">
                        {body}
                    </Text>
                    <ButtonGroup>
                        <Button size="xs" disabled>
                            Edit
                        </Button>
                        <Button onClick={() => onDelete(id)} size="xs" textColor="red">
                            Delete
                        </Button>
                    </ButtonGroup>
                </Box>
            ))}
        </div>
    );
};
