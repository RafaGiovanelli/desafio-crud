/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Body,
  Controller,
  Delete,
  Get,
  //   NotFoundException,
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

  //   @Post('new')
  //   async createClient(
  //     @Body()
  //     client: any,
  //   ): Promise<Client> {
  //     const { error, value } = CreateClientDto.validate(client);
  //     if (error) {
  //       throw new NotFoundException(`Validation error: ${error.message}`);
  //     }
  //     return this.clientService.create(value);
  //   }

  @Post('new')
  async createClient(
    @Body()
    client: CreateClientDto,
  ): Promise<Client> {
    return this.clientService.create(client);
  }

  //   @Put('update/:id')
  //   async updateClient(
  //     @Param('id')
  //     id: string,
  //     @Body()
  //     client: any,
  //   ): Promise<Client> {
  //     const { error, value } = UpdateClientDto.validate(client);
  //     if (error) {
  //       throw new NotFoundException(`Validation error: ${error.message}`);
  //     }
  //     return this.clientService.updateById(id, value);
  //   }

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
