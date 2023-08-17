interface QueryParams {
  [key: string]: string | number | boolean | unknown;
}

export function serializeQueryParams(params: QueryParams): string {
  const queryParamKeys = Object.keys(params);

  return queryParamKeys.reduce((result, key, index) => {
    const paramValue = params[key];

    // Skip undefined/null values
    if (paramValue == null) {
      return result;
    }

    const separator = index === 0 ? '?' : '&';
    const valueString = Array.isArray(paramValue)
      ? paramValue.join(',') // Join array values
      : paramValue.toString(); // Convert to string

    return `${result}${separator}${key}=${valueString}`;
  }, '');
}
