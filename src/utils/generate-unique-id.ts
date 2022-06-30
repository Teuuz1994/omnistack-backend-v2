import { randomUUID } from 'crypto';

function generateUniqueId() {
  return randomUUID();
}

export default generateUniqueId;
