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
exports.RoomEntity = void 0;
const screening_entity_1 = require("../../screenings/entities/screening.entity");
const typeorm_1 = require("typeorm");
let RoomEntity = class RoomEntity {
    id;
    name;
    capacity;
    rooms;
};
exports.RoomEntity = RoomEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RoomEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, length: 50 }),
    __metadata("design:type", String)
], RoomEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 150 }),
    __metadata("design:type", Number)
], RoomEntity.prototype, "capacity", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => screening_entity_1.ScreeningEntity, (room) => room.screening),
    __metadata("design:type", Array)
], RoomEntity.prototype, "rooms", void 0);
exports.RoomEntity = RoomEntity = __decorate([
    (0, typeorm_1.Entity)('rooms')
], RoomEntity);
//# sourceMappingURL=room.entity.js.map