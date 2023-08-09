import { describe, it, expect } from 'vitest';
import { serializeQueryParams } from './serializeQueryParams';

describe('serializeQueryParams', () => {
  it('should serialize query params', () => {
    const params = {
      foo: 'bar',
      baz: 123,
      qux: true,
      corge: [1, 2, 3],
    };

    const result = serializeQueryParams(params);

    expect(result).toBe('?foo=bar&baz=123&qux=true&corge=1,2,3');
  });

  it('should serialize query params with empty values', () => {
    const params = {
      foo: '',
    };

    const result = serializeQueryParams(params);

    expect(result).toBe('?foo=');
  });

  it('should not serialize query params with undefined values', () => {
    const params = {
      foo: undefined,
    };

    const result = serializeQueryParams(params);

    expect(result).toBe('');
  });
});
