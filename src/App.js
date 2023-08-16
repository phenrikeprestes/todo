import React, { useState, useRef} from 'react'
import Trash from './images/trash.png'
import './components/style.css'

export default function App(){

  const[listaTarefas, setlistaTarefas] = useState([]);
  const[tarefas, setTarefas] = useState('');

  //REF

  const idTarefa = useRef(0);
  const inputRef = useRef()


  function adicionarTarefa(){
    
    if(tarefas !== ''){
      
      setlistaTarefas(old => {return[...old,{id: idTarefa.current, texto: tarefas}]}
    )
        idTarefa.current++
        setTarefas('')
        inputRef.current.focus();
    }else{
      alert('Please, insert a Task' )
      function semTarefa(id){
      const vazio = listaTarefas.filter(tarefa => tarefa.id == null)
        setlistaTarefas(vazio)
      }
    }
    

    
}

function limpar(){
  setlistaTarefas([])
  idTarefa.current = 0
}

function removerTarefa(id){
  const tmp = listaTarefas.filter(tarefa => tarefa.id !== id)
  setlistaTarefas(tmp)
}

  return(
    <div className='container'>
      <div className='title'>
      <h1>Todo List</h1>
      </div>
      <div>
        <input type="text" value={tarefas} ref={inputRef} onChange={(e) => setTarefas(e.target.value)} className='input' placeholder='Insert your task' />
        <br />
        <button onClick={adicionarTarefa} className='add'>Add</button>
        <button onClick={limpar} className='clean'>Clear</button>
      </div>
      <div>
        <p className='tarefas'>Tarefas:</p>
        {listaTarefas.map((tarefa) =>{
          return<p key={tarefa.id} className='todo'>{tarefa.texto} <img src={Trash} alt="remove" className='trash' onClick={() => {removerTarefa(tarefa.id) } }/></p>
        })}
        
      </div>
    </div>
  )
}