import { Flex } from '@chakra-ui/react';
import React from 'react';
import AuthButtons from './AuthButtons';

type Props = {
  // user : any
};

function RightContent() {
  return (
    <>
      {/* Auth Modal */}
      <Flex justify="center" align="center">
        <AuthButtons />
      </Flex>
    </>
  );
}

export default RightContent;
