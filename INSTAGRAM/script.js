// Likes
const likes = document.querySelectorAll('.pos__actions .post__action:first-child')
console.log(likes)

likes.forEach((item, idx) => {
item.innerHTML = '<img class="insta_like" style=color: red> '
})