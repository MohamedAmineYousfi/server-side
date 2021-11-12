"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const auth_service_1 = require("../auth/auth/auth.service");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let UsersService = class UsersService {
    constructor(usersRepository, authService) {
        this.usersRepository = usersRepository;
        this.authService = authService;
    }
    create(user) {
        return this.authService.hashPassword(user_entity_1.User.password).pipe((0, operators_1.switchMap)((passwordHash) => {
            const newUser = new user_entity_1.User();
            newUser.email = user_entity_1.User.email;
            newUser.password = passwordHash;
            return (0, rxjs_1.from)(this.usersRepository.save(newUser)).pipe((0, operators_1.map)((user) => {
                const { password } = user, result = __rest(user, ["password"]);
            }), (0, operators_1.catchError)(err => (0, rxjs_1.throwError)(err)));
        }));
    }
    findAll() {
        return (0, rxjs_1.from)(this.usersRepository.find()).pipe((0, operators_1.map)((users) => {
            users.forEach(function (v) { delete v.password; });
            return users;
        }));
    }
    findOne(id) {
        return (0, rxjs_1.from)(this.usersRepository.findOne({ id })).pipe((0, operators_1.map)((user) => {
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }));
    }
    login(user) {
        return this.validateUser(user.email, user.password).pipe((0, operators_1.switchMap)((user) => {
            if (user) {
                return this.authService.generateJWT(user).pipe((0, operators_1.map)((jwt) => jwt));
            }
            else {
                return 'Wrong Credentials';
            }
        }));
    }
    validateUser(email, password) {
        return (0, rxjs_1.from)(this.usersRepository.findOne({ email }, { select: ['id', 'password', 'email'] })).pipe((0, operators_1.switchMap)((user) => this.authService.comparePasswords(password, user.password).pipe((0, operators_1.map)((match) => {
            if (match) {
                const { password } = user, result = __rest(user, ["password"]);
                return result;
            }
            else {
                throw Error;
            }
        }))));
    }
    update(id, updateUserDto) {
        this.usersRepository.update(id, updateUserDto);
    }
    async remove(id) {
        await this.usersRepository.delete(id);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        auth_service_1.AuthService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=user.service.js.map