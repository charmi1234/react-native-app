import React from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

const TodoApp = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 28,
          fontWeight: 'bold',
          marginBottom: 20,
        }}>
        To-Do List
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Fevourite Game"
        placeholderTextColor="#000"
      />
      <TouchableOpacity style={styles.task}>
        <Text style={{fontSize:20, textAlign:"center",fontWeight:'bold'}} >Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoApp;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  input: {
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    color: '#000',
  },
  task:{
    backgroundColor:"pink",
    padding:10,
    marginTop:20,
  }
});
