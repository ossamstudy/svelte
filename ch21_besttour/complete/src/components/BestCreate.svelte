<script>
    import { bests, bestTexts } from '../store';
    import Icon from '@iconify/svelte';
    import { v4 as uuidv4 } from 'uuid';

    const id01 = uuidv4();
    const id02 = uuidv4();
    const id03 = uuidv4();
    const id04 = uuidv4();

    //오픈 관련 값을 담는 변수
    let open = false; //처음엔 열려있지 않아서 false

    //입력창 열기
    const onToggle = () =>  { 
        open = !open 
        if(!open){
            bestTexts.resetForm();
        }
    };
    
    //입력창 닫기
    const onClose = () => open = false;

    const onDataChange = (e) => {
        //비구조화할당
        const { name, value } = e.target; 

        //state값 변경
        $bestTexts = {
            ...$bestTexts,
            [name]: value
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        bests.onSubmit($bestTexts);
        bestTexts.resetForm();
    }
</script>
<div>
    <form 
        class={open ? "createform active" : "createform"}
        on:submit={(e) => { onSubmit(e); onClose(); }}
    >
        <fieldset>
        <legend>여행 추가하기</legend>
            <label for={id01}>여행명 : </label>
            <input type="text" id={id01} name="name" bind:value={$bestTexts.name} on:change={(e) => onDataChange(e)} required />
            <label for={id02}>가격 : </label>
            <input type="text" id={id02} placeholder="숫자로만 입력하세요" name="price" bind:value={$bestTexts.price} on:change={(e) => onDataChange(e)} required />
            <label for={id03}>이미지경로 : </label>
            <input type="text" id={id03} name="image" bind:value={$bestTexts.image} on:change={(e) => onDataChange(e)} required />
            <br />
            <label for={id04} class="dlabel">설명 : </label>
            <textarea rows="5" id={id04} name="descript" bind:value={$bestTexts.descript} on:change={(e) => onDataChange(e)} required />
            <br />
            <button type="submit">여행추가하기</button>
        </fieldset>
    </form>
    <button class="circlebox" on:click={onToggle}>
        <Icon icon="ic:round-add" />
    </button>
</div>