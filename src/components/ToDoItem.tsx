import { StyleSheet, View, Text, Pressable } from 'react-native';

export interface ToDoItemProps {
  text: string;
  id: string;
  onDelete: (id: string) => void;
}

export default function ToDoItem({ text, id, onDelete }: ToDoItemProps) {
  return (
    <View style={styles.toDoItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={onDelete.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.toDoText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  toDoItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  toDoText: {
    color: 'white',
    padding: 8,
  },
});
