# @teamwork/js-api
### A Javascript normalization library for the Teamwork API.

## Introduction
The principle function of the data layer is to create an asynchronous interface to interact with thew Teamwork API.

https://developer.teamwork.com/

This library provides a standardised interface to interact with the Teamwork API.

Written in pure Javascript, with [axios](https://github/axios/axios)

## Implementation

### Response
The Teamwork API has publicly documented response codes, which all be handled within the library.

https://developer.teamwork.com/projects/response/success
https://developer.teamwork.com/projects/response/errors
https://developer.teamwork.com/projects/response/rate-limiting

### Data
Data formats are inconsistent across versions of the API. This is a case which needs to be considered both now, and for the future.

The data layer will be responsible for the normalization of the data, returning a consistent data structure, regardless of the API version.

Upgrading an endpoint will be done within the data layer and will return the same predefined object. This will be achieved by namespacing within the data layer to abstract version differences. There will still be a requirement in the product to define which API is being used but can be defaulted.

### Pagination
The Teamwork API returns headers pagination data in the response headers in the form of:

x-page
x-pages
X-records

We will normalise this into a JS pagination object, which will work with a shared pagination interface component, with the honest on the consuming application to handle pagination. This will couple with the component library. There will be a common component, likely using the Vue composition API, which will handle the logic behind pagination. The product will be responsible for putting these blocks together.

### Caching
This is handled in the same manner as pagination, through pure JS objects. With the design of this layer, a caching layer may be composed on top of the data layer. This can be shared or custom, but will be decoupled from fetching the data.

### Sideloading
TODO: Needs investigation, but following the same principles of pure immutable data, there should be no trouble designing and appropriate interface here.

### Error Handling
Error handling interface module for global app usage, manage all try-catch exceptions through the Data Layer through a common module.

Useful for decorating and filtering exceptions.
- Versioning
- Interface
- API Versioning
- Code Structure
- Promises
- Usage
- Tests
- Adapters
- Helpers
