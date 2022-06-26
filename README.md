# Welcome to EcomMercat 🛒

## Summary

Here, you'll be able to:

- See a bunch of items of your loved Nintendo characters 🕹.
- Add items to your cart.
- Open a expandable mini cart where you'll be able to:
    - check your added items.
    - add 1 or remove 1.
    - check the total price.
- See a checkout page with:
    - your added items.
    - buttons to add 1 or remove 1.
    - a button to delete all the units of a specific item at once.
    - the total price.
- Use the app on both dark and light modes, with the switch in the navbar.
- Persist your cart in local storage, so you don't need to start collecting items again if you refresh the page.

## Get started

To run the app, you'll have 2 options:

1. Go to the [deployed website](https://pablopoggiog.github.io/ecommercat/).
2. Run the app locally.

### Run the app locally

### `npm i`

Installs the required dependencies.\

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000/ecommercat](http://localhost:3000/ecommercat) to view it in the browser (note the /ecommercat at the end).

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

## Flow

1. When loading the app, it'll automatically fetch the items' data and display the cards on the screen (it could take ~2 seconds, a spinner will be displayed in the meanwhile).
2. If you like some item, click on its cart button. Click on it and will expand 
3. On the right side of the navbar menu, spot the profile button (the one with a funny face). Click on it and will expand a menu with your cart.
4. Play with the cart, adding and removing units of your items.
5. Once you're done with that, look for the `Checkout` button and click on it 🔥.
6. On /checkout you'll see your cart again, but this time with the aggregates of:
    - the type of item specified for each one in your cart.
    - a delete button, to remove all the units of an item at once.
7. There's a dummy `Finish Purchase` button, it does nothing for the moment.

### ⚡️ Thank you for making it this far! ⚡️
If you have suggestions, feel free to open an issue or PR and I'll be glad to review it.