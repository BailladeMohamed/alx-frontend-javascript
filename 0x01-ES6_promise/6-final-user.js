// JoJo refrence, final user
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userData = await signUpUser(firstName, lastName).then((data) => ({
    status: 'fulfilled',
    val: data,
  }));

  const fileData = await uploadPhoto(fileName).catch((err) => ({
    status: 'rejected',
    val: err.toString(),
  }));

  return Promise.resolve([userData, fileData]);
}
