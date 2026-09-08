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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreeningEntity = void 0;
const room_entity_1 = require("../../rooms/entities/room.entity");
const typeorm_1 = require("typeorm");
let ScreeningEntity = class ScreeningEntity {
    id;
    movieTitle;
    startsAt;
    status;
    screening;
};
exports.ScreeningEntity = ScreeningEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ScreeningEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 120 }),
    __metadata("design:type", String)
], ScreeningEntity.prototype, "movieTitle", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'starts_at' }),
    __metadata("design:type", Date)
], ScreeningEntity.prototype, "startsAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, default: 'scheduled' }),
    __metadata("design:type", String)
], ScreeningEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => room_entity_1.RoomEntity, (screening) => screening.rooms, {
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'room_id' }),
    __metadata("design:type", ScreeningEntity)
], ScreeningEntity.prototype, "screening", void 0);
exports.ScreeningEntity = ScreeningEntity = __decorate([
    (0, typeorm_1.Entity)('screenings')
], ScreeningEntity);
//# sourceMappingURL=screening.entity.js.map