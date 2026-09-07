import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity('rooms')
export class ScreeningEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  movieTitle!: string;

  @Column({ length: 150 })
  capacity!: number;

  @OneToMany(() => ScreeningEntity, (order) => order.customer)
  orders!: OrderEntity[];

  
}