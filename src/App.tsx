import { Container } from "@chakra-ui/layout";
import { useFetchPosts } from "hooks";
import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Posts, Header, Post, NotFound, Add } from "./pages";

export const App: FC = () => {
    useFetchPosts();
    return (
        <Router>
            <Container>
                <Header />
                <Switch>
                    <Route exact path="/add">
                        <Add />
                    </Route>
                    <Route exact path="/posts/:id">
                        <Post />
                    </Route>
                    <Route exact path="/posts">
                        <Posts />
                    </Route>
                    <Route exact path="/posts">
                        <Posts />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Container>
        </Router>
    );
};
