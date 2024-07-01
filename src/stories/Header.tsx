import { Flex, Link, Heading, HStack, UIProvider, Spacer, Menu, MenuButton, MenuList, MenuItem, Button } from '@yamada-ui/react';

export const Header = () => (
  <UIProvider>
    <header>
      <div className="storybook-header">
        <Flex gap="md" w="full" backgroundColor="blue.800" color="white" px={{base:"20", sm:"2"}} py={2} >
          <Heading>clowntetra.jp</Heading>
          <Spacer />
          <HStack display={{ base: 'flex', sm: 'none' }} gap="md" >
            <Link fontSize="xl" color="white">Home</Link>
            <Link fontSize="xl" color="white">About</Link>
            <Link fontSize="xl" color="white">Works</Link>
            <Link fontSize="xl" color="white">Links</Link>
            <Link fontSize="xl" color="white">Contact</Link>
          </HStack>

          <Menu >
            <MenuButton as={Button} display={{base:"none", sm:'block'}} bg="blue.800" border={"solid"} borderColor={"white"} color={"white"}>
              Menu
            </MenuButton>

            <MenuList>
              <MenuItem><Link fontSize="xl" color="white">Home</Link></MenuItem>
              <MenuItem><Link fontSize="xl" color="white">About</Link></MenuItem>
              <MenuItem><Link fontSize="xl" color="white">Works</Link></MenuItem>
              <MenuItem><Link fontSize="xl" color="white">Links</Link></MenuItem>
              <MenuItem><Link fontSize="xl" color="white">Contact</Link></MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </div>
    </header>
  </UIProvider>
);
