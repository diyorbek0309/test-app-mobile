import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ToDoItem from '../components/ToDoItem';
import ToDoInput from '../components/ToDoInput';
import { ToDo } from '../types/ToDo.interface';

export default function HomeScreen() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const startAddToDoHandler = () => {
    setModalIsVisible(true);
  };

  const endAddToDoHandler = () => {
    setModalIsVisible(false);
  };

  const addToDoHandler = (enteredToDoText: string) => {
    setToDos((currentToDos) => [
      ...currentToDos,
      { text: enteredToDoText, id: Math.random().toString() },
    ]);
    endAddToDoHandler();
  };

  const deleteToDoHandler = (id: string) => {
    setToDos((currentToDos) => {
      return currentToDos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New ToDo"
          color="#a065ec"
          onPress={startAddToDoHandler}
        />
        <ToDoInput
          visible={modalIsVisible}
          onAddToDo={addToDoHandler}
          onCancel={endAddToDoHandler}
        />
        <View style={styles.toDosContainer}>
          <FlatList
            data={toDos}
            renderItem={(itemData) => {
              return (
                <ToDoItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDelete={deleteToDoHandler}
                />
              );
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  toDosContainer: {
    flex: 5,
  },
});
