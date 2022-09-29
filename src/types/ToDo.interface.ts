export interface ToDo {
  id: string;
  text: string;
}

export interface ToDoInputProps {
  visible: boolean;
  onAddToDo: (enteredText: string) => void;
  onCancel: () => void;
}

export interface ToDoItemProps {
  text: string;
  id: string;
  onDelete: (id: string) => void;
}
