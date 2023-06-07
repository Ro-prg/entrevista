import React, { useState } from 'react';
import './Formulario.css';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === '' || apellido === '' || telefono === '' || email === '') {
      alert('Por favor, completa todos los campos');
    } else {
      // Aquí puedes agregar la lógica para enviar los datos del formulario
      console.log('Nombre:', nombre);
      console.log('Apellido:', apellido);
      console.log('Teléfono:', telefono);
      console.log('Email:', email);

      // Restablecer los valores del formulario
      setNombre('');
      setApellido('');
      setTelefono('');
      setEmail('');
    }
  };

  const handleTelefonoChange = (e) => {
    const regex = /^[0-9\b]+$/; // Expresión regular que solo permite números

    if (e.target.value === '' || regex.test(e.target.value)) {
      setTelefono(e.target.value);
    }
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <label className="formulario-label">
        Nombre:
        <input
          className="formulario-input"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>
      <br />
      <label className="formulario-label">
        Apellido:
        <input
          className="formulario-input"
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
      </label>
      <br />
      <label className="formulario-label">
        Teléfono:
        <input
          className="formulario-input"
          type="tel"
          value={telefono}
          onChange={handleTelefonoChange}
        />
      </label>
      <br />
      <label className="formulario-label">
        Email:
        <input
          className="formulario-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <button className="formulario-submit" type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
