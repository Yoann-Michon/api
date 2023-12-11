const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk4NDE3NDQ0LCJleHAiOjE3MDEwMDk0NDR9.k9dWM_tSe7HvRppw3w-fEoyHBzb7zIqBXJLO02aitKg';

async function auth(){
    const response = await fetch('http://127.0.0.1:1337/api/auth/local',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify({
            identifier: 'SonGoku',
            password: 'songoku123',
        })
    });
    response = response.json();
}

async function requete(){
    const response = await fetch('http://127.0.0.1:1337/api/movies')
    return response.json()
}


async function main(){
    try {
        const res = await requete();
        console.log('I did something', res);
    } catch (e) {
        console.log('I failed', e);
    }
}

main();

