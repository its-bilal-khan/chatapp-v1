import { Chat } from 'store/chat';

export default class Store {
    public chats: Map<string, Chat>;

    constructor(){
        this.chats = new Map()
    }

    public get ChatsCount(){
        return this.chats.size
    }

    updateStore(keyToUpdate: string, data: any) {
    }

}