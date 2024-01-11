
export const DownloadImage = async (downloadUrl:  Response, imageName: string) => {
    // 3rd approach
    try {
      const imageURL = `${downloadUrl.url}/${imageName}.jpg`;
      console.log(imageURL);
      const response = await fetch(imageURL);
      const blob = await downloadUrl.blob();  // extract the blob from the Response
  
      const objectUrl = URL.createObjectURL(blob);
  
      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = `${imageName}.jpg`;
  
      link.click();
  
      URL.revokeObjectURL(objectUrl);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };
  