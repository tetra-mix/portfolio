import { Flex, Text, Link, Heading, HStack, UIProvider, Spacer} from '@yamada-ui/react';

export const Footer = () => (
  <UIProvider>
    <footer>
      <div className="storybook-header">
        <Flex gap="md" w="full" backgroundColor="blue.800" color="white" px={20} py={2} >
          <Text>©2024 Yoshitaka Ryouma </Text>
        </Flex>
      </div>
    </footer>
  </UIProvider>
);
