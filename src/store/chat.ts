import { IBaseStore } from 'store/base-store';
import Message from 'store/message';

import { Signal, signal } from '@preact/signals-react';

export class Chat  {
    messages: Map<string, Message>
    id: number
    title: string
    subTitle: string

    constructor(title:string, subTitle: string) {
        this.id = Date.now()
        this.messages = new Map()
        this.title = title
        this.subTitle = subTitle       
    }
}

export default class ChatsStore implements IBaseStore {
    chats: Map<number, Chat>
    signal: { 
        chats: Signal<any>;
        selectedChatId: Signal<any>;
        selectedChatMessages: Signal<any>;
     };
    constructor(){
        this.chats = new Map()
        this.signal = {
            chats: signal<Chat[]>([]),
            selectedChatId: signal<number>(),
            selectedChatMessages: signal<Message[]>([])
        }
    }
    
    public get ChatsCount(){
        return this.chats.size
    }

    public get Chats() {
       return Array.from(this.chats.values())
    }

    public set Chats(chats: Chat[]) {
        this.chats = new Map(chats.map((chat:Chat) =>[chat.id, chat]))
        this.signal.chats.value = this.Chats
    }

    public set Chat(chat: Chat) {
        this.chats.set(chat.id, chat)
        this.signal.chats.value = this.Chats
    }
}