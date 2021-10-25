export const validator = (data, config) => {
  const errors = {};
  const validate = (validateMethod, data, config) => {
    switch (validateMethod) {
      case 'isRequired':
        if (!data.trim()) return config.message;
        break;

      case 'validYear':
        const currentYear = new Date().getFullYear();
        if (+data > currentYear + 1 || +data < currentYear - 150 || isNaN(data))
          return config.message;
        break;

      case 'isUrl':
        const urlRexExp =
          /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        if (!urlRexExp.test(data)) return config.message;
        break;
    }
  };

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      error && !errors[fieldName] && (errors[fieldName] = error);
    }
  }

  return errors || {};
};
