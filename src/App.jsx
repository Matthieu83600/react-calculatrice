import { Calculator } from "components/Calculator";
import s from "./App.module.css";
export function App() {
  return (
    <div className={s.root}>
      <Calculator defaultA={4} defaultB={2} defaultOperator={'+'}/>
    </div>
  )
}
