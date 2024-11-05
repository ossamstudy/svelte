<script>
    import Icon from '@iconify/svelte';

    export let bucketText;
    export let onSubmit;
    export let onDataChange;

    //오픈 관련 값을 담는 변수
    let open = false; //처음엔 열려있지 않아서 false

    //입력창 열기
    const onToggle = () =>  { 
        open = !open 
        if(!open){
            bucketText = '';
        }
    };
    
    //입력창 닫기
    const onClose = () => open = false;
</script>

<div class="bucketcreate">
    <div class={open ? "createform active" : "createform"}>
    <form on:submit={(e) => { onSubmit(e); onClose(); }}>
        <input
            type="text"
            bind:value={bucketText}
            on:change={(e) => onDataChange(e)}
            placeholder="추가할 버킷리스트를 입력 후, Enter를 누르세요."
        />
    </form>
    </div>
    <button 
        class="circlebox"
        on:click={onToggle}
    >
        <Icon icon="ic:round-add" />
    </button>
</div>