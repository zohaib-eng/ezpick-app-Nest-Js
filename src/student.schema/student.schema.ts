/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Student {
  @Prop()
  name: string;
  @Prop()
  roleNo: number;
  @Prop()
  class: number;
  @Prop()
  gender: string;
  @Prop()
  marks: number;
}
export const StudentSchema = SchemaFactory.createForClass(Student);
