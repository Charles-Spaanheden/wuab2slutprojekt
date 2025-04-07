<script>
    import Article from '../Article.svelte';
    let isExpanded = false;
</script>

<div class="grid grid-cols-3 grid-rows-5 gap-3 sm:gap-0 h-screen sm:grid-cols-1">
    <button 
        class="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded"
        on:click={() => isExpanded = !isExpanded}>
        Toggle Layout
    </button>

    <div 
        class="flex justify-center bg-blue-400 max-h-screen max-w-full sm:row-span-2"
        class:sm:row-span-2={!isExpanded}
        class:sm:row-span-5={isExpanded}>
        <img src="src\lib\images\timeline2.svg" alt="timeline" 
            class="sm:w-450 transform rotate-90 sm:rotate-0 sm:scale-80 hidden sm:block sm:h-60 h-10">
    </div>
    
    <div class="col-span-2 sm:hidden bg-blue-300">1</div>
    <div class="bg-blue-400 sm:hidden"></div>
    <div class="col-span-2 sm:hidden bg-blue-300">2</div>
    <div class="bg-blue-400 sm:hidden"></div>
    <div class="col-span-2 sm:hidden bg-blue-300">3</div>
    <div class="bg-blue-400 sm:hidden"></div>
    <div class="col-span-2 sm:hidden bg-blue-300">4</div>
    <div class="bg-blue-400 sm:hidden"></div>
    <div class="col-span-2 sm:hidden bg-blue-300">5</div>

    <div 
        class="hidden sm:grid justify-items-center bg-blue-400 p-4"
        class:row-span-3={!isExpanded}
        class:sm:hidden={isExpanded}>
        <Article />
    </div>
</div>