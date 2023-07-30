import Quiz from './components/Quiz'
import { data } from './const'

function App() {
  return (
    <>
      <Quiz questions={data.questions}/>      
    </>
  )
}

export default App
