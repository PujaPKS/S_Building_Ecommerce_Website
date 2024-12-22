(CartProvider.jsx file has the main code where crud crud api is used and the changes is made)

Making the cart user specific

A big problem with the ecommerce app is that the products stored in the cart are lost once the user refreshes the page.

User might get annoyed because of this.


Solution

1. Currently when the user has logged in , we know the emailid of the user
2. We need to store the cart items of the user in some backend so that it doesn't get lost
3. Moreover we should be able to retrieve the cart Items only of that user who has currently logged In
4. We need to device an Algorithm


Deliverable

1. To store the cart Items we can leverage the backend service given by crud crud api which we had used previously.
2. Whenever the user adds a product to the cart call the crud crud api with POST request to /cart${useremailid} like you did before.The reason why we append user email ID is because we want to retrieve the cart Items only of that user who has currently logged In.
3. Call the backend API whenever the user adds a new product to cart.
4. See whether the product is getting added to crud crud api page
5. Whenever the user opens the cart do a GET request and get all the products that the user has added in the cart and show it to the user


If you are getting error﻿ do the following

1. open the network tab. The api call might be failing.
2. This is because crudcrud does not allow @ or '.'[dot] to be there in the URL. So when passing email id remove @ and dot from it.
3. I normally do this . If emailId is prasadyash123@gmail.com, i only use prasadyash123gmailcom for crudcrud api call by just removing @ and dot .
4. Once you have made the fixes , open the network tab and see if the right route is being called or not. It should be /cartprasadyash123gmailcom


You cart is Complete.