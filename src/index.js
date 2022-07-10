import { Location } from "./Location";
import { BucketList } from "./BucketList";

// Form Selections
let form = document.querySelector("#submitForm");
let locationInput = document.querySelector("#locationInput");
let topThingInput = document.querySelector("#topThingInput");
let estCostInput = document.querySelector("#estCostInput");

// Display Selections
let bucketListUl = document.querySelector("#bucketListContainer > ul");
let locationResult = document.querySelector("#location");
let topThingResult = document.querySelector("#topThing");
let estCostResult = document.querySelector("#estCost");
let removeBtn = document.querySelector("#removeBtn");

// Script Values
let bucketList = new BucketList();

// Event Listeners
// Form Submitted
form.addEventListener("submit", (event) => {
    event.preventDefault();

    let location = locationInput.value;
    let topThing = topThingInput.value;
    let estCost = estCostInput.value;
    
    // Will make new location from inputs
    let newLocation = new Location(location, topThing, estCost)

    // Will add location to bucket list
    bucketList.add(newLocation);

    // Will update dom
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = newLocation.location;

    // li is clicked
    li.addEventListener("click", (event) => {
        // will display location details in card
        locationResult.textContent = newLocation.location;
        topThingResult.textContent = newLocation.topThing;
        estCostResult.textContent = newLocation.estCost;

        // enable remove button on card
        removeBtn.disabled = false;
        removeBtn.onclick = (event) => {
            // removes location from bucket list
            bucketList.remove(newLocation);

            // reset card display values
            locationResult.textContent = "";
            topThingResult.textContent = "";
            estCostResult.textContent = "";

            // disabled remove button
            removeBtn.disabled = true;

            // remove li from dom
            bucketListUl.removeChild(li);
        };
    });

    bucketListUl.appendChild(li);

    // Clear Form Inputs
    locationInput.value = "";
    topThingInput.value = "";
    estCostInput.value = "";
})
