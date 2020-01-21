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

  #### by (required for all parameter searches)
    Defines which field to search for results by. Required for all searches with parameters

    Options: id , name

  #### start
    Defines which entry to start your search on. Varies depending on by. If no start is declared the API will search from the first entry

    Example:

    By id:
    https://pagination-application.herokuapp.com/apps?by=id&start=45
    Default: 1
    Options: 1-250

    By name: my-app-001 - my-app-250
    https://pagination-application.herokuapp.com/apps?by=name&start=my-app-045
    Default: my-app-001
    Options: my-app-001-my-app-250

  #### end
    Defines which entry to end your search on. Varies depending on by. If no end is declared the API will search to the last entry

    Example:

    By id: 1-250
    https://pagination-application.herokuapp.com/apps?by=id&start=45&end=66
    Default: 250
    Options: 1-250

    By name: my-app-001 - my-app-250
    https://pagination-application.herokuapp.com/apps?by=name&start=my-app-045&end=my-app-66
    Default: my-app-250
    Options: my-app-001-my-app-250

  #### max
    Defines the maximum number of apps returned by the API. The API will return a maximum of 50 entries.

    Example:

    https://pagination-application.herokuapp.com/apps?by=id&start=45&end=66&max=10
    Default: 50
    Options: 1-50
    
    The API will never return more than 50 entries, even if max is set higher.

  #### order
    Defines what order the results will be received in. If no order is declared the API will return results in ascending order.

    Example:

    https://pagination-application.herokuapp.com/apps?by=id&start=45&end=66&max=10&order=desc
    
    Default: asc
    Options: desc, asc 


