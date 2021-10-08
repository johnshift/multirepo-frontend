import React from 'react';
import { Flex, Center, Heading } from '@chakra-ui/react';

const Home = (): JSX.Element => (
  <Flex align="center" justify="center" h="100vh">
    <Center>
      <Heading>
        Msg:
        {process.env.REACT_APP_HELLO}
      </Heading>
      <br />
      <br />
      <Heading>
        API URL:
        {process.env.REACT_APP_API_URL}
      </Heading>
    </Center>
  </Flex>
);

export default Home;
