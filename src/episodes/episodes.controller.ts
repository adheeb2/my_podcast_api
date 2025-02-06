import { Controller, Get, Post } from '@nestjs/common';

@Controller('episodes') // Defines the route /users
export class EpisodesController {
  @Get()
  findAll() {
    return 'all episodes';
  }

  findFeatured() {
    return 'featured episode';
  }
  @Post()
  create() {
    return 'create new episodes';
  }
}
