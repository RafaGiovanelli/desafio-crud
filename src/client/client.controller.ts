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
    client: any,
  ): Promise<Client> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { error, value } = CreateClientDto.validate(client);
    if (error) {
      throw new Error(`Validation error: ${error.message}`);
    }
    return this.clientService.create(value);
  }

  @Put('update/:id')
  async updateClient(
    @Param('id')
    id: string,
    @Body()
    client: any,
  ): Promise<Client> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { error, value } = UpdateClientDto.validate(client);
    if (error) {
      throw new Error(`Validation error: ${error.message}`);
    }
    return this.clientService.updateById(id, value);
  }

  @Delete('delete/:id')
  async deleteClientById(@Param('id') id: string): Promise<Client> {
    return this.clientService.deleteById(id);
  }
}
