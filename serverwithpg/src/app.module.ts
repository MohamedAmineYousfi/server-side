import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as Joi from 'joi';
import { DatabaseModule } from './dataBase//database.module';
import { UserModule } from './user/user.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { BlogsModule } from './blogs/blogs.module';
import { EventsModule } from './events/events.module';
import { CoachsModule } from './coachs/coachs.module';
import { GymsModule } from './gyms/gyms.module';
import { PostsModule } from './posts/posts.module';
import { RecipesModule } from './recipes/recipes.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    validationSchema: Joi.object({
      POSTGRES_HOST: Joi.string().required(),
      POSTGRES_PORT: Joi.number().required(),
      POSTGRES_USER: Joi.string().required(),
      POSTGRES_PASSWORD: Joi.string().required(),
      POSTGRES_DB: Joi.string().required(),
      PORT: Joi.number(),
    }),
  }), UserModule, RestaurantsModule, BlogsModule, EventsModule, CoachsModule, GymsModule, PostsModule, RecipesModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
