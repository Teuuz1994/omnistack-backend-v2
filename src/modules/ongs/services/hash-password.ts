import { hash, compare } from 'bcrypt';

class HashService {
  async genHash(data: string) {
    return hash(data, 12);
  }

  async compareHash(data: string, crypted: string) {
    return compare(data, crypted);
  }
}

export default HashService;
