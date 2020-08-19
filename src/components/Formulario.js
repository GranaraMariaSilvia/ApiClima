import React from "react";

const Formulario = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1">Ciudad *</label>
          <input
            type="text"
            className="form-control"
            id="ciudad"
            placeholder=" Ej:San Miguel de Tucuman"
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlSelect1">Pais *</label>
          <select className="form-control" id="pais">
            <option value="">--Seleccione un Pais--</option>
            <option value="AR">Argentina</option>
            <option value="BL">Bolivia</option>
            <option value="BR">Brasil</option>
            <option value="CL">Chile</option>
            <option value="UR">Uruguay</option>
            <option value="PE">Peru</option>
          </select>
        </div>
        
     <button className="btn btn-primary w-100" type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default Formulario;
