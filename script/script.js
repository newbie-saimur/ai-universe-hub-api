const displayContainer = document.getElementById('display-container');

const loadData = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await response.json();
    const tools = data.data.tools;
    console.log(tools)
    displayData(tools);
}

const displayData = (tools) => {
    const slicedTools = tools.slice(0,7);
    slicedTools.forEach(tool => {
        if(tool.id === "06") return;
        displaySingleData(tool);
    });
}

const displaySingleData = (tool) => {
    displayContainer.innerHTML += `
    <div
        class="p-3 md:p-5 lg:p-[25px] border border-[rgba(17,17,17,0.10)] w-full h-[617px] rounded-xl shadow-sm">
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