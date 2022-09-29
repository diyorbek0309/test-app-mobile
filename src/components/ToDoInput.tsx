import { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';
import { ToDoInputProps } from '../types/ToDo.interface';

export default function ToDoInput({
  visible,
  onAddToDo,
  onCancel,
}: ToDoInputProps) {
  const [toDoText, setToDoText] = useState('');

  function toDoInputHandler(enteredText: string) {
    setToDoText(enteredText);
  }

  function addToDoHandler() {
    onAddToDo(toDoText);
    setToDoText('');
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../../assets/todo.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="To Do name"
          onChangeText={toDoInputHandler}
          value={toDoText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button
              title="Add To Do"
              onPress={addToDoHandler}
              color="#b180f0"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
