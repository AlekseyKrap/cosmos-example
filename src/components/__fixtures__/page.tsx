import React from "react";
import { Viewport } from 'react-cosmos/fixture';
import Content from "../content";
import Header from "../header";
import Button from "../buttons";

export default function Page (){
    return (
        <Viewport width={320} height={568}>
        <Header title="test page"/>
        <Content text="text page">
            <Button text="btn"/>
        </Content>
        </Viewport>
    )
}
