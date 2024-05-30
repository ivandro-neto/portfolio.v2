import styles from './css/style.module.css'

interface ITutorialProps{
  message: string
  visible: boolean
}

export const Tutorial = ({message, visible} : ITutorialProps) =>{
  return (
    <p className={`${styles.label} ${!visible? styles.visible : ''}`}>{message}</p>
  )
}