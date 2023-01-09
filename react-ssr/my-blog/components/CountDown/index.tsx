import { useEffect, useState } from 'react';
import styles from './index.module.scss';
interface IProps {
  time: number;
  onEnd: Function;
}
const CountDown = (props: IProps) => {
  const { time, onEnd } = props
  const [count, setCount] = useState(time || 60)
  useEffect(() => {
    const timer = setInterval(()=>{
      setCount((count) => {
        if(count <= 0) {
          clearInterval(timer)
          onEnd && onEnd()
          return count;
        }
        return count - 1;
      })
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [time])
	return <span className={styles.countDown}>{count}</span>
}

export default CountDown