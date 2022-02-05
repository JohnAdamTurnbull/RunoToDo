import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const { MONGODB_URI, MONGODB_DB } = process.env
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

let client;
let clientPromise;
let uri = MONGODB_URI

const { NODE_ENV } = process.env

//if (process.env.NODE_ENV === "development") 
if (NODE_ENV === "development") {
// In development mode, use a global variable so that the value
// is preserved across module reloads caused by HMR (hot module replacement).
    
   if (!global._mongoClientPromise) {

      client = new MongoClient(uri, options);

      global._mongoClientPromise = client.connect();

   }
   clientPromise = global._mongoClientPromise;

} else {

  // In production mode, it's best to not use a global variable.

  client = new MongoClient(MONGODB_URI, options);

  clientPromise = client.connect()
  
}

  // Export a module-scoped MongoClient promise. By doing this in a
  // separate module, the client can be shared across functions.

export default clientPromise;