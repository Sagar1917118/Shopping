# ShoppingApp
This is Shopping App using React , Redux , CSS, Tailwind, JavaScript

This project is deployed on Vercel [live demo](https://shopping-application-sandy.vercel.app/).

# Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `npm i`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Additional Librabies Used
### `Redux`

## Features

### `Product Listing`:
Display all products in a grid or list layout.\
Each product item should show the product image, name, price, and a "View Details" button.\
![image](https://github.com/user-attachments/assets/3bf1b069-8947-4e09-ab2c-b923cd692b91)
![image](https://github.com/user-attachments/assets/c1b62d01-0596-44fa-84e6-5d8351449528)
![image](https://github.com/user-attachments/assets/aa0feb82-fa74-4015-8210-0f8879064dc4)\

### `Product Details`:
When a user clicks "View Details," display a detailed view of the
product, including its description and a larger image.\
Implement a way to navigate back to the product listing, use React
Router.\
![image](https://github.com/user-attachments/assets/b865522f-dfd0-4aed-b88a-4441977a1992)
![image](https://github.com/user-attachments/assets/90648a41-52da-4a8e-9694-030ca6b7fc5b)
![image](https://github.com/user-attachments/assets/3be7a491-1fea-4f65-9b76-714c522bedb4)


### `Search Functionality`:
Include a search bar that allows users to search products by name.\
Update the product listing in real-time as the user types.\
![image](https://github.com/user-attachments/assets/1d52e55d-8f07-4dd9-92b8-f6838c6017c9)

### `Category Filter`:
Provide a list of categories.\
Allow users to filter products by selecting one or more categories.\
![image](https://github.com/user-attachments/assets/da6daa01-6501-4f7a-9094-46257f63f7ce)
![image](https://github.com/user-attachments/assets/106ec529-148d-4fcf-97b2-ccff6976a683)

## `Sorting`:
Allow users to sort products by price (ascending or descending).\
![image](https://github.com/user-attachments/assets/51159db5-9720-4351-b3a4-0cd57c151fce)
![image](https://github.com/user-attachments/assets/142377fb-3587-4de3-ad0c-308868e4c2e2)



### `Add to Cart Functionality`:
Enable users to add products to a cart.\
Display the number of items in the cart.\
![image](https://github.com/user-attachments/assets/04765f01-d455-428c-bd56-a5717c7a3c52)
![image](https://github.com/user-attachments/assets/bae870c8-c602-496c-b0fe-7c964d045b68)
![image](https://github.com/user-attachments/assets/e912a452-5585-4aa5-bb53-ff18f6c7f2cf)
![image](https://github.com/user-attachments/assets/b63169ad-ca29-4eb5-8110-a9c86f6476fe)
![image](https://github.com/user-attachments/assets/4e08133e-50cc-41ef-abbb-77bcf199a48e)

### `Responsive Design`:
Ensure the application is responsive and works well on various screen
sizes, including desktops, tablets, and mobiles.

### `Animations`:
Product cards animate on hover

## Challenges
### `Challenge 1: Managing State for Search, Filter, and Product Details`\
Problem: Handling multiple state variables (for search, category filters, and selected product details) in a React application can become complex. Ensuring that each component updates and reflects the state changes correctly requires careful planning and implementation.\

Solution: State Management:

Use the useState hook to manage individual states for:
The search query (searchTerm).
The selected category filter (selectedCategory).
The currently selected product for detailed view (selectedProduct).
Implement Derived State:

Combine the logic for search and filtering into a derived state. Use the Array.filter() method to filter products dynamically based on the search term and selected category.

### `Challenge 2: Implementing Responsive Design`
Problem: Creating a responsive and visually appealing design can be challenging when not using comprehensive UI libraries like Material-UI or Bootstrap. Ensuring consistent layout and design across various devices requires attention to detail.

Solution: Use Flexbox:

Utilize CSS Flexbox and Grid for layout. They are lightweight and provide robust solutions for creating responsive designs.
















