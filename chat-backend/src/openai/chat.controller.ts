import { Body, Controller, Post } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async getResponse(@Body('message') message: string): Promise<string> {
    return this.chatService.getChatResponse(message);
  }
}
