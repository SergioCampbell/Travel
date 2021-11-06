import React, { useEffect, useState } from 'react'

export default function Modal(){

    const contact = {
        NombrePasajero: '',
        Aerolinea: '',
        Pasajero: 1,
        HoraDestino: '',
        Destino: '',
        Inicio: ''
    }

    const [formData, setFormData] = useState(contact)

    const [showMessage, setShowMessage] = useState(false);
    
    const handleChange = e => {
        const {name, value} = e.target;
        setFormData({...formData,[name]:value})
    }
    
    function handleSubmit(e){
         e.preventDefault()
            setFormData(contact)
        setShowMessage(true)
            /* console.log("Datos tiquete: " +formData.NombrePasajero 
                                        +" " + formData.Pasajero+ 
                                        " " + formData.Inicio+ " "+ 
                                        formData.HoraDestino+
                                        " " + formData.Destino+
                                        " " + formData.Aerolinea) */
            alert("Datos tiquete: Sr/sra" +formData.NombrePasajero +
            " cantidad: " + formData.Pasajero+ 
            " Partida: " + formData.Inicio+ 
            " Fecha: "+ formData.HoraDestino+
            " Destino: " + formData.Destino+
            " Aerolinea: " + formData.Aerolinea)
    }

    return(
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Oferta exclusiva para esta solicitud</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
                <form className="form-control" onSubmit={handleSubmit}>
            <div className="modal-body">
                <label className="text-primary"> Nombre &nbsp;</label>
                    <input type="text"
                        className="form-control"
                        placeholder="Alma Lucía"
                        name="NombrePasajero"
                        value={formData.NombrePasajero}
                        onChange={handleChange}
                    />

                <label className="text-primary"> Aerolinea &nbsp;</label>
                    <select 
                        className="form-select"
                        name="Aerolinea"         
                        onChange={handleChange}  
                        value={formData.Aerolinea} >
                        <option value="select one" selected>Selecciona una aerolinea</option>
                        <option  name="Aerolinea" >Latam</option>
                        <option  name="Aerolinea" >Avianca</option>
                        <option  name="Aerolinea" >Satena</option>
                        <option  name="Aerolinea" >EuroAir</option>
                        </select>

                <label className="text-primary"> Pasajero(s) &nbsp;</label>
                    <input type="number"
                        className="form-control"
                        name="Pasajero"
                        value={formData.Pasajero}
                        onChange={handleChange}
                    />

                <label className="text-primary"> Inicio viaje &nbsp;</label>
                    <input type="text"
                        className="form-control"
                        placeholder="Ciudad de inicio"
                        name="Inicio"
                        value={formData.Inicio}
                        onChange={handleChange}
                    />

                <label className="text-primary"> Destino &nbsp;</label>
                    <input type="text"
                        className="form-control"
                        placeholder="Destino"
                        name="Destino"
                        value={formData.Destino}
                        onChange={handleChange}
                    />

                <label className="text-primary"> Fecha de viaje &nbsp;</label>
                    <input type="date"
                        className="form-control"
                        name="HoraDestino"
                        value={formData.HoraDestino}
                        onChange={handleChange}
                    />
            </div>
                { showMessage ? 
                    <div className="alert alert-primary mt-3 col-md-5 mx-auto" role="alert"><i className="fas fa-check"></i> Tiquete enviado con éxito</div>
                 : ''}
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Save changes</button>
            </div>
                </form>
            </div>
        </div>
    </div>
    )
}