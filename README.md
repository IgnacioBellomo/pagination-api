# Pagination-API

This is a simple HTTP API endpoint that will perform pagination. 

`models/apps.js` is the model upon which each data entry was built on

`routes/index.js` contains the only route accesible by this API

## Install

    npm install

## Run the API

    npm run dev

# How it works

## Get list of Apps using default parameters

### Request

`GET /apps/`

  https://pagination-application.herokuapp.com/apps

### Response

    [
      {
        id: 1,
        name: "my-app-001"
      },
      {
        id: 2,
        name: "my-app-002"
      },
      ...
      {
        id: 50,
        name: "my-app-050"
      }
    ]

## Request apps using parameters

### Parameters available

  #### by
    Defines which field to search for results by. Required for all searches with parameters
  ##### Options
    id
    name
  #### start
    Defines which entry to start your search on. Varies depending on by.
  ##### Options
    1-250
    my-app-001 - my-app-250
