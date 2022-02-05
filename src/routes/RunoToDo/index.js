import { ObjectId } from 'mongodb';
import clientPromise from '$lib/mongodb-client'
// import { clientPromise} from ...


export async function get(request) {
    
    try {
        const completed = request.url.searchParams.get('completed') === 'true' ? true : false;
        // const dbConnection = await connectToDatabase()
        const dbConnection = await clientPromise;
        const db = dbConnection.db
        const collection = db.collection('ToDos')
        const todos = await collection.find({completed}).toArray()
        

        return {
            status: 200,
            body: {
                todos
            }
        }
    } catch(err) {
        return {
            status: 500,
            body: {
                error: 'A server error occured'
            }
        }

    }       
};

/*

export async function post (request) {
    const dbConnection = await clientPromise;
    const db = dbConnection.db();
    const collection = db.collection('ToDos');
    const todo = JSON.parse(request.body);
    const newTodo = await collection.insertOne(todo);
    return {
        status: 200,
        body: {
            newTodo
        }
    }
}
export async function post(request) {

};

export async function put(request) {

};


};

*/