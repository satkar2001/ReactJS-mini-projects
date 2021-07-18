import React,{useState}from 'react'

export default function Main() {
    const[taskname,settaskname]= useState('')
    const[tasklist,settasklist]=useState([])
    function addtask(){
       settasklist([...tasklist,taskname])
    }
    function deletetask(index){
      var duparray=[...tasklist]
      duparray.splice(index,1)//splice is a js function to add or delete indexx of array
      settasklist(duparray)
    }
    const tasklistcontent=tasklist.map((task,index)=>{ //in map functions index no is provided just by writing index
        return(
            <div>
                <p>{task}</p>
                <i className="far fa-trash-alt" onClick={()=>deletetask(index)}></i>
            </div>
        )
    })

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5 shadow p-3 mb-5 bg-white rounded">
                    <h1>TODO LIST</h1>
                    <input type="text" placeholder="enter task" className='form-control' value={taskname}
                    onChange={(e)=>{settaskname(e.target.value)}}/>
                    <button className="btn btn-primary" onClick={addtask}>add task</button>
                    <br />
                    {tasklistcontent}
                </div>
            </div>
        </div>
    )
}
