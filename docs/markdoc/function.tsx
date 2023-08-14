/* Use this file to export your Markdoc functions */

export const includes = {
  transform(parameters: { [s: string]: any } | ArrayLike<any>) {
    const [array, value] = Object.values(parameters)

    return Array.isArray(array) ? array.includes(value) : false
  },
}

export const upper = {
  transform(parameters: any[]) {
    const string = parameters[0]
    return typeof string === 'string' ? string.toUpperCase() : string
  },
}
