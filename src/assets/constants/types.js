import { shape, string, func, oneOfType, bool, object, number,array } from 'prop-types'

export const field = shape({
  control: string,
  label: string,
  placeholder: string,
  name: string.isRequired,
  value: oneOfType([object, bool, string, number, array]),
  error: string,
  type: string,
  onChange: func.isRequired
});
