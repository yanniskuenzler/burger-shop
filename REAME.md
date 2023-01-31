# Burgershop Backend
___
### Description
The backend is created based on the MVC-Pattern and includes the components model, view and controller. From the outside the user can access over a couple of endpoints with get requests. The data is saved in a [MongoDB](https://www.mongodb.com/) database which is a NoSQL Database.

### Components
##### Router
- Routes.js

##### Controller
- APIController.js
- ProductController.js
- ShopController.js

##### Models
- ProductModel.js

### API Enpoints
- /burgers -> get the burgers
- /supplements -> get the supplements
- /filiales -> get the filiales of the burgershop (not implemented yet)
- /healthcheck -> test if the API works fine