export class ArrayBufferConverter {
    constructor() {
        this.bufferView = null;
    }

    load(buffer) {
        this.bufferView = new Uint16Array(buffer);
    }

    toString() {
        if (!this.bufferView) {
            throw new Error('Data not loaded');
        }

        let str = '';

        for (let i = 0; i < this.bufferView.length; i += 1) {
            str += String.fromCharCode(this.bufferView[i]);
        }
        return str;
    }
}