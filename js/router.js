// for ( let link of document.getElementsByClassName("nav-link"))
//     link.addEventListener("click", (e)=>{
//         const { target } = e;
//         e.preventDefault();
//         urlRoute(e);
//     })
   
const getNav = document.getElementsByTagName("nav")[0].addEventListener("click", (e)=> {
    const { target } = e;
    if (!target.matches("nav ul li a")){
        return;
    }
    e.preventDefault();
    console.log(e.target.href);
    urlRoute(e);
});

const routes = {
    404: {
        template: "/view/pages/404.html",
        title: "404",
        description: "Page not found",
    },
    // "/": {
    //     template: "/index.html",
    //     title: "Index",
    //     description: "This is the index page",
    // },
    "/": {
        template: "/view/pages/home.html",
        title: "home",
        description: "This is the home page",
    },
    "/page1": {
        template: "/view/pages/page1.html",
        title: "page1",
        description: "This is the page1 page",
    },
    "/page2": {
        template: "/view/pages/page2.html",
        title: "page2",
        description: "This is the page2 page",
    }
};

const urlRoute = (event) => {
    event = event;
    event.preventDefault();
    window.history.pushState({},"",event.target.href);
    urlLocationHandler();
}

const urlLocationHandler = async () => {
    const location = window.location.pathname; // get the url path
    // if the path length is 0, set it to primary page route
    if (location.length == 0) {
        location = "/";
    }
    // get the route object from the urlRoutes object
    const route = routes[location] || routes["404"];
    // get the html from the template
    const html = await fetch(route.template).then((response) => response.text());
    // set the content of the content div to the html
    document.getElementById("content").innerHTML = html;
    // set the title of the document to the title of the route
    document.title = route.title;
    // set the description of the document to the description of the route
    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", route.description);
}

// add an event listener to the window that watches for url changes
window.onpopstate = urlLocationHandler;
// call the urlLocationHandler function to handle the initial url
window.route = urlRoute;
// call the urlLocationHandler function to handle the initial url
urlLocationHandler();

// document.addEvent
// 0 0Listener("DOMContentLoaded", () => {
    // $(function(){
    //   document.querySelector('#test').innerHTML = "test";
    // });
    //run router again
    // });