import { Calculator } from "components/Calculator";
import s from "./App.module.css";
export function App() {
  return (
    <div className={s.root}>
      <Calculator defaultA={0} defaultB={0} defaultOperator={'+'}/>
    </div>
  )
}
