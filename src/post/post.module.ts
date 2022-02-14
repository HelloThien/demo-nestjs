
import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import {PostService } from './post.service'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from '../entity/post.entity';
import { MongooseModule } from '@nestjs/mongoose';  
import { Post1, PostSchema } from '../schema/post.schema';

@Module({
  imports:[
    TypeOrmModule.forFeature([Post]),
    MongooseModule.forFeature([{ name: Post1.name, schema: PostSchema }]),
  ],
  controllers: [PostController],
  providers:[PostService]
})
export class PostModule {}
