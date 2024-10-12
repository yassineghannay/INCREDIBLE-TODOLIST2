import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './src/components/ToDoList';
import ToDoForm from './src/components/ToDoForm';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([
    { name: 'Do laundry', completed: true },
    { name: 'Go to gym', completed: false },
    { name: 'Walk dog', completed: true },
  ]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { name: task, completed: false }]);
      setTask('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ToDoList tasks={tasks} />
      <ToDoForm task={task} setTask={setTask} addTask={addTask} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
