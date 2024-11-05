<script>
	import BucketHeader from "./components/BucketHeader.svelte";
    import BucketList from "./components/BucketList.svelte";
    import BucketCreate from "./components/BucketCreate.svelte";
    import { initialBuckets } from "./bucketData";
    import { v4 as uuidv4 } from 'uuid';

    //버킷 데이터 상태 관리
    let buckets = initialBuckets;

    //버킷 텍스트를 담을 상태 변수 - 추가될 때 처리
    let bucketText = ''; 

    //editMode관련 상태관리
    let editMode = '';

    //체크 개수
    $: chkCount = buckets.filter((bucket) => !bucket.chk).length;

    //이벤트함수
    //1. chk속성값 변경 - CSS변화가 된다고 값이 변경되지 않음
    const onToggle = (id) => {
        buckets = buckets.map((bucket) => {
            return bucket.id === id ? { ...bucket, chk: !bucket.chk } : bucket;
        });
    }

    //2. 휴지통아이콘 누르면 삭제
    const onRemove = (id) => {
       buckets = buckets.filter((bucket) => bucket.id !== id);
    };

    //3. input의 change이벤트 처리
    const onDataChange = (e) => {
        bucketText = e.target.value;
    }

    //4. 버킷 데이터 추가
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(bucketText);

        if(bucketText){
            const bucket = {
                id: uuidv4(),
                text: bucketText,
                chk: false
            };
            buckets = [...buckets, bucket];
        }
        bucketText = '';
    }

    //5. 텍스트를 변경할지 지정하는 이벤트 함수
    const onEditMode = (id) => {
        editMode = id
    }

    //6. 변경모드를 끝내는 이벤트 함수
    const offEditMode = () => {
        editMode = '';
    }

    //7. 데이터 수정 키보드 이벤트 하수
    const onEditKeyup = (e, editBucket) => {
        if(e.keyCode === 13){
            onEditItem(editBucket);
        }
    }

    //8. 데이터를 수정하는 이벤트 함수
    const onEditItem = (editBucket) => {
        buckets = buckets.map(bucket => {
            if(bucket.id === editBucket.id){
                bucket = editBucket
            }
            return bucket;
        });
        offEditMode();
    }
</script>

<svelte:head>
    <title>My Bucket List</title>
</svelte:head>
<div class="bucketbox">
    <BucketHeader {chkCount} />
    <BucketList {buckets} {onToggle} {onRemove} {editMode} {onEditMode} {onEditKeyup} />
    <BucketCreate {bucketText} {onDataChange} {onSubmit} />
</div>