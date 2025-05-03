const displayContainer = document.getElementById('display-container');
const sortByDateButton = document.getElementById('sort-by-date-btn');
const loadingSpinner1 = document.getElementById('loading-spinner-1');
const loadingSpinner2 = document.getElementById('loading-spinner-2');
let loadMoreActivated = false;
let sortDataActivated = false;

const loadData = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await response.json();
    const tools = data.data.tools;
    prepareDataBasedOnLoadMoreAndSorted(tools);
}

const prepareDataBasedOnLoadMoreAndSorted = (tools) => {
    if(sortDataActivated) {
        tools = tools.sort((a,b) => new Date(b.published_in) - new Date(a.published_in));
        displayContainer.innerText = '';
        tools = loadMoreActivated ? tools : tools.slice(0,7);
        handleSortByDateButton();
    }
    else {
        tools = loadMoreActivated ? tools.slice(7,tools.length) : tools.slice(0,7);
    }
    displayData(tools);
}

const handleSortByDateButton = () => {
    if(loadMoreActivated) {
        sortByDateButton.previousElementSibling.classList.remove('mb-[32px]');
        sortByDateButton.classList.add('hidden');
    }
}

const displayData = (tools) => {
    tools.forEach(tool => {
        if(tool.id === "06" || tool.id === "11") return;
        displaySingleData(tool);
    });
}

const displaySingleData = (tool) => {
    displayContainer.innerHTML += `
    <div
        class="p-3 md:p-5 lg:p-[25px] border border-[rgba(17,17,17,0.10)] w-full rounded-xl shadow-sm">
        <figure class="mb-[25px]">
            <img src="${tool.image}" alt="${tool.name} banner"
                class="rounded-xl w-full aspect-video h-full" />
        </figure>
        <div>
            <h3 class="text-[25px] font-semibold text-[#111] mb-4">Features</h3>
            <ul id="${tool.name}" class="text-base font-normal text-[#585858] leading-[26px] flex flex-col gap-1">
            </ul>
        </div>
        <hr class="border-t border-t-[rgba(17,17,17,0.20)] my-[24px]">
        <div class="flex justify-between items-center">
            <div class="flex flex-col">
                <h2 class="text-[25px] font-semibold text-[#111] mb-4">${tool.name}</h2>
                <div class="flex items-center gap-2">
                    <img src="icons/calender-icon.png" alt="release date">
                    <p class="text-base font-medium leading-[26px] text-[#585858]">${tool.published_in}</p>
                </div>
            </div>
            <button onclick="showSpecificToolDetails()"
                class="cursor-pointer p-[13px] h-[50px] w-[50px] bg-[#FEF7F7] rounded-full"><img
                    src="icons/arrow-icon.png" alt="view details button"></button>
        </div>
    </div>
    `
    addFeatures(tool.name, tool.features);
    loadingSpinner1.classList.replace('flex','hidden');
    loadingSpinner2.classList.replace('flex','hidden');
}

const addFeatures = (id, features) => {
    const ul = document.getElementById(id);
    for(let i=0; i<=2; i++) {
        const li = document.createElement('li');
        li.innerText = `${i+1}. ${features[i]}`;
        ul.appendChild(li);
        if(typeof features[i] == 'undefined') li.classList.add('text-transparent');
    }
}

loadData();

const loadMoreData = () => {
    document.getElementById('see-more-btn').classList.add('hidden');
    loadMoreActivated = true;
    loadingSpinner2.classList.replace('hidden','flex');
    loadData();
}

const loadSortedData = () => {
    sortDataActivated = true;
    loadingSpinner1.classList.replace('hidden','flex');
    loadData();
}