
export const DownloadImage = (imageUrl: string, imageName: string) => {
    var element = document.createElement("a");
    var file = new Blob(
      [
        imageUrl,
        imageName
      ],
      { type: "image/jpg" }
    );
    element.href = URL.createObjectURL(file);
    // console.log("File Object:", file);
    element.download = "image.jpg";
    element.click();
  };
  