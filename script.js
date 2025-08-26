// Fetch example

let btn = document.querySelector('button');

btn.addEventListener("click", async () => {
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
})

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("error - ", e);
        return "no fact found";
    }
}
// getFacts in console


// Dog Api

let url2 = "https://dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector('#Show');

btn2.addEventListener("click", async () => {
    let link = await getImage();
    let img = document.querySelector("#image");
    img.setAttribute('src', link);
    console.log(link)
})


async function getImage() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch (e) {
        console.log("error - ", e);
        return "no iamge found";
    }
}

// async headings

const url3 = "https://icanhazdad.joke.com/";

async function getJokes() {
    try {
        const config = { header: { Accept: "application/json" } };
        let res = await axios.get(url3);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
}









