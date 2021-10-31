import styles from './hello.module.css'

type Props = {
  name: string
}

export const Hello = ({ name, ...props }: Props) => {
  return (
    <div className={styles.hello} {...props}>
      Hello, {name}!
    </div>
  )
}
