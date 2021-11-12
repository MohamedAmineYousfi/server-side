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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachsController = void 0;
const common_1 = require("@nestjs/common");
const coachs_service_1 = require("./coachs.service");
const create_coach_dto_1 = require("./dto/create-coach.dto");
const update_coach_dto_1 = require("./dto/update-coach.dto");
let CoachsController = class CoachsController {
    constructor(coachsService) {
        this.coachsService = coachsService;
    }
    create(createCoachDto) {
        return this.coachsService.create(createCoachDto);
    }
    findAll() {
        return this.coachsService.findAll();
    }
    findOne(id) {
        return this.coachsService.findOne(+id);
    }
    update(id, updateCoachDto) {
        return this.coachsService.update(+id, updateCoachDto);
    }
    remove(id) {
        return this.coachsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_coach_dto_1.CreateCoachDto]),
    __metadata("design:returntype", void 0)
], CoachsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CoachsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CoachsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_coach_dto_1.UpdateCoachDto]),
    __metadata("design:returntype", void 0)
], CoachsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CoachsController.prototype, "remove", null);
CoachsController = __decorate([
    (0, common_1.Controller)('coachs'),
    __metadata("design:paramtypes", [coachs_service_1.CoachsService])
], CoachsController);
exports.CoachsController = CoachsController;
//# sourceMappingURL=coachs.controller.js.map