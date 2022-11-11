import {Model, Table, Column} from "sequelize-typescript"

@Table
export default class Admin extends Model {
  @Column
  username!: string
  @Column
  password!: string
  @Column
  age!: number
  @Column
  mobile!: string
  @Column
  email!: string
}