import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addtask} from '../redux/actions'

const AddTask = () => {
    const dispatch = useDispatch()
     const [input, setInput] = useState('')


    return (
        <div className="input">
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={()=>{dispatch(addtask({id:Math.random(),   action:input ,  isDone:false  })); setInput("")  }}>ADD</button>
        </div>
    )
}

export default AddTask


