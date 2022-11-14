const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


window.watsonAssistantChatOptions = {
    integrationID: "f57d49f2-4606-4981-861d-e5852c61c253", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "aafc4048-50e1-4aa2-a877-e2c9d66a1422", // The ID of your service instance.
    onLoad: function (instance) {
        instance.render();
    }
};
setTimeout(function () {
    const t = document.createElement('script');
    t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});