import { Http, HttpResponse } from '@capacitor-community/http';

const baseUrl = 'https://staging.tripurx.com/api/v1/home/v1/getProducts';

// Example of a GET request
const doGet = async () => {
  const options = {
    url: 'https://example.com/my/api',
    headers: { 'X-Fake-Header': 'Max was here' },
    params: { size: 'XL' },
  };

  const response: HttpResponse = await Http.get(options);

  // or...
  // const response = await Http.request({ ...options, method: 'GET' })
};

// Example of a POST request. Note: data
// can be passed as a raw JS Object (must be JSON serializable)
const doPost = async () => {
  const options = {
    url: baseUrl,
    headers: { 'Content-Type': 'application/json' },
    data: { foo: 'bar', cool: true },
  };

  const response: HttpResponse = await Http.post(options);
  return response;
  // or...
  // const response = await Http.request({ ...options, method: 'POST' })
};

const setCookie = async () => {
  const options = {
    url: 'http://example.com',
    key: 'language',
    value: 'en',
  };

  await Http.setCookie(options);
};

// const deleteCookie = async () => {
//   const options = {
//     url: 'http://example.com',
//     key: 'language',
//   };

//   await Http.deleteCookie(options);
// };

// const clearCookies = async () => {
//   await Http.clearCookies({ url: 'http://example.com' });
// };

// const getCookies = async () => {
//   const cookies: HttpCookie[] = await Http.getCookies({
//     url: 'http://example.com',
//   });
// };

// const downloadFile = async () => {
//   const options = {
//     url: 'https://example.com/path/to/download.pdf',
//     filePath: 'document.pdf',
//     fileDirectory: FilesystemDirectory.Downloads,
//     // Optional
//     method: 'GET',
//   };

//   // Writes to local filesystem
//   const response: HttpDownloadFileResult = await Http.downloadFile(options);

//   // Then read the file
//   if (response.path) {
//     const read = await Filesystem.readFile({
//       path: 'download.pdf',
//       directory: FilesystemDirectory.Downloads,
//     });
//   }
// };

// const uploadFile = async () => {
//   const options = {
//     url: 'https://example.com/path/to/upload.pdf',
//     name: 'myFile',
//     filePath: 'document.pdf',
//     fileDirectory: FilesystemDirectory.Downloads,
//   };

//   const response: HttpUploadFileResult = await Http.uploadFile();
// };

export { doPost };
