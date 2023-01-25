import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
export class Product {
    @PrimaryColumn()
    id: string;

    @Column()
    image_path: string;

    @Column()
    price: number;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}