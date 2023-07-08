import { FC, useState } from 'react'
import styles from './Counter.module.scss'

export const Counter: FC = () => {
  const [count, setCount] = useState<number>(0)

  const increment = () => {
    setCount((prev) => ++prev)
  }

  return (
    <div>
      <button onClick={increment}>increment</button>
      <div className={styles.check}>count: {count}</div>
    </div>
  )
}
