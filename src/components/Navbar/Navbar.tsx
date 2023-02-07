import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
import RightContent from '../RightContent/RightContent';
import SearchInput from '../SearchInput/SearchInput';
import Directory from './Directory/Directory';

function Navbar() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex
      bg="white"
      height="44px"
      padding="6px 12px"
      justify={{ md: 'space-between' }}
    >
      <Flex align="center" width={{ base: '40px', md: 'auto' }}>
        <Image
          src="/images/redditFace.svg"
          height="30px"
          mr={{ base: 0, md: 2 }}
        />
        <Image
          src="/images/redditText.svg"
          height="46px"
          display={{ base: 'none', md: 'unset' }}
        />
      </Flex>
      {user && <Directory />}
      <SearchInput user={user} />
      <RightContent user={user} />
    </Flex>
  );
}

export default Navbar;
