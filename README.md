<h1 id="joi-validation">Joi Validation :shield:</h1>

Imagine we have an Express.js API that receives data from a client. Sometimes the data will consist of complex objects with many fields of different types. And for each field we will have to write its own validation logic. This can get very tedious and error-prone.

<img src="assets/joi-logo.png" align="left" width="50"/>
Fortunately, the **Joi** package is here to make our lives easier. Joi is a powerful schema validation library that allows us to articulate precise specifications for our data and perform complex validations with ease.

<h2 id="table-of-contents">:scroll: Table of Contents</h2>

- [Joi Validation :shield: and Advanced Techniques :zap:](#joi-validation)
  - [:scroll: Table of Contents](#table-of-contents)
  - [:shield: Basic Joi](#basic-joi)
    - [:clipboard: Topics](#topics-basic-joi)
    - [:dart: Assignment I: Building a Book Management API with MongoDB](#assignment-1)
  - [:zap: Advanced Joi Techniques](#advanced-joi)
    - [:clipboard: Topics](#topics-advanced-joi)
    - [:dart: Assignment II - Advanced Book Management API Validation](#assignment-2)
      - [:dart: ★ Extra Bonus Challenge - Dynamic Schema Creation](#extra-bonus-assignment)

<h2 id="basic-joi">:shield: Basic Joi</h2>

Our main source of information will be the [Joi API documentation](https://joi.dev/api/?v=17.4.0). It is a comprehensive resource that covers all the topics we will be exploring in this module.

The documentation is extremely extensive, make sure you focus on the following  [**Topics**](#topics-basic-joi).

<h3 id="topics-basic-joi">:clipboard: Topics</h3>

- **Types & Basics**
  - String validation
  - Number validation
  - Boolean validation
  - Array validation
  - Object validation
  - Function validation
  - Date validation

- **General Validations**
  - Presence (`required`, `optional`, `forbidden`)
  - Valid and invalid values with `valid` and `invalid`
  - Default values using `default`

<h2 id="assignment-1">:dart: Assignment I: Building a Book Management API</h2>

**Objective:** Develop a [REST](https://www.freecodecamp.org/news/rest-api-best-practices-rest-endpoint-design-examples)ful API for managing a collection of books using Express.js, validate incoming data using Joi, and store the data in files.

**Instructions:**

1. **Initialization**: Initialize a new Node.js project using `npm init`.

2. **Setup**: Eslint and Prettier (just like in the previous assignments).

3. **Setup**: Install necessary packages:
    - Express
    - Joi

4. **Books** will be by an object with the following attributes:
    - `title`: string, between 3 and 100 characters.
    - `author`: string, between 3 and 50 characters.
    - `isbn`: string, exactly 13 alphanumeric characters.
    - `publicationDate`: date.
    - `isAvailable`: boolean.
    - `tags`: array of strings, each tag between 3 and 30 characters.

5. **Joi Validation**: Create a validation schema using Joi that adheres to the above Book model.

6. **API Endpoints**: Implement the following endpoints:
    - `GET /books`: Retrieve a list of all books.
    - `GET /books/:isbn`: Retrieve a book by its `isbn`.
    - `POST /books`: Add a new book. This endpoint must validate the incoming data using the Joi schema. If the data is invalid, respond with a relevant error message.
    - `PUT /books/:isbn`: Update an existing book by its `isbn`. Ensure you validate the data with Joi.
    - `DELETE /books/:isbn`: Delete a book by its `isbn`.

7. **Error Handling**: Implement error handling to manage common issues:
    - 400 Bad Request for validation issues.
    - 404 Not Found for retrieving or updating a book that doesn't exist.
    - 500 Internal Server Error for any unexpected server issues.

8. **Async Code**: Make all middleware that requires interaction with the file system asynchronous (write a wrapper for the middlewares).

9. **Validation Middleware**: Write a middleware that validates the incoming data using the Joi schema. If the data is invalid, respond with a relevant error message (This will be a function that receives the schema as a parameter and returns a middleware function that will be used in the endpoints).

:information_source: Test your API using [Postman](https://www.postman.com/).

<h2 id="advanced-joi">:zap: Bonus - Advanced Joi Techniques</h2>

Now, it's time for a real challenge - diving into the advanced features of Joi. With the techniques in this section, you'll be able to create powerful, dynamic, and intricate validation schemes.

Again, refer to the [Joi API documentation](https://joi.dev/api/) for detailed information on each topic.

Let's explore these [**Topics**](#topics-advanced-joi).

<h3 id="topics-advanced-joi">:clipboard: Topics</h3>

- **Conditional Validation**
  - Using `when` for dynamic validation
  - Alternatives and `or`
  - Conditional `switch`

- **Object Validations**
  - Nested structures with `keys`
  - Allow and restrict extra keys with `unknown`
  - Rename keys with `rename`
  - Dependency keys with `and`, `nand`, `or`, and `xor`

- **Array Validations**
  - List uniqueness with `unique`
  - Sorting lists with `sort`
  - Item type specification with `items`

- **String Validations**
  - Alphanumeric checks with `alphanum`
  - Email validation with `email`
  - Password complexity with `pattern`
  - Case manipulations: `uppercase`, `lowercase`, `case`

- **Number Validations**
  - Sign specifications: `positive`, `negative`
  - Rounding methods: `floor`, `ceil`extra-bonus-assignment

- **Advanced Features**
  - Custom error messages
  - Extend Joi to create custom validations
  - References and shared validations with `ref`

- **Utility Functions**
  - Transforming values with `cast`
  - Generating example data with `example`

- **Miscellaneous**
  - Handling external data with `external`
  - Lazy evaluation with `lazy`
  - Using `describe` to generate schema metadata

:hatching_chick: *While the documentation is comprehensive, don't be afraid to search for practical examples or even raise questions in online communities. It's all part of the learning process!*

<h2 id="assignment-2">:dart: Assignment - Advanced Book Management API Validation</h2>

**Instructions:**

1. **Setup**: Copy the code from the previous assignment and initialize it as a new project.

2. **Enhanced Book Schema and Model:**  
   Modify the book schema to include these additional attributes:
    - `status`: string, one of "available", "borrowed", or "lost".
    - `ratings`: array of objects, each with a `user` (string) and `score` (number) fields.
    - `borrowedBy`: string (email).

3. **Complex Joi Validations:**  
   Implement these additional validations:
   - `tags`: Should not have duplicates, and should have at least one tag.
   - `ratings`: The `user` should be a valid email, and the `score` should be a number between 1 and 5. Ensure no user can have more than one rating entry for a book.
   - **Conditional Validations**: If `isAvailable` is `false`, ensure there's an additional field `borrowedBy` (a valid email). Use Joi's `when` method for this conditional validation.

4. **Enhanced API Endpoints:**  
   Introduce new endpoints to handle the new features:
   - **GET** `/books/available`: Retrieve a list of all available books.
   - **PUT** `/books/:id/rate`: Add or update a rating for a book. The body should contain `user` and `score`.

5. **Advanced Error Handling:**  
   - Respond with a `409 Conflict` if a user tries to add a rating for a book they've already rated.

6. **Bonus Tasks (for the truly ambitious):**  
   - Add filtering capabilities to the `GET /books` endpoint, allowing users to filter books by genre, author, availability, etc.
   - Implement a system of complex validation where if a book has a certain `tag`, it must have a specific keyword in the `summary`. For instance, if the genre is "Horror", the summary must contain the word "scary". Use Joi’s custom validation for this.

<h3 id="extra-bonus-assignment">:dart: ★ Extra Bonus Challenge - Dynamic Schema Creation</h3>

How about adding a dynamic twist to your Joi schemas?
Here's a scenario: Imagine your Book Management API now allows users to add custom fields to their books, like "readStatus", "notes", or anything else they fancy. The challenge here is to validate those dynamic fields efficiently.
