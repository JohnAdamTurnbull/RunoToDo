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

export async function post(request) {

};

export async function put(request) {

};

export async function del(request) {

};