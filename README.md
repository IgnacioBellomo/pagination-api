# Pagination-API

This is a simple HTTP API endpoint that will perform pagination. I created a seed with 250 entries, 
and I stored it on MongoDB Atlas. The pagination is performed using query parameters. 

# Get list of Apps using default parameters

## Request

`GET /apps/`

https://pagination-application.herokuapp.com/apps

## Response

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

## Request apps using query parameters
  All of these fields are optional, except for by. If any are excluded, the default option will be assumed.

## by (required for all parameter searches)

  Defines which field to search for results by. Required for all searches with parameters.

    Options: id or name

### Examples:

#### By id:

https://pagination-application.herokuapp.com/apps?by=id&start=52

#### By name:

https://pagination-application.herokuapp.com/apps?by=name&start=my-app-052


## start
  Defines which entry to start your search on. Options vary depending on by. If no start is declared, 
  the API will search from the first entry.

### Examples:

#### By id:

https://pagination-application.herokuapp.com/apps?by=id&start=45

    Default: 1
    Options: 1 to 250

#### By name:

https://pagination-application.herokuapp.com/apps?by=name&start=my-app-045

    Default: my-app-001
    Options: my-app-001 to my-app-250

## end
  Defines which entry to end your search on. Options vary depending on by. If no end is declared, 
  the API will search to the last entry.

### Examples:

#### By id:

https://pagination-application.herokuapp.com/apps?by=id&start=45&end=66

    Default: 250
    Options: 1 to 250

#### By name:

https://pagination-application.herokuapp.com/apps?by=name&start=my-app-045&end=my-app-066

    Default: my-app-250
    Options: my-app-001 to my-app-250

## max
  Defines the maximum number of apps returned by the API. If no max is declared, the API will return a 
  maximum of 50 entries. The API will never return more than 50 entries.

### Example:

https://pagination-application.herokuapp.com/apps?by=id&start=45&end=66&max=10

    Default: 50
    Options: 1-50

## order
  Defines what order the results will be received in. If no order is declared, the API 
  will return results in ascending order.

### Example:

https://pagination-application.herokuapp.com/apps?by=id&start=45&end=66&max=10&order=desc

    Default: asc
    Options: desc, asc 


