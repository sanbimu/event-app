import type { FilterQuery } from 'mongoose';
import type { UserDocument } from '~/database/models';
import { User } from '~/database/models';

export namespace UserController {
  export async function findOneOrCreate(
    filter: FilterQuery<UserDocument>,
    doc: Partial<UserDocument>,
  ) {
    const user = await User.findOne(filter);

    if (!user) {
      return await User.create({
        ...filter,
        ...doc,
      });
    }

    return user;
  }
}
