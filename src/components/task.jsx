import React, { useEffect, useState } from 'react'
import Checked from './checked'
import { CiSquareRemove } from 'react-icons/ci'
import moment from 'moment'

export const Task = ({ item, idx, deleteTask, task}) => {
  const { date, title, id } = item
  const [checked, setChecked] = useState(false)
  
  const verifyDate = moment(new Date()).format("DD-MM-YYYY") > date

  useEffect(() => {
    setChecked(item.completed)
  }, [item])

  function handleOnChange() {
    const newCheckedState = !checked
    setChecked(newCheckedState)

    const storadState = JSON.parse(localStorage.getItem(`teste`))
    // Pega o item no storadState
    const invertIndex = task.length - 1 - idx  // 5 [1,2,3,4]
    storadState[invertIndex] = {...item, completed: newCheckedState}
    
    localStorage.setItem("teste", JSON.stringify(storadState)) // 5 => [1,2,3,4, {}]
  }

  return (
    <div className='container-itens'>
      <div className='checkbox'>
        <Checked handleOnChange={handleOnChange} checked={checked} />
        <p style={{ textDecorationLine: checked ? 'line-through' : "none" }}>{title}</p>
      </div>
      <div className='date'>
      <p style={{ color: verifyDate && !checked ? 'red' : 'inherit',  textDecorationLine: checked ? "line-through" : "none"}}>{date}</p>
        <button id="delete" onClick={() => { deleteTask(id); localStorage.removeItem(`state${id}`) }}><CiSquareRemove /></button>
      </div>
    </div>
  )
}