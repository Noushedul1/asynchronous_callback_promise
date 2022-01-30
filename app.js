const posts = [
    {title: 'front end developer',body: 'you are a developer'},
    {title: 'back end developer',body: 'you are a back end developer'}
]
const getPost = ()=>{
    setTimeout(()=>{
        let output = '';
        posts.forEach((p)=>{
            output += `<li>${p.title}</li>`;
            document.body.innerHTML = output;
        });
    },2000);
}
const createPost = (post,calback)=>{
    setTimeout(()=>{
        posts.push(post);
    },2000);
    calback();
}
createPost({title: 'ui/ux designer', body: 'joy is a ui/ux designer'},getPost);