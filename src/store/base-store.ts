import { Signal } from '@preact/signals-react';

export interface IBaseStore {
    signal: {
        [key: string]: Signal
    }
}