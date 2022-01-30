const post = [
    {title: 'front end developer',body: 'you are a developer'},
    {title: 'back end developer',body: 'you are a back end developer'}
]
const getPost = ()=>{
    setTimeout(()=>{
        let output = '';
        post.forEach((p)=>{
            output += `<li>${p.title}</li>`;
            document.body.innerHTML = output;
        });
    },2000);
}
getPost()