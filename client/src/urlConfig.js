const baseUrl = "https://youtube--clone.herokuapp.com"

export const api =  `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
    return `${baseUrl}/public/${fileName}`;
  };