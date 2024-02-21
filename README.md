<a name="readme-top"></a>


<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<!--suppress ALL -->
<br />
<div align="center">
  <a href="https://github.com/leopoldonavarretem/sharex">
    <img src="./public/images/logo.png" alt="Logo" width="30%">
  </a>

<h3 align="center">Sharex</h3>

  <p align="center">
    Sharex is a social review platform where users can share their reviews on their favorite media.
    <br />
    <a href="https://github.com/leopoldonavarretem/sharex"><strong>Explore the docs »</strong></a>
    <br />
</p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->

## About The Project

Shares is a review platform where users can review any form of entertainment they like such as movies, videogames, series, books and albums. Users can signup to rate and post/delete their reviews. Administrators can also add new media and they are able to
moderate the reviews by being able to delete user reviews.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Node][Node.js]][Node-url]
* [![Express][Express.js]][Express-url]
* [![MongoDb][MongoDb]][MongoDb-url]
* [![Handlebars][Handlebars]][Handlebars-url]
* [![Cloudinary][Cloudinary]][Cloudinary-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

* Node project manager
* A Mongo DB account
* A Cloudinary account

### Installation

1. Clone the repo
   ```
   git clone https://github.com/leopoldonavarretem/sharex.git
   ```
2. Install NPM packages
   ```
   npm install
   ```
3. Enter the following variables in to your environment.
   ```
   PORT= //The port number that your app will connect to.
   CLOUDINARY_KEY= // The cloudinary key associated with your account
   CLOUDINARY_NAME = // The cloudinary name asssociated with your account
   CLOUDINARY_SECRET = // The cloudinary secret associated with your account
   MONGODB_URI = // The URL associated with your MongoDB database cluster
   ```
4. Run server.js
   ```
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->

## Contact

Project Link: [https://github.com/leopoldonavarretem/sharex](https://github.com/leopoldonavarretem/sharex)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

* [Ironhack Mx](https://www.ironhack.com/mx)
* My trainers Harland Lahora
* My Girlfriend Regan Briggs

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/leopoldonavarretem/ders-backend.svg?style=for-the-badge

[contributors-url]: https://github.com/leopoldonavarretem/ders-backend/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/leopoldonavarretem/ders-backend.svg?style=for-the-badge

[forks-url]: https://github.com/leopoldonavarretem/ders-backend/network/members

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[linkedin-url]: https://linkedin.com/in/leopoldonavarretem

[Express.js]: https://img.shields.io/badge/Express-20232A?style=for-the-badge&logo=express&logoColor=FFFFFF

[Express-url]: https://expressjs.com/

[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=000000

[Node-url]: https://nodejs.org

[MongoDb]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=000000

[MongoDB-url]: https://www.mongodb.com/

[Handlebars]: https://img.shields.io/badge/Handlebars.js-000000?style=for-the-badge&logo=Handlebars.js&logoColor=FFFFFF

[Handlebars-url]: https://handlebarsjs.com/

[Cloudinary]: https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=Cloudinary&logoColor=000000

[Cloudinary-url]: https://cloudinary.com/
