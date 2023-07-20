import React from "react";
import {
  NativeBaseProvider,
  Text,
  Checkbox,
  Button,
  VStack,
  Spinner,
} from "native-base";

const App = () => {
  return (
    <NativeBaseProvider>
      <VStack space={15}>
        <Text fontWeight="medium" color="black" fontSize="1.3rem">
          Welcome to Your React NativeBase Demo
        </Text>
        <VStack
          alignItems="center"
          justifyContent="center"
          ml="5"
          mr="5"
          h="600"
          px="3"
          py="2"
          mb={["4", "5"]}
          bg="primary.400"
          rounded="lg"
          space={4}
        >
          <Text fontWeight="medium" color="white" fontSize="sm">
            This is your super awesome React NativeBase Demo
          </Text>
          <Checkbox shadow={2} value="test">
            You did it!
          </Checkbox>
          <Spinner color="#1DA1F2" />
          <Button>A NativeBase Button</Button>
        </VStack>
      </VStack>
    </NativeBaseProvider>
  );
};

export default App;
