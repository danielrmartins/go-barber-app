import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const ValidationErrors: Errors = {};

  err.inner.forEach((error: ValidationError) => {
    ValidationErrors[error.path] = error.message;
  });
  return ValidationErrors;
}
