import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/stores'
import { decrement, increment } from '@/stores/slices/counterSlice'

const App = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='flex items-center justify-center p-6'>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div className='font-bold'>{count}</div>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}

export default App
