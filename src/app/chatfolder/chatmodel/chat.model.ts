export class ChatMessage {
    $key?: string;
    // eventId?:string;
    email?: string;
    name?: string;
    message?: string;
    timeSent?: Date = new Date();
}