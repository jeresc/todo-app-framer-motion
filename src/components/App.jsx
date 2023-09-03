import React from 'react'
import Header from './Header'
import MainSection from './MainSection'
import { reducer } from '../stores/reducer'
import { TodoProvider } from '../TodoProvider'

const initialState = {
  todos: [
    {
      text: 'React Hooks',
      completed: false,
      id: 'b967afe24b23',
    },
    {
      text: 'Framer Motion is awesome',
      completed: true,
      id: '0312plaodas',
    },
    {
      text: 'todos app',
      completed: false,
      id: 'lkdoi3p21',
    },
    {
      text: 'Context',
      completed: false,
      id: 'b930921ae24a132',
    },
    {
      text: 'New Task',
      completed: true,
      id: 'lasdj1k2j3',
    },
  ],
  visibilityFilter: 'All',
}
const App = () => (
  <TodoProvider initialState={initialState} reducer={reducer}>
    <div>
      <Header />
      <MainSection />
    </div>
  </TodoProvider>
)

export default App
