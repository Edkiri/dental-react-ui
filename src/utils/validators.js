const validators = {
  email: {
    pattern: /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/,
    errorMessage: 'Ingresa una dirección de correo válido',
  },
  password: {
    pattern: /^(?=.*[0-9!@#$%^&*])(.{8,})$/,
    errorMessage: 'Ingresa mínimo 7 letras y un caracter especial o número',
  },
};

export default validators;
