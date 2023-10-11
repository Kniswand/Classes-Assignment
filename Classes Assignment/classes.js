// Creates the class
class Media {
    constructor(id, title, year, value) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.value = value;
    }
}
  
// The (const) classes
const book = new Media("9781851243853", "A Table Alphabeticall", "1604", 15);
const dvd = new Media("N/A", "Twister", "1996", 9.60);
const cd = new Media("1R1 6890", "52nd Street", "1978", 7.98);
  
// Create an array to store the media items
const mediaItems = [book, dvd, cd];
  
// Display the classes
const items = document.getElementsByClassName("desc")[0];
const updateItems = () => {
    items.innerHTML = mediaItems
    .map((media) => `<i>${media.title}</i> - $${media.value.toFixed(2)} (ID: ${media.id}, Year: ${media.year})`)
    .join("<br>");
};
updateItems();
  
// Get the total prices
const total = document.getElementsByClassName("desc")[1];
const totalPrice = mediaItems.reduce((sum, media) => sum + media.value, 0);
total.innerHTML = `Total: $${totalPrice.toFixed(2)}`;
total.style.backgroundColor = "gray";
  
// Will remove randomly one of the items
const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function () {
if (mediaItems.length > 0) {
    const randomNumber = Math.floor(Math.random() * mediaItems.length);
    //console.log(randomNumber) (UNUSED)
    mediaItems.splice(randomNumber, 1);
    updateItems();
    const newTotalPrice = mediaItems.reduce((sum, media) => sum + media.value, 0);
    total.innerHTML = `Total: $${newTotalPrice.toFixed(2)}`;
    }
  });
  