
import { Model } from 'sequelize-typescript';
function paginate<T extends Model[]>(data: T,currentPage: number = 1, total: number = 0, limti: number = 10) {
  return {
    data,
    currentPage,
    total,
    totalPage: Math.ceil(total / limti),
    limti
  }
}

export default paginate