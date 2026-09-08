import { ScreeningEntity } from 'src/screenings/entities/screening.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity('rooms')
export class RoomEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true, length: 50 })
  name!: string;

  @Column({ length: 150 })
  capacity!: number;

  @OneToMany(() => ScreeningEntity, (room) => room.screening)
  rooms!: RoomEntity[];
  
}