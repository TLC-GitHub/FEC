Project created with React 

# Project Lelelime

## Table of Contents
- [Getting Started](https://github.com/TLC-GitHub/FEC/edit/main/README.md#getting-started)
  - [Installing Dependencies](https://github.com/TLC-GitHub/FEC/edit/main/README.md#how-to-install-dependencies)
  - [Running the Project](https://github.com/TLC-GitHub/FEC/edit/main/README.md#running-the-project)
- [Project Details](https://github.com/TLC-GitHub/FEC/edit/main/README.md#project-details)
- [Contributers](https://github.com/TLC-GitHub/FEC/edit/main/README.md#project-details)



### Getting Started
Lelelime is a single page e-commerce web application created utilizing React and Node/Express. This project was created by a team of four engineers.

Built With
React.JS, Express.JS, Node.JS, Jest

### How to Install Dependencies
```
npm install
```
### Running the Project
Runs development server:
```
 npm run client-dev
 npm run server-dev
 # or
 yarn run client-dev
 yarn run server-dev
```
The application will be running on http://localhost:3000. This script runs webpack and watches it, auto-refreshing on every new change that you save. You will require a Hackreactor API token inside of a config.js file and dotenv file as well as the port set to 3000.

### Project Details
<details>
  <summary>Overview</summary>
  
- #### Product Information
  The overview will contain essential product details regarding price, category, name, and other style details.
- #### Image Gallery
  An image carousel is presented for users to scroll through various products offered. The image bar on the left    presents users with additional photos to scroll through. Clicking the main image returns a magnified view of it.
- #### Style Selector
  Available styles can be selected and will show the user an image of the current product with the new style attached to it. Users are able to select through the assortment provided.
- #### Add to Cart
  Users can add whichever products with whichever styles selected to the cart. If a product is available, they can select it and add it accordingly.
</details>
<details>
  <summary>Related Items & Comparison</summary>
  
- #### Related Products List
  Displays a list of products that are related to the current product being viewed. 
  
  Clicking a single product card returns the details of that product. 
  
  Clicking the star opens a modal that compares the current product to the clicked product.

  Presented as a carousel to scroll through different product options.
- #### Your Outfit List
  Displays a custom list of outfits that the user selects and adds to their outfit collection.
  
  Users can remove the product from their collection by clicking X on the card.

  Outfits are also presented as a carousel to sort through the different products that exist in their collection.
</details>
<details>
  <summary>Questions And Answers</summary>
  
- #### Question List
  Questions are rendered out two at a time with user's able to load in two more at a time with each click of "Load more Questions". All questions are sorted by their helpfulness rating.
- #### Question
  Questions can be voted on their helpfulness or reported. Both interactions will be remembered through refresh and will allow the user to only interact with the question once.
- #### Answer
  Answers can be voted on their helpfulness or reported. Both interactions will be remembered through refresh and will allow the user to only interact with the answer once.
  
  Answers contain images that will render with the answer, displaying them. 

  Answers from the seller will be prioritized in terms of appearing on the list.
  
- #### Add Answers / Questions
  Answers and Questions can be added with their respective buttons ("Add Answer" and "Add A Question").
  
  Each button opens up a modal form for the user to fill out and submit. All fields are validated and will not submit completely until all input fields are valid. Images can be added onto the Answer Modal, uploaded through Cloudinary API.
  
- #### Searchbar Filter
  Questions can be sorted through with the search bar to filter out responses that match the current query.

  The questions list will continue to filter through keystrokes and will reset once the amount of characters is less than three.
</details>
<details>
  <summary>Ratings And Reviews</summary>
  
- #### List of Reviews
  Reviews are displayed two at a time, according to the current sorted method.

  Reviews can also be sorted through the star ratings filter on the left side, filtering according to the rating the review receives. Reviews can also be sorted through the sorted filter on helpfulness and most recent.
- #### Add A Review
  New reviews can be added by clicking on the 'Add New Review' button, which opens up a modal form for the user to fill out. Each input field is validated before submission and will fail to submit if one or more input fields are invalid. Images can also be uploaded and are stored through the usage of Cloudinary Upload API. 
- #### Star Rating
  Ratings are accurately calculated to return a rating that is rounded to the closest quarter value.
  
  The Star Rating visual is also updated to reflect the calculated rating.
</details>

### Contributors
- [Aaryon Yabut](https://github.com/Aaronyabut)
- [Siming Yum](https://github.com/simingyum)
- [Quargs Greene](https://github.com/quargsgreene)
- [Shawn Oh](https://github.com/spottyzot)

Learn More
To learn more about our stack, take a look at the following resources:

- [React Documentation](https://reactjs.org/) - learn about React.js features and API.
- [Learn React.js](https://reactjs.org/tutorial/tutorial.html) - an interactive React.js tutorial.
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Cloudinary Documentation](https://cloudinary.com/documentation/image_upload_api_reference)
- [Node JS](https://nodejs.org/en/docs/)
