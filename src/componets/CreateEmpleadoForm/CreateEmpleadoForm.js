import React, { useState , useEffect} from 'react';
import './../CreateEmpleadoForm/CreateEmpleadoForm.css';
import empleadosService from './../../services/empleados'

const CreateEmpleadoForm = () => {
  const [user, setUser] = useState(null)
  const [puestos, setPuestos] = useState([]);
  const [bancos, setBancos] = useState([]);
  const [formData, setFormData] = useState({
    nombre: '',
    fecha_nacimiento: '',
    genero: '',
    progenitor:false,
    n_empleado: '',
    pin: '',
    correo: '',
    usuario: '',
    celular: '',
    clave: '',
    maquilador: false,
    sueldo: '',
    fecha_inicio: '',
    id_puesto: '',
    id_banco: '',
    clave_interbancaria: '',
  });

  // Leer los datos de localStorage al cargar el componente
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedRhAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      empleadosService.setToken(user.token)
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeComboBox = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const nuevoEmpleado = await empleadosService.crearEmpleado(formData);
      console.log('Empleado creado:', nuevoEmpleado);
      // Limpiar el formulario después de enviar los datos
      setFormData({
        nombre: '',
        fecha_nacimiento: '',
        genero: '',
        progenitor:false,
        n_empleado: '',
        pin: '',
        correo: '',
        usuario: '',
        celular: '',
        clave: '',
        maquilador: false,
        sueldo: '',
        fecha_inicio: '',
        id_puesto: '',
        id_banco: '',
        clave_interbancaria: '',
      });
    } catch (error) {
      console.error('Error creando empleado:', error);
    }
  };
  
  useEffect(() => {
    const fetchPuestos = async () => {
      try {
        const puestosData = await empleadosService.getPuestosAll();
        setPuestos(puestosData.Puestos);
      } catch (error) {
        console.error('Error fetching puestos:', error);
      }
    };

    fetchPuestos();
  }, []);

  useEffect(() => {
    const fetchBancos = async () => {
      try {
        const bancosData = await empleadosService.getBancosAll();
        setBancos(bancosData.Bancos);
      } catch (error) {
        console.error('Error fetching bancos:', error);
      }
    };

    fetchBancos();
  }, []);

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <div className="form-container">
        
        {/* Información Personal */}
        <div className="form-section">
          <h5>Información Personal</h5>
          <div className="form-group">
          <label>
          Maquilador
          <input
                type="checkbox"
                name="maquilador"
                checked={formData.maquilador}
                onChange={handleChangeComboBox}
                className="checkbox-custom checkbox-input"
              />
          </label>
          </div>
          <div className="form-espacio">
          <div className="form-group">
            <label>Numero Empleado/ Pin</label>
            <input
              type="number"
              name="pin"
              value={formData.pin}
              onChange={handleChange}
            />
          </div> 
          </div>
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Fecha de Nacimiento</label>
            <input
              type="date"
              name="fecha_nacimiento"
              value={formData.fecha_nacimiento}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Genero</label>
            <select
              name="genero"
              value={formData.genero}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione un genero</option>
              <option value="H">Hombre</option>
              <option value="M">Mujer</option>
              <option value="X">Sin Especificar</option>
            </select>
          </div>
          <div className="form-group">
          <label>
          Padre/Madre
          <input
                type="checkbox"
                name="progenitor"
                checked={formData.progenitor}
                onChange={handleChangeComboBox}
                className="checkbox-custom checkbox-input"
              />
          </label>
          </div>
       {/* Información Cuenta Assembled */}
        <div className="form-section">
          <h5>Cuenta Assembled</h5>
          <div className="form-group">
            <label>Correo</label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Usuario</label>
            <input
              type="text"
              name="usuario"
              autoComplete="username"
              value={formData.usuario}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="text"
              name="clave"
              autoComplete="current-password"
              value={formData.clave}
              onChange={handleChange}
            />
          </div>
        </div>
        </div>
        {/* Información de Trabajo */}
        <div className="form-section">
          <h5>Información de Trabajo</h5>
          <div className="form-group">
            <label>Puesto</label>
            <select
              name="id_puesto"
              value={formData.id_puesto}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione un puesto</option>
              {puestos.map((puesto) => (
                <option key={puesto.id} value={puesto.id}>
                  {puesto.puesto}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Sueldo</label>
            <input
              type="number"
              name="sueldo"
              value={formData.sueldo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Fecha de Ingreso</label>
            <input
              type="date"
              name="fecha_inicio"
              value={formData.fecha_inicio}
              onChange={handleChange}
              required
            />
          </div>
          {/* Información Bancaria */}
        <div className="form-section">
          <h5>Información Bancaria</h5>
          <div className="form-group">
            <label>Banco</label>
            <select
              name="id_banco"
              value={formData.id_banco}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione un banco</option>
              {bancos.map((banco) => (
                <option key={banco.id} value={banco.id}>
                  {banco.banco}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Clave Interbancaria</label>
            <input
              type="text"
              name="clave_interbancaria"
              value={formData.clave_interbancaria}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        </div>
        
      </div>
      <button type="submit">Agregar Empleado</button>
    </form>
  );
};

export default CreateEmpleadoForm;
