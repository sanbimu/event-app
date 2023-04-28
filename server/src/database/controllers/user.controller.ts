import type { DeepPartial } from 'mercurius-codegen';
import type { FilterQuery } from 'mongoose';
import type { User as IUser } from '~/graphql/schema';
import { User } from '~/database/models';

export namespace UserController {
  export async function findOneOrCreate(
    filter: FilterQuery<IUser>,
    doc: DeepPartial<IUser>,
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
