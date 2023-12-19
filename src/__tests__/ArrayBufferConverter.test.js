import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

describe('ArrayBufferConverter class', () => {
  it('should load buffer data', () => {
    const buffer = getBuffer();
    const converter = new ArrayBufferConverter();
    converter.load(buffer);

    expect(converter.buffer).toEqual(buffer);
  });

  it('should convert buffer data to string', () => {
    const buffer = getBuffer();
    const converter = new ArrayBufferConverter();
    converter.load(buffer);

    expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });
});
