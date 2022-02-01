import {Button, Htag} from "../components";
import React from "react";


export default function Home():JSX.Element {
  return (
    <>
      <Htag tag='h1'>Main index</Htag>
        <Button appearance={"primary"}>Button</Button>
        <Button appearance={"ghost"} arrow={"down"}>Button</Button>
    </>
  )
}
