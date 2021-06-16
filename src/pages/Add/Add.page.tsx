import { Heading, Stack, Text } from "@chakra-ui/layout";
import { SmallAddIcon } from "@chakra-ui/icons";
import React, { FC } from "react";
import { Button, Input, Textarea } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postsSlice } from "core/features/posts/Posts.slice";
import { PostPayload } from "core/types/PostPayload.type";
import dayjs from "dayjs";

export const Add: FC = () => {
    const dispatch = useDispatch();
    const { createPost } = postsSlice.actions;
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const onSubmit = (data: Record<"body" | "title", string>) => {
        const payload: PostPayload = {
            ...data,
            createdAt: dayjs().toISOString()
        };
        dispatch(createPost(payload));
        reset();
    };
    return (
        <div>
            <Heading size="lg" color="gray.600" mb="4">
                New post
            </Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={8}>
                    <Input
                        placeholder="Enter the title"
                        {...register("title", { required: true })}
                        variant="flushed"
                        autoComplete="off"
                        focusBorderColor="pink.500"
                    />
                    <Textarea
                        placeholder="Then the content"
                        {...register("body", { required: true })}
                        minHeight="200"
                        variant="flushed"
                        focusBorderColor="pink.500"
                    />
                    {errors.exampleRequired && <Text>This field is required</Text>}
                    <Button type="submit" rightIcon={<SmallAddIcon />} colorScheme="pink" alignSelf="flex-end">
                        Add
                    </Button>
                </Stack>
            </form>
        </div>
    );
};
