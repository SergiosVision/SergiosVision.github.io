const card = (post) => {
    return `
        <div class="card z-depth-4">
            <div class="card-content">
                <span class="card-title">${post.title}</span>
                <p style="white-space: pre-line;">${post.text}</p>
                <small>${new Date(post.date).toLocaleDateString()}</small>
            </div>
            <div class="card-action">
                <button class="btn btn-samall red js-remove" data-id="${post._id}"><i class="material-icons">delete</i></button>
            </div>
        </div>
    `
};

let posts = [];
let modal;
const BASE_URL = '/api/post';

class PostApi {
    static fetch() {
       return fetch(BASE_URL, {method: 'get'})
            .then((response) => response.json())
    }
    static create(post) {
        return fetch(BASE_URL, {
            method: 'post',
            body: JSON.stringify(post),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
    }
    static remove(id) {
        return fetch(`${BASE_URL}/${id}`, {
            method: 'delete'
        }).then((response) => response.json())
    }
}

document.addEventListener('DOMContentLoaded', () => {
    PostApi.fetch().then((backendPosts) => {
        posts = backendPosts.concat();
        renderPosts(posts);
    });

   modal = M.Modal.init(document.querySelector('.modal'));

   document.querySelector('#createPost').addEventListener('click', onCreatePost, false);

   document.querySelector('#posts').addEventListener('click', onDeletePost, false);

}, false);

function renderPosts(_posts = []) {
    const $posts = document.querySelector('#posts');

    if (_posts.length > 0) {
        $posts.innerHTML = _posts.map((post) => card(post)).join(' ');
    } else {
        $posts.innerHTML = `<div class="center">NO POSTS ARE STILL</div>`;
    }
}

function onCreatePost() {
    const $title = document.querySelector('#title');
    const $text = document.querySelector('#text');

    if($title.value && $text.value) {
        const newPost = {
            title: $title.value,
            text: $text.value
        };
        PostApi.create(newPost).then((post) => {
            posts.push(post);
            renderPosts(posts);
        });
        modal.close();
        $title.value = '';
        $text.value = '';
        M.updateTextFields()
    }
}

function onDeletePost(event) {
    if(event.target.classList.contains('js-remove')) {
        const desition = confirm('Are you sure you want to delete post');

        if (desition) {
            const id = event.target.getAttribute('data-id');

            PostApi.remove(id).then(() => {
                const postIndex = posts.findIndex((post) => post._id === id);
                posts.splice(postIndex, 1);
                renderPosts(posts);
            });
 0       }
    }
}