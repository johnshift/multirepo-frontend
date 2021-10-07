import React from 'react';
import { Flex, Center, Heading } from '@chakra-ui/react';

const Home = (): JSX.Element => (
  <Flex align="center" justify="center" h="100vh">
    <Center>
      <Heading>{process.env.REACT_APP_HELLO}</Heading>
    </Center>
  </Flex>
);

export default Home;
