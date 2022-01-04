import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';

export const FirebaseUploadPhoto = (image) => {
  if (image.length === 0) return;
  console.log(image[0].type);
  if (
    image[0].type !== 'image/png' &&
    image[0].type !== 'image/jpeg' &&
    image[0].type !== 'image/jpg'
  )
    return;
  const photo = image[0];
  return new Promise((resolve, reject) => {
    const storage = getStorage();
    const storageRef = ref(storage, `images/${photo.name}`);
    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, photo).then(() => {
      getDownloadURL(ref(storage, `images/${photo.name}`)).then((url) => {
        resolve(url);
      });
    });
  });
};

export const DeletePhotoUpload = (url) => {
  const storage = getStorage();
  // console.log(url);
  const photoURL = url.split('%')[1].split('2F')[1].split('?')[0].toLowerCase();
  // Create a reference to the file to delete
  // console.log(photoURL);
  const desertRef = ref(storage, `images/${photoURL}`);
  // Delete the file
  deleteObject(desertRef)
    .then(() => {
      console.log('File deleted successfully');
    })
    .catch((error) => {
      console.log(error);
    });
};
