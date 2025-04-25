import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const app = () => {
  const [count,setcount]=useState(0)
  return (
    <View>
      <Text>{count}</Text>
      <TouchableOpacity onPress={()=>setcount(count+1)}>
       <Text>count</Text>
      </TouchableOpacity>
    </View>
  );
};

export default app;