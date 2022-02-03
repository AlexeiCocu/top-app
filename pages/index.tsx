import {Button, Htag, P, Rating, Tag} from "../components";
import React, { useEffect, useState} from "react";
import {Layout, withLayout} from "../layout/Layout";


 function Home():JSX.Element {
    const [counter, setCounter] = useState<number>(0);
    const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>{counter}</Htag>
        <Button appearance={"primary"} arrow={'down'} onClick={() => setCounter(x => x + 1)}>Button</Button>
        <Button appearance={"ghost"} arrow={'right'} onClick={() => setCounter(x => x - 1)}>Button</Button>
      <P size={'l'}>Text Big</P>
      <P size={'m'}>Text Medium</P>
      <P size={'s'}>Text Small</P>
        <br/>
        <Tag color={"primary"} size={'s'}>Size Small</Tag>
        <Tag color={"ghost"} size={'s'}>Size Small</Tag>
        <Tag color={"green"} size={'m'} href={'#'}>Size Medium</Tag>
        <Rating rating={rating} isEditable={true} setRating={setRating} />
    </>
  )
}

export default withLayout(Home);
