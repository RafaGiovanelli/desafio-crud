import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Client } from './schemas/client.schemas';
import type { Query } from 'express-serve-static-core';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel('Client')
    private readonly clientModel: mongoose.Model<Client>,
  ) {}

  async findAll(query: Query): Promise<Client[]> {
    const resPerPage = 2;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    const keyword = query.keyword
      ? {
          name: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};
    return this.clientModel
      .find({ ...keyword })
      .limit(resPerPage)
      .skip(skip);
  }

  async findById(id: string): Promise<Client> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      console.log('ID inválido recebido:', id);
      throw new BadRequestException('ID inválido');
    }
    const clientById = await this.clientModel.findById(id).exec();
    if (!clientById) {
      throw new NotFoundException('Cliente não encontrado');
    }
    return clientById;
  }

  async create(client: Client): Promise<Client> {
    return this.clientModel.create(client);
  }

  async updateById(id: string, client: Client): Promise<Client> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      console.log('ID inválido recebido:', id);
      throw new BadRequestException('ID inválido');
    }
    return this.clientModel
      .findByIdAndUpdate(id, client, {
        new: true,
        runValidators: true,
      })
      .orFail(new NotFoundException('Cliente não encontrado'));
  }

  async deleteById(id: string): Promise<Client> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      console.log('ID inválido recebido:', id);
      throw new BadRequestException('ID inválido');
    }
    return this.clientModel
      .findByIdAndDelete(id)
      .orFail(new NotFoundException('Cliente não encontrado'));
  }
}
