import { ArrayBufferConverter } from "../js/arraybuffer.js";
import getBuffer from "../js/buffer.js";

test('convert ArrayBuffer to string', () => {
    const buffer = getBuffer();
    const convert = new ArrayBufferConverter();
    convert.load(buffer);

    const result = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

    expect(convert.toString()).toEqual(result);
});

test('test of error', () => {
    const convert = new ArrayBufferConverter();
    expect(() => {
        convert.toString();
    }).toThrow('Data not loaded');
});