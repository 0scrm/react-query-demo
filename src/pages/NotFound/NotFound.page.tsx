import { Heading } from "@chakra-ui/layout";
import React, { FC } from "react";

export const NotFound: FC = () => {
    return (
        <div>
            <Heading size="lg" color="gray.600" mb="4">
                404
            </Heading>
            <Heading size="md" color="pink.500" mb="4">
                Page not found.
            </Heading>
        </div>
    );
};
