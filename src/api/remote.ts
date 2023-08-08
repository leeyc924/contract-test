import { Item } from 'types/list';
import { http } from './http';

export function getList() {
  return http.get<Item[]>('/list');
}