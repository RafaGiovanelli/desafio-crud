import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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
}
export const ClientSchema = SchemaFactory.createForClass(Client);
