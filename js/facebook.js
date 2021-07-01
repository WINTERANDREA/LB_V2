/* Variabili */
let page_id = "631710263523347";
let access_token = "";
var n_post_to_show = 15;
var count_post = 0;
 



/* GET POSTS ID */
async function get_posts() {
    const response = await fetch(`https://graph.facebook.com/${page_id}/published_posts?fields=permalink_url&access_token=${access_token}`)
    const posts = await response.json();
    console.log(posts)
    const last_posts = posts.data.splice(0, n_post_to_show);
    return last_posts
}

/* GET POST DATA */
async function create_post(post_id) {
    const response = await fetch(`https://graph.facebook.com/${post_id}/?fields=message,attachments,created_time,full_picture,icon,actions,from&access_token=${access_token}`)
    const post = await response.json();
    return post
}

/* CREATE POST */
get_posts()
    .then(data => {
        let promises = [];
        for (const single_post of data) {
            promises.push(create_post(single_post["id"]))
        }
        return promises
    })
    .then(data => {
        var n = 1;
        var n_array= []

        Promise.all(data).then(data => {
            console.log(data)
            data.forEach(element => {
            
              var postContainer = document.getElementById('post-container')
              var post = document.createElement('div');
              post.id = `post_${n}`;
              post.className = "card"
             
              post.innerHTML = `
              <div id="image_${n}" class="card-img"></div>
              <div class="card-text-container">
              <h3 id="message_${n}" class="card-message"></h3>
              </div>
              `;
              
              postContainer.appendChild(post)
              var image = document.getElementById(`image_${n}`)
              var message = document.getElementById(`message_${n}`)
              image.style.backgroundImage = `linear-gradient(to bottom, rgba(161, 202, 231, .1) 2%, rgba(0,0,0,.1)), url(${element.full_picture})`
              message.innerText = element.attachments.data[0].description ? element.attachments.data[0].description : element.message
              
              n_array.push(n)
              n++

             })
             Anima(n_array)
            
        })
    })


 gsap.registerPlugin(ScrollTrigger);
gsap.from(".titolo-sezione", {scrollTrigger: {trigger:".titolo-sezione", start:"top 90%"}, duration: 1, y:200, opacity:0})
gsap.from(".paragrafo-1", {scrollTrigger: {trigger:".paragrafo-1", start:"top 90%"}, duration: 1, y:200, opacity:0})

function Anima(n){

  

n.forEach(el => gsap.from("#post_"+ el, {scrollTrigger: {trigger:"#post_"+ el, start:"top 50%"}, duration: 1, scale: 1.3, opacity:0}))
gsap.from("#referenze", {scrollTrigger: {trigger:"#referenze", start:"top 50%"}, duration: 1, x:-900, opacity:0, rotate: -10})
}
 
