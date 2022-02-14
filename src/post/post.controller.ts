import { Controller, Get, Request, Post } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor( private postService: PostService) {}
  @Get()
  findAll(){ 
    return this.postService.findAll()
  }
}
