import EmpleadoEstado from './../../componets/Dasboard/EmpleadoEstado/EmpleadoEstado'
import './../HomeForm/HomeForm.css'

const HomeForm = () =>{
    return (
        <div className='content'>
            <h1 className='title'>Dasboard</h1>
            <div className='div-conenidos'>
                <EmpleadoEstado/>
                <EmpleadoEstado/>
                <EmpleadoEstado/>
                <EmpleadoEstado/>
            </div>
        </div>
    )
}
export default HomeForm