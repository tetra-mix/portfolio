import { UIProvider, VStack, FormControl, Input, Textarea } from '@yamada-ui/react';

export const Form = () => {
    return (
        <UIProvider>
            <VStack padding="10">
                <FormControl label="Name">
                    <Input placeholder="your name" />
                </FormControl>
                <FormControl label="Email Address">
                    <Input type="email" placeholder="your email address" />
                </FormControl>
                <FormControl label="Message" >
                    <Textarea variant="filled" placeholder="message" size="lg"  />
                </FormControl>
            </VStack>
        </UIProvider >

    );
}