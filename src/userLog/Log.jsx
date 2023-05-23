import React, { useState } from 'react'
import './log.css';
import { useNavigate } from 'react-router-dom';


function Log() {

const navigate =useNavigate();
const redirect= ()=>{
    navigate('/inicio')
}

    const[vista, setVista]= useState(false);

    const click=()=>setVista(!vista);
  return (
    <div className='fondo_form'>
        <div className='contenedor_form'> 
        <div className='Cs'> 
            <button className='botones_s' onClick={click}>Inica Sesion</button>
            <button className='botones_s' onClick={click}>Crear Cuenta</button>
            </div>
            {
                vista=== false?
                <div className='form_todo'>
                    <div className='title'>

                    <h2>Comencemos a Trabajar </h2>
                    </div>
                    <div className='formu'>
                    <form>
                        <label>Correo Electronico: </label>
                        <input 
                        type='text' 
                        size={40}
                        placeholder='Gmail'/>
                        <br />
                        <label>Contaseña: </label>
                        <input 
                        type='password' 
                        size={40}
                        placeholder='Ingrese contaseña'/> 

                        <br />

                        <button onClick={redirect}>Iniciar Secion </button>
                    </form>
                    </div>

                </div>:
                <div className='form_todo title1'>
                  <div>
                    <h2>Registrate ya.! Veras como todo es mas facil</h2>
                    </div> 
                    <div className='formu'>
                        <form>
                            <label>Nombre</label>
                            <input type='text'
                            size={40}
                            placeholder='Ingresa tu nombre'/>
                            <br />

                            <label>Correo Electronico</label>
                            <input type='text' 
                            size={40}
                            placeholder='Gamil'/>
                            <br />

                            <label>Contraseña</label>
                            <input type='password'
                            size={40}
                            placeholder='Ingresa tu contraseña'/>
                            <br />

                            <button onClick={redirect}>Crear Cuenta</button>
              

                            
                        </form>
                    </div>
                </div>
            }

            <div>
                
            </div>
        </div>
    </div>

  )
}

export default Log