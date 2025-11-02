import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './schemas/client.schemas';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client-dto';
import type { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Get()
  async findAllClients(@Query() query: ExpressQuery): Promise<Client[]> {
    return this.clientService.findAll(query);
  }

  @Get('searchById/:id')
  async findClientById(@Param('id') id: string): Promise<Client> {
    return this.clientService.findById(id);
  }

  @Post('new')
  async createClient(
    @Body()
    client: CreateClientDto,
  ): Promise<Client> {
    return this.clientService.create(client);
  }

  @Put('update/:id')
  async updateClient(
    @Param('id')
    id: string,
    @Body()
    client: UpdateClientDto,
  ): Promise<Client> {
    return this.clientService.updateById(id, client);
  }

  @Delete('delete/:id')
  async deleteClientById(@Param('id') id: string): Promise<Client> {
    return this.clientService.deleteById(id);
  }
}
