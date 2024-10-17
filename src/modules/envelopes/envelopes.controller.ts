import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnvelopesService } from './envelopes.service';
import { CreateEnvelopeDto } from './dto/create-envelope.dto';
import { UpdateEnvelopeDto } from './dto/update-envelope.dto';

@Controller('envelopes')
export class EnvelopesController {
  constructor(private readonly envelopesService: EnvelopesService) {}

  @Post()
  create(@Body() createEnvelopeDto: CreateEnvelopeDto) {
    return this.envelopesService.create(createEnvelopeDto);
  }

  @Get()
  findAll() {
    return this.envelopesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.envelopesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnvelopeDto: UpdateEnvelopeDto) {
    return this.envelopesService.update(+id, updateEnvelopeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.envelopesService.remove(+id);
  }
}
