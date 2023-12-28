import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  postHello():string{
    return 'Hellow world nut post';
  }
  patchHello():string{
    return 'Hellow world nut patch';
  }
  putHello():string{
    return 'Hellow world nut put';
  }
  deleteHello():string{
    return 'Hellow world nut delete';
  }
}
