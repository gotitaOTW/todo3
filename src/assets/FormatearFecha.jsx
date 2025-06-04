function FormatearFecha({fecha}) {
    console.log(fecha);
    const opciones = {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false, // 24-hour format
    };
  
    const fechaFormateada = fecha.toLocaleString('es-ES', opciones).replace(',', '');

    console.log(fechaFormateada);
    return fechaFormateada;
  }

export {FormatearFecha}