import EmpleadoEstado from './../../componets/Dasboard/EmpleadoEstado/EmpleadoEstado'
import Cumpleaneros from './../../componets/Dasboard/Cumpleaneros/Cumpleaneros'
import './../HomeForm/HomeForm.css'

const HomeForm = () =>{
    return (
        <div className='content'>
            <h1 className='title'>Dasboard</h1>
            <div className='div-conenidos'>
                <EmpleadoEstado />
                <Cumpleaneros />
            </div>
        </div>
    )
}
export default HomeForm