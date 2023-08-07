export function getList() {
  return fetch('/list').then(res => res.json());
}