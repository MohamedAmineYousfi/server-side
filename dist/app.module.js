"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
require('dotenv').config();
const user_module_1 = require("./user/user.module");
const restaurants_module_1 = require("./restaurants/restaurants.module");
const blogs_module_1 = require("./blogs/blogs.module");
const events_module_1 = require("./events/events.module");
const coachs_module_1 = require("./coachs/coachs.module");
const gyms_module_1 = require("./gyms/gyms.module");
const posts_module_1 = require("./posts/posts.module");
const recipes_module_1 = require("./recipes/recipes.module");
const admin_module_1 = require("./admin/admin.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                name: 'default',
                type: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: 5432,
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                synchronize: true,
                logging: true,
                dropSchema: false,
                entities: ["dist/**/*.entity{.ts,.js}"],
            }), user_module_1.UserModule, restaurants_module_1.RestaurantsModule, blogs_module_1.BlogsModule, events_module_1.EventsModule, coachs_module_1.CoachsModule, gyms_module_1.GymsModule, posts_module_1.PostsModule, recipes_module_1.RecipesModule, admin_module_1.AdminModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map