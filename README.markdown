# Node.js and Express

##ReST -Representational State Transfer
ReST is a software architecture style, a simpler alternative to SOAP and WSDL.
It is coordinated set of constraints like:
- Client sends the request Server sends the response
- Stateless Server 
- Caching "let the client know how long the data is good for" to send the request to the server only when needed
- Layered system - client doesn't know if it is connected to the end server
- Uniform interface
  1. individual resources are identified in request
  2. client has enough information to modify or delete the resource when has a it's representation
  3. each message includes enough information to describe how to process the message
  4. hyperlinks within hypertext
  
  ####RESTful API
  - has a base URI
  - has an Internet media type such as JSON
  - has GET PUT POST PATCH DELETE
  - has hypertext links text to reference state
  - has hypertext links to reference related resources
  
##The Setup
 - Node.js 0.12.0
 - Express 4.12.3
 - Mongodb 3.0.2
 - Mocha and Sinon.js 1.14.1
 - more in `package.json`
 
 
