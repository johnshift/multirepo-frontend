import React from 'react';
import {
  Flex, Box, Center, Heading,
} from '@chakra-ui/react';

const Home = (): JSX.Element => (
  <Center>
    <Flex align="center" justify="center" h="100vh" flexWrap="wrap">
      <Box flexBasis="100%">
        <Heading>
          Msg: sadfsdf
          {process.env.REACT_APP_HELLO}
        </Heading>
      </Box>

      <Box flexBasis="100%">
        <Heading>
          API_URL:
          {process.env.REACT_APP_API_URL}
        </Heading>
      </Box>
    </Flex>
  </Center>
);

export default Home;
