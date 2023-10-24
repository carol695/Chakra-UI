import { Box, Button, Center, Heading } from "@chakra-ui/react";


function App() {

  return (
    <Box
      bgImage="url('https://img.freepik.com/fotos-premium/ciclismo-naturaleza-vista-posterior_250469-14429.jpg')"
      bgSize="cover"
      bgPosition="center"
      h="100vh"
      textAlign="center"
      position="relative"
    >
      <Center position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
        <Box>
            <Heading as="h1" size="2xl" color="white" mb={10}>
              DOMINA EL TERRENO
            </Heading>
            <Button
              colorScheme="teal"
              variant="solid"
              bg="none"
              border="2px solid white"
              borderRadius="none"
              px={8}
              py={4}
              fontWeight="bold"
              letterSpacing="wide"
              mb={5}
              mr={5}
            >
              VER DETALLES
            </Button>
            <Button
              colorScheme="teal"
              variant="solid"
              bg="none"
              border="2px solid white"
              borderRadius="none"
              px={8}
              py={4}
              fontWeight="bold"
              letterSpacing="wide"
              mb={5}
              mr={5}
            >
              VER VIDEO
            </Button>
        </Box>
      </Center>
    </Box>
  );
}

export default App
