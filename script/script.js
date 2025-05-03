const displayContainer = document.getElementById('display-container');
const sortByDateButton = document.getElementById('sort-by-date-btn');
const loadingSpinner1 = document.getElementById('loading-spinner-1');
const loadingSpinner2 = document.getElementById('loading-spinner-2');
const modalBoxContainer = document.getElementById('modal-box-container');
const modalBox = document.getElementById('modal-box');
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
            <button onclick="showSpecificToolDetails(${tool.id})"
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

const loadSingleToolData = async (id) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const data = await response.json();
    const tool = data.data;
    displaySingleDataOnModal(tool);
}

const displaySingleDataOnModal = (tool) => {
    modalBox.innerText = '';
    modalBox.innerHTML = `
    <div class="flex gap-[20px]">
        <div class="w-1/2 bg-[rgba(235,87,87,0.05)] border border-[#EB5757] rounded-xl p-[25px]">
            <div>
                <h2 class="text-[25px] text-[#111] font-semibold leading-[35px] mb-[25px]">${tool.description}</h2>
            </div>
            <div class="flex flex-row gap-4 justify-between mb-[25px]">
                <div class="flex justify-center items-center text-center h-[100px] bg-white p-4 rounded-xl w-[130px]">
                    <p class="text-base font-bold text-[#03A30A]">${tool.pricing[0].price}<br>${tool.pricing[0].plan}</p>
                </div>
                <div class="flex justify-center items-center text-center h-[100px] bg-white p-4 rounded-xl w-[130px]">
                    <p class="text-base font-bold text-[#F28927]">${tool.pricing[1].price}<br>${tool.pricing[1].plan}</p>
                </div>
                <div class="flex justify-center items-center text-center h-[100px] bg-white p-4 rounded-xl w-[130px]">
                    <p class="text-base font-bold text-[#EB5757]">${tool.pricing[2].price}<br>${tool.pricing[2].plan}</p>
                </div>
            </div>
            <div class="flex justify-between">
                <div class="w-4/7">
                    <h3 class="text-[25px] font-semibold text-[#111] mb-4">Features</h3>
                    <ul id="${tool.tool_name}-modal-features" class="text-base font-normal leading-[26px] text-[#585858]">
                    </ul>
                </div>
                <div class="w-3/7">
                    <h3 class="text-[25px] font-semibold text-[#111] mb-4">Integrations</h3>
                    <ul id="${tool.tool_name}-modal-integrations" class="text-base font-normal leading-[26px] text-[#585858]">
                    </ul>
                </div>
            </div>
        </div>
        <div class="w-1/2 border border-[#E7E7E7] rounded-xl p-[25px]">
            <div class="relative mb-[25px]">
                <img class="aspect-video max-h-[339px] w-full max-w-[437px] rounded-xl" src="${tool.image_link[0]}"
                    alt="${tool.tool_name}">
                <p id="accuracy-field" class="hidden absolute right-2 top-2 rounded-lg z-10 bg-[#EB5757] py-[5px] px-[15px] text-base font-semibold text-white"><span id="accuracy-message"></span>%
                    accuracy</p>
            </div>
            <div class="text-center flex flex-col justify-center items-center">
                <h2 class="text-[25px] font-semibold text-[#111111] mb-4">${tool.input_output_examples[0].input}</h2>
                <p class="text-base font-normal leading-[26px] text-[#585858] w-9/10">${tool.input_output_examples[0].output}</p>
            </div>
        </div>
    </div>
    `
    const featureId = tool.tool_name + "-modal-features"
    const integrationId = tool.tool_name+"-modal-integrations"
    addModalFeatures(featureId, tool.features);
    addModalIntegrations(integrationId, tool.integrations);
    showAccuracy(tool);
}

const addModalFeatures = (id, features) => {
    const ul = document.getElementById(id);
    const keys = Object.keys(features);
    keys.forEach(key => {
        const feature = features[key].feature_name;
        const li = document.createElement('li');
        li.innerText = ` • ${feature}`;
        ul.appendChild(li);
    });
}


const addModalIntegrations = (id, integratios) => {
    const ul = document.getElementById(id);
    integratios.forEach(element => {
        const li = document.createElement('li');
        li.innerText = ` • ${element}`;
        ul.appendChild(li);
    });
    if(integratios.length == 0) {
        const li = document.createElement('li');
        li.innerText = 'No data Found';
        ul.appendChild(li);
    }
}

const showAccuracy = (tool) => {
    const accuracySpan = document.getElementById('accuracy-message');
    const accuracyField = document.getElementById('accuracy-field');
    let accuracy = tool.accuracy.score;
    if(typeof accuracy == 'number') {
        accuracySpan.innerText = accuracy * 100;
        accuracyField.classList.remove('hidden');
    }
}

modalBoxContainer.addEventListener('click', function(event) {
    if(event.target.id === 'modal-overlay') closeModal();
});

document.addEventListener('keyup', function(event) {
    if(event.key === "Escape") closeModal();
})

const closeModal = () => {
    modalBoxContainer.classList.add('hidden');
}

const showSpecificToolDetails = (id) => {
    id = id.toString().padStart(2, '0');
    loadSingleToolData(id);
    modalBoxContainer.classList.remove('hidden');
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