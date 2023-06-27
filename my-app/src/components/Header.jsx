import { Box, Button, Center, Text, Flex } from '@chakra-ui/react';

 export const Header = () => {

    return (
        <>
        <Box  w="90vw" h="240px" pos="center"></Box>
            <Box
                 bg="url(https://media.istockphoto.com/id/1316173356/photo/muscular-man-pulls-a-dumbbell-towards-his-stomach-bodybuilding-and-powerlifting-concept.jpg?s=612x612&w=0&k=20&c=bNng9LqDpQbaVTGj30fWnBXnBvz3_imq9sBdO0fF-9I=)"
                bgSize="center"
                bgPosition="center"
                height="40vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
                
            >
                <Center flexDirection="column" textAlign="center">
                    <Text fontSize="30px" fontWeight="thin" color="white">
                        DOMINA EL TERRENO
                    </Text>
                    <Box mt={4}>
              <Button
                            variant="ghost"
                            colorScheme="whiteAlpha"
                            backgroundColor="transparent"
                            color="white"
                            _hover={{ backgroundColor: 'green' }}
                            borderWidth="1px"
                            borderColor="white"
                            width="150px"
                            height="30px"
                            mr={2}
                            _focus={{ boxShadow: 'none' }}
                        >
                            VER DETALLES
                        </Button>
                        <Button
                            variant="ghost"
                            colorScheme="whiteAlpha"
                            backgroundColor="transparent"
                            color="white"
                            _hover={{ backgroundColor: 'green'}}
                            borderWidth="1px"
                            borderColor="white"
                            width="150px"
                            height="30px"
                            _focus={{ boxShadow: 'none' }}
                        >
                            VER VIDEO
                        </Button>
                    </Box>
                </Center>
            </Box>
            <br />
            <Box
                bg={`url(https://media.istockphoto.com/id/1316173356/photo/muscular-man-pulls-a-dumbbell-towards-his-stomach-bodybuilding-and-powerlifting-concept.jpg?s=612x612&w=0&k=20&c=bNng9LqDpQbaVTGj30fWnBXnBvz3_imq9sBdO0fF-9I=)`}
                bgSize="cover"
                bgPosition="center"
                height="40vh"
                width="25%"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Center flexDirection="column" textAlign="center">
                    <Text fontSize="25px" fontWeight="thin" color="white">
                        DOMINA EL TERRENO
                    </Text>
                    <Flex direction="column" mt={4}>
                        <Button
                            variant="ghost"
                            colorScheme="whiteAlpha"
                            backgroundColor="transparent"
                            color="white"
                            _hover={{ backgroundColor: 'green' }}
                            borderWidth="1px"
                            borderColor="white"
                            width="150px"
                            height="30px"
                            mr={2}
                            _focus={{ boxShadow: 'none' }}
                        >
                            VER DETALLES
                        </Button>
                        <Button
                            variant="ghost"
                            colorScheme="whiteAlpha"
                            backgroundColor="transparent"
                            color="white"
                            _hover={{ backgroundColor: 'green'}}
                            borderWidth="1px"
                            borderColor="white"
                            width="150px"
                            height="30px"
                            _focus={{ boxShadow: 'none' }}
                        >
                            VER VIDEO
                        </Button>
                    </Flex>
                </Center>
            </Box>
        </>
    );
};