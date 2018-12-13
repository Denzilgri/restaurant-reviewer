# Restaurant Reviewer App

# Table of Contents

* [Overview](#overview)
* [How to run the it?](#how-to-run-it?)
* [Dependencies](#dependencies)
* [Note about ES6](#note-about-es6)

## Overview

This project is a stage-1 level of the udacity Restaurant Reviews project. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users. The project is restaurant reviewing web app which uses third party apis such as google maps API to locate restaurants at different places.

The opening page has a filter which adds to enhanced user experience, making it efficient for the user to get to the restaurant page of choice. When The user clicks on an restaurant to get more details, the user is directed to a page which provides details of the cuisines and timings of that particular restaurant.

## How to run it?

1. Download or clone the project.
2. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8002` (or some other port, if port 8002 is already in use.) For Python 3.x, you can use `python3 -m http.server 8002`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8002`.
3. With your server running, visit the site: `http://localhost:8002`, and look around for a bit to see what the current experience looks like.

## How to run the project

To run the project, download or clone the repository in your computer:

`$ git clone https://github.com/dimikara/Restaurant-Reviews-App-Stage-1.git`

and follow the instructions below:

* In the repository folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. 

* In a terminal (like Git Bash, Cygwin or the Windows terminal), check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8002` (or some other port, if port 8002 is already in use.) For Python 3.x, you can use `python3 -m http.server 8002` or `python -m http.server 8002`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

* With your server running, visit the site: `http://localhost:8002`. You can now see the live site.


## Dependencies

* Starter code by [**Udacity**](https://github.com/udacity/mws-restaurant-stage-1).
* [**GoogleMaps**](https://cloud.google.com/maps-platform/), a JavaScript library.
for mobile-friendly interactive maps, & [**Mapbox**](https://www.mapbox.com/), an open source mapping platform for custom designed maps.
* [**Normalize.css**](https://necolas.github.io/normalize.css/), a modern, HTML5-ready alternative to CSS resets.

## Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future-proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.
