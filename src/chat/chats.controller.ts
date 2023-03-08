import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { PromptChatDto, PromptPrefixDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Post()
  prompt(@Body() promptChatDto: PromptChatDto) {
    return this.chatsService.prompt(promptChatDto);
  }

  @Post('/prefixes')
  addPrefix(@Body() promptPrefixDto: PromptPrefixDto) {
    return this.chatsService.addPrefix(promptPrefixDto);
  }

  @Get('/prefixes')
  readPrefixes() {
    return this.chatsService.readPrefixes();
  }

  @Post('/sms/send')
  sendText(@Body() payload: any) {
    return this.chatsService.sendText(payload);
  }
  @Post('/sms/receive')
  receiveText(@Body() payload: any) {
    return this.chatsService.receiveText(payload);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChatDto: UpdateChatDto) {
    return this.chatsService.update(+id, updateChatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatsService.remove(+id);
  }
}
