import { Box, Heading, UIProvider, Text } from '@yamada-ui/react';

export type TitleProps  = {
    title: string;
    text?: string;
}

export const Title = (props: TitleProps) => {
    return (
        <UIProvider>
            <Box padding={5}>
                <Heading size="2xl" >{props.title}</    Heading>
                {
                    props.text && <Text fontSize="md">{props.text}</Text>
                }
            </Box>
        </UIProvider>
    )

}