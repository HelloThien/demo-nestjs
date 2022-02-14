import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '.././entity/post.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post1, PostDocument } from '../schema/post.schema';



@Injectable()
export class PostService {

  constructor(
    @InjectRepository(Post) private postsRepository: Repository<Post>,
    @InjectModel(Post1.name) private postModel: Model<PostDocument>
  ) {}
  findAll() {
    return Promise.all([this.postModel.find().exec(),this.postsRepository.find()]).then(result=>{
      const newResult = [...result[0],...result[1]]
      return newResult
    })
  }
   
}
