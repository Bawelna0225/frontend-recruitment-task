import { resolve } from 'path';

export const entry = './src/js/main.js';
export const output = {
    filename: 'all.js',
    path: resolve(__dirname, 'dist'),
};