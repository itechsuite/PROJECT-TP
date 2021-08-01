import React from 'react';
import { View, Text,  } from 'react-native';



import { Box, Center,Button, NativeBaseProvider } from "native-base"
export const Example = () => {
  return (
    <Button bg={"#333"} onPress={() =>{alert('welcome')}} >
        Primary
    </Button>
  )
}
const Page = ({ backgroundColor, title }) => {
  return (
    <NativeBaseProvider>
     <Center  style={{flex:3}}  >
        <Example  />
        <Text> welcome</Text>
        <Button> hello</Button>

        </Center>
  </NativeBaseProvider>

  );
};

export default Page;