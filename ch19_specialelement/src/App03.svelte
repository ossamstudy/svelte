<script>
    import Heart from "./Heart.svelte";

    let langs = [
        { id: 1, like: false, text: 'Svelte' },
        { id: 2, like: false, text: 'React' },
        { id: 3, like: false, text: 'Vue' }
    ];

    const toggle = id => {
        langs = langs.map(lang => {
            if(lang.id === id) {
                return {
                    id: lang.id,
                    like: !lang.like,
                    text: lang.text
                };
            }
            return lang;
        });
    }
</script>

{#each langs as lang}
    <Heart lang={lang} on:click={() => toggle(lang.id)} />
{/each}