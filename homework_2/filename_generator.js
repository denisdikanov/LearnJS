function generateName() {
  let symbols =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let filename = "";
  for (let i = 0; i <= 5; i++) {
    filename += symbols.charAt(Math.floor(Math.random() * 6));
  }
  return photoManager.nameExists(filename) ? generateName() : filename;
}
