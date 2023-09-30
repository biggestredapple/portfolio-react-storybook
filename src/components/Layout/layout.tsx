import React from "react";
import { Welcome, Experience, Education, Project, Skills } from "..";
import { LayoutContainer } from "./layout.styles";

export const Layout: React.FC = () => {
    return (
        <LayoutContainer>
            <Welcome />
            <Experience />
            <Education />
            <Project />
            <Skills />
        </LayoutContainer>
    )
}