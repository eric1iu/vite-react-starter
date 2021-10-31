import logo from './logo.svg'
import styles from './App.module.css'
import { Hello } from 'rocket-core'

function App() {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="rocket" />
      <p>
        <a href="https://vitejs.dev/">Vite</a>
        <a href="https://reactjs.org/">React</a>
        <a href="https://www.typescriptlang.org/">TypeScript</a>
        <a href="https://preset-env.cssdb.org/">postcss-preset-env</a>
      </p>
      <p>
        <a href="https://github.com/okonet/lint-staged">lint-staged</a>
        <a href="https://eslint.org">ESLint</a>
        <a href="https://prettier.io/">Prettier</a>
        <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y">eslint-plugin-jsx-a11y</a>
      </p>
      <p>
        <Hello name="World" />
      </p>
    </div>
  )
}

export default App
