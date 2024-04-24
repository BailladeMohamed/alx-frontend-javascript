// asyncUploadUser calls 2 functions and retrns an obj
// with the wanted format

import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
}
