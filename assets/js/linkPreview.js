const card = document.querySelector(".card");

const hideLinkPreview = () => {
    return card.style.display = 'none';
};

const showLinkPreview = event => {
    const image = event.currentTarget.getAttribute("data-image");
    card.querySelector('img').setAttribute("src", image);

    const title = event.currentTarget.getAttribute("data-title");
    card.querySelector('h4').textContent = title;

    const date = event.currentTarget.getAttribute("data-date");
    card.querySelector('span').textContent = date;

    const text = event.currentTarget.getAttribute("data-text");
    card.querySelector('p').textContent = text;

    event.currentTarget.appendChild(card);

    return card.style.display = 'inline-block';
};

document.querySelectorAll(".link-with-preview").forEach(el => {
    el.addEventListener("mouseover", showLinkPreview);
    el.addEventListener("mouseleave", hideLinkPreview)
});