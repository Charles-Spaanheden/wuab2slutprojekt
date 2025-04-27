<script>
    import { fade } from 'svelte/transition';
    import Article from '../Article.svelte';
    import canto1banner from '$lib/images/canto1cropped.png';
    import canto2banner from '$lib/images/canto2cropped.png';
    import canto3banner from '$lib/images/canto3cropped.png';
    import canto4banner from '$lib/images/canto4cropped.png';
    import canto5banner from '$lib/images/canto5cropped.png';
    import canto1buss from '$lib/images/canto1buss.png';
    import canto2buss from '$lib/images/canto2buss.png';
    import canto3buss from '$lib/images/canto3buss.png';
    import canto4buss from '$lib/images/canto4buss.png';
    import canto5buss from '$lib/images/canto5buss.png';
    import gregor from '$lib/images/gregor.jpg';
    import rodya from '$lib/images/rodya.png';
    import sinclair from '$lib/images/sinclair.png';
    import yisang from '$lib/images/yisang.png';
    import ishmael from '$lib/images/ishmael.png';

    export let data;
    const { articles } = data; // <- now getting all articles

    let isExpanded = false;
    let push = 900;
    let activeButton = null;

    const characterlogo = { 1: gregor, 2: rodya, 3: sinclair, 4: yisang, 5: ishmael };
    const buttonBanners = { 1: canto1banner, 2: canto2banner, 3: canto3banner, 4: canto4banner, 5: canto5banner };
    const backgroundImages = { 1: canto1buss, 2: canto2buss, 3: canto3buss, 4: canto4buss, 5: canto5buss };

    $: currentBackground = backgroundImages[activeButton] || null;
    $: currentArticle = articles[activeButton] || null; // <- dynamic article!
</script>


<style>
    .grid-container {
        transition: transform 0.4s ease;
    }

    .toggle-button {
        transition: transform 0s ease;
    }

    .centered-button {
        transform: translate(50px,20px);
        scale: 10;
        opacity: 0;
    }

    .expandedborder {
        border: 2px solid black;
    }
</style>

<div class="relative h-screen overflow-hidden"
style="background-color:black;">

    {#if currentBackground}
        <div
            class="absolute inset-0 bg-cover bg-center z-0"
            style="background-image: url('{currentBackground}');"
            transition:fade={{ duration: 500 }}>
        </div>
    {/if}

    <!-- Grid -->
    <div 
        class="grid-container grid grid-cols-3 grid-rows-5 gap-3 sm:gap-0 sm:grid-cols-7 sm:grid-rows-1 h-full relative z-10"
        style={`transform: translateX(${isExpanded ? push : 0}px);`}>

        <div class="col-span-2 hidden sm:block sm:col-span-1"></div>
        <div class="sm:hidden"
        style ="background-image: url({gregor}); background-size: cover; background-position: center;">
        </div>

        {#each [1,2,3,4,5] as num}
            {#if !isExpanded || activeButton === num}
                <div 
                    class="col-span-2 sm:col-span-1 flex items-center justify-center"
                    style="background-image: url({buttonBanners[num]}); background-size: cover; background-position: center;"
                    class:expandedborder={isExpanded}>
                    <button
                        class="bg-white text-black font-bold px-4 py-2 rounded shadow"
                        on:click={() => {
                            isExpanded = true;
                            activeButton = num;
                            push = 800;

                        }}>
                        {num}
                    </button>
                </div>
            {/if}
            <div class="bg-blue-400 sm:hidden"
            style ="background-image: url({characterlogo[num+1]}); background-size: cover; background-position: center;"
            ></div>
        {/each}

        <div class="col-span-2 hidden sm:block sm:col-span-1"></div>
    </div>

    <!-- Floating Article Overlay -->
    {#if isExpanded}
    <div class="absolute inset-0 z-40"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
        {#if currentArticle}
            <Article articleData={currentArticle} />
        {/if}
    </div>
{/if}


    <!-- Hidden Toggle Layout Button -->
    <button 
        class="absolute top-10 left-10 bg-blue-500 opacity-0 text-white px-4 py-2 rounded z-50"
        on:click={() => {
            isExpanded = !isExpanded;
            if (!isExpanded) activeButton = null;
            push = 10;
        }}
        class:centered-button={isExpanded}>
        Toggle Layout
    </button>
</div>
