import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './student.schema/student.schema';
import { StudentController } from './controller/student.controller';
import { StudentService } from './service/student.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/students', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
  ],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {}
