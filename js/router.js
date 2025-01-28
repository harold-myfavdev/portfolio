document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches("li a")) return;
    e.preventDefault();
    urlRoute(e);
});

const routes = {
    404: {
        template: "/view/pages/404.html",
        title: "404",
        description: "Page not found",
    },
    "/": {
        template: "/view/pages/home.html",
        title: "Home",
        description: "This is the home page",
    },
    "/page1": {
        template: "/view/pages/page1.html",
        title: "Page1",
        description: "This is page 1",
    },
    "/page2": {
        template: "/view/pages/page2.html",
        title: "Page2",
        description: "This is page 2",
    }
};

const urlRoute = (event) => {
    window.history.pushState({}, "", event.target.href);
    urlLocationHandler();
};

const urlLocationHandler = async () => {
    let location = window.location.pathname || "/";
    const route = routes[location] || routes["404"];
    const html = await fetch(route.template).then((response) => response.text());
    document.getElementById("content").innerHTML = html;
    document.title = route.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute("content", route.description);
    }
};

window.onpopstate = urlLocationHandler;

document.addEventListener("DOMContentLoaded", () => {
    urlLocationHandler();
});