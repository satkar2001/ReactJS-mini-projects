import React,{useState} from 'react'

export default function Navbar() {
    const [navstatus,setnavstatus]= useState(0)
    const [divwidth,setdivwidth]= useState('')

    function opennav(){
          if(navstatus==0){
              setdivwidth('50%')
              setnavstatus(1)
          }
          else{
              setdivwidth('0px')
              setnavstatus(0)
          }
    }
    return (
        <div className='maindiv' style={{width:divwidth}}>
            <button onClick={opennav}><i class="fas fa-bars"></i></button>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SERVICES</li>
                <li>CONTACT US</li>
            </ul>
        </div>

    )
}
