<script>
import clientPromise from '$lib/mongodb-client.js'

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


</script>




<h1>Runo ToDo practice</h1>
