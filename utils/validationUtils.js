const validateEmail = (str) => /^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/.test(str)
const validatePhone = (str) => /^(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})$/.test(str)

export {
  validateEmail,
  validatePhone
}
