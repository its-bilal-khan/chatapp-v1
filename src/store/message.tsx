import { ReactNode } from 'react';

export default class Message {
  message: string | ReactNode;
  time: string;
  isSender: boolean;
  constructor(message: string | ReactNode, time: string, isSender: boolean) {
    this.message = message;
    this.time = time;
    this.isSender = isSender;
  }
}

