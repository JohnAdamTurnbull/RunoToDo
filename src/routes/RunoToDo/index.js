import clientPromise from '$lib/mongodb-client'

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