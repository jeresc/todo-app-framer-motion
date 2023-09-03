import React from 'react'
import { TodoTextInput } from './TodoTextInput'
import { useTodo } from '../useTodo'
import { motion } from 'framer-motion'

const Header = () => {
  const [, dispatch] = useTodo()

  return (
    <header className="header">
      <motion.h1
        transition={{ duration: 0.5, ease: 'easeInOut', type: 'spring' }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        todos
      </motion.h1>
      <TodoTextInput
        newTodo
        onSave={(text) => {
          if (text.length !== 0) {
            dispatch({
              type: 'ADD_TODO',
              payload: { text },
            })
          }
        }}
        placeholder="What needs to be done?"
      />
    </header>
  )
}

export default Header
