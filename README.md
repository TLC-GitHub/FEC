<h1 name="readme-top">Lelelime</h1>

## Contributors (from left to right)
<a href="https://github.com/TLC-GitHub/FEC/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=TLC-GitHub/FEC" />
</a>

- [Shawn Oh](https://github.com/spottyzot) 
  - <a href="#qna">Questions and Answers</a>
- [Siming Yum](https://github.com/simingyum) 
  - <a href="#related">Related Items and Comparison</a>
- [Aaron Yabut](https://github.com/Aaronyabut) 
  - <a href="#ratings">Ratings and Reviews</a>
- [Quargs Greene](https://github.com/quargsgreene) 
  - <a href="#overview">Product Overview</a>

## Table of Contents
- [About The Project](https://github.com/TLC-GitHub/FEC/edit/main/README.md#about-the-project)
- [Getting Started](https://github.com/TLC-GitHub/FEC/edit/main/README.md#getting-started)
  - [Installing Dependencies](https://github.com/TLC-GitHub/FEC/edit/main/README.md#how-to-install-dependencies)
  - [Running the Project](https://github.com/TLC-GitHub/FEC/edit/main/README.md#running-the-project)
- [Project Details](https://github.com/TLC-GitHub/FEC/edit/main/README.md#project-details)

## About The Project
Lelelime is a single page e-commerce web application created utilizing React and Node/Express. This project was created by a team of four engineers.

### Built using:

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- [Cloudinary Documentation](https://cloudinary.com/documentation/image_upload_api_reference)


## Getting Started

### How to Install Dependencies
```
npm install
```
### Running the Project
Runs development server:
```
 npm run client-dev
```
```
 npm run server-dev
```
 #### or
```
 yarn run client-dev
```
```
 yarn run server-dev
```
The application will be running on http://localhost:3000. This script runs webpack and watches it, auto-refreshing on every new change that you save. You will require a Hackreactor API token inside of a config.js file and dotenv file as well as the port set to 3000.


<h2 name="overview">Product Overview - Quargs Greene</h2>
<details>
  <summary>Component features: </summary>
  
- #### Product Information
  * The overview will contain essential product details regarding price, category, name, and other style details.
- #### Image Gallery
  * An image carousel is presented for users to scroll through various products offered. The image bar on the left    presents users with additional photos to scroll through. Clicking the main image returns a magnified view of it.
- #### Style Selector
  * Available styles can be selected and will show the user an image of the current product with the new style attached to it. Users are able to select through the assortment provided.
- #### Add to Cart
  * Users can add whichever products with whichever styles selected to the cart. If a product is available, they can select it and add it accordingly.
</details>
<!-- PLACE PRODUCT OVERVIEW GIF UNDER -->


<!-- PLACE PRODUCT OVERVIEW GIF ABOVE -->

<h2 name="related">Related Items and Comparison - Siming Yum</h2>
<details>
  <summary name="related">Component features: </summary>
  
- #### Related Products List
  * Displays a list of products that are related to the current product being viewed. 
  * Clicking a single product card returns the details of that product. 
  * Clicking the star opens a modal that compares the current product to the clicked product.
  * Presented as a carousel to scroll through different product options.
- #### Your Outfit List
  * Displays a custom list of outfits that the user selects and adds to their outfit collection.
  * Users can remove the product from their collection by clicking X on the card.
  * Outfits are also presented as a carousel to sort through the different products that exist in their collection.
</details>
<!-- PLACE RELATED PRODUCT GIF UNDER -->


<!-- PLACE RELATED PRODUCT GIF ABOVE -->

<h2 name="qna">Questions and Answers - Shawn Oh</h2>
<details>
  <summary>Component features: </summary>
  
- #### Question List
  * Questions are rendered out two at a time with user's able to load in two more at a time with each click of "Load more Questions". All questions are sorted by their helpfulness rating.
- #### Question
  * Questions can be voted on their helpfulness or reported. Both interactions will be remembered through refresh and will allow the user to only interact with the question once.
- #### Answer
  * Answers can be voted on their helpfulness or reported. Both interactions will be remembered through refresh and will allow the user to only interact with the answer once.
  * Answers contain images that will render with the answer, displaying them. 
  * Answers from the seller will be prioritized in terms of appearing on the list.
  
- #### Add Answers / Questions
  * Answers and Questions can be added with their respective buttons ("Add Answer" and "Add A Question").
  
  * Each button opens up a modal form for the user to fill out and submit. All fields are validated and will not submit completely until all input fields are valid. Images can be added onto the Answer Modal, uploaded through Cloudinary API.
  
- #### Searchbar Filter
  * Questions can be sorted through with the search bar to filter out responses that match the current query.
  * The questions list will continue to filter through keystrokes and will reset once the amount of characters is less than three.
</details>
<!-- PLACE QNA GIF UNDER -->


<!-- PLACE QNA GIF ABOVE -->

<h2 name="ratings"> Ratings and Reviews - Aaron Yabut</h2>
<details>
  <summary>Component features: </summary>
  
- #### List of Reviews
  * Reviews are displayed two at a time, according to the current sort method.
  * More reviews can be displayed by clicking the "More Reviews" button and will display two more reviews
- #### Sorting and Star Rating Filter
  * Review list can be sorted by newest, helpfulness, and relevant, by choosing from a dropdown menu.
  * Review list can also be filtered by the reviewer's star rating, by clicking the "# star".
- #### Add A Review
  * New reviews can be added by clicking on the "Add New Review" button, which opens up a modal form for the user to fill out. Each input field is validated before submission and will fail to submit if one of the input field is invalid.
  * Images can also be uploaded and stored through the usage of Cloudinary Upload API. 
- #### Rating and Product Breakdown
  * Star ratings are accurately displayed to show a rating that is rounded to the closest tenth value.
  * The star rating visual is also updated to reflect the calculated rating.
  * Product characteristics rated by users display the average. (Size, Width, Comfort, Quality, Length, Fit)
</details>

![zsIcNKy6PV](https://user-images.githubusercontent.com/85593147/195180939-94924853-4102-4c5d-a78b-7f81322a840b.gif)
<p align="right">(<a href="#readme-top">back to top</a>)</p>




