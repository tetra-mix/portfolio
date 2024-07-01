import { Image, Center, Card, CardHeader, CardBody, CardFooter, Heading, Text, UIProvider } from '@yamada-ui/react';

export type WorkProps = {
    image: {
        url: string;
    }
    title: string;
    subtitle: string;
    body: string;
    link?: {
        Youtube?: string;
        Github?: string;
        Website?: string;
    }
}

export const Work = (props: WorkProps) => {
    return (
        <UIProvider>
            <Card variant="outline" w="30%" m="2" h="500px" >
                <CardHeader>
                    <Center>
                        <Image src={props.image.url} alt={props.title} w="100%" h="200px"/>
                    </Center>
                </CardHeader>
                <CardBody>
                    <Heading size="sm">
                        {props.subtitle}
                    </Heading>
                    <Heading size="lg">
                        {props.title}
                    </Heading>
                    <Text>
                        {props.body}
                    </Text>
                </CardBody>
                <CardFooter>
                    <Text>
                        {
                            props.link?.Youtube ? (
                                <a href={props.link.Youtube}>Youtube</a>
                            ) : <></>
                        }
                        {
                            props.link?.Github ? (
                                <a href={props.link.Github}>Github</a>
                            ): <></>
                        }
                        {
                            props.link?.Website ? (
                                <a href={props.link.Website}>Website</a>
                            ) : <></>
                        }
                    </Text>
                </CardFooter>
            </Card>
        </UIProvider>
    );
}