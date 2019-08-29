// parse the filename from a path using regex
  getFileName(path) {
    return path.match(/[* _\w]+[-_\w]+[* _\w]+[-_\w]+[.][\w]+$/i)[0];
  }

  // read image onChange Typerscript
  readURL(event: Event): void {
    if ((<HTMLInputElement>event.target).files && (<HTMLInputElement>event.target).files[0]) {
      const file = (<HTMLInputElement>event.target).files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result as string;

      reader.readAsDataURL(file);

      // getting selected image name
      this.imagePath = event.target;
      const path = this.getFileName(this.imagePath.value);
      this.imgName = path;
    }
  }
