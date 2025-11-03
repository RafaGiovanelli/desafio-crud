import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from '../../auth/schemas/user.schemas';

@Schema({
  timestamps: true,
})
export class Client {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  cellphone: number;

  @Prop()
  city: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}
export const ClientSchema = SchemaFactory.createForClass(Client);
