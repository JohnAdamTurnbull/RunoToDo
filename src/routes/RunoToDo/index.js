// import { ObjectId } from 'mongodb';

import clientPromise from '$lib/mongodb-client'

export async function get(request) {
    //const completed = 'true';
    const completed = request.url.searchParams.get('completed') === 'true' ? true : false;
    return {
        status: 200,
        body: {
            completed: completed
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

export async function del(request) {

};

*/