const validators = {
  email: {
    pattern: /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/,
    errorMessage: 'Ingresa una dirección de correo válido',
  },
  password: {
    pattern: /^(?=.*[0-9!@#$%^&*])(.{8,})$/,
    errorMessage: 'Ingresa mínimo 7 letras y un caracter especial o número',
  },
  spainPhoneNumber: {
    pattern: /^(?:(?:\+|00)34[-\s]?)?(?:[6]\d{8}|[89]\d{8})$/,
    errorMessage: 'Ingresa un número de teléfono válido en España',
  },
  name: {
    pattern: /^[a-zA-Z0-9áéíóúÁÉÍÓÚ\s]+$/,
    errorMessage: 'Ingresa solo letras',
  },
  minTextLength: {
    pattern: /.{11,}/,
    errorMessage: 'Ingresa un mensaje de más de 10 letras',
  },
};

export default validators;
