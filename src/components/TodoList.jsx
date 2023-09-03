import React from 'react'
import { TodoItem } from './TodoItem'
import { getFilteredTodos } from '../stores/util'
import { AnimatePresence, Reorder } from 'framer-motion'

export const TodoList = ({ todos, visibilityFilter, setTodos }) => (
  <Reorder.Group
    axis="y"
    values={todos}
    onReorder={setTodos}
    className="todo-list"
  >
    {getFilteredTodos(todos, visibilityFilter).map((todo, index) => (
      <Reorder.Item key={todo.id} value={todo}>
        <TodoItem todo={todo} index={index} />
      </Reorder.Item>
    ))}
  </Reorder.Group>
)
