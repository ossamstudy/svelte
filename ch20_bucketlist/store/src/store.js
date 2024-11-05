import { writable, derived } from "svelte/store";
import { initialBuckets } from "./bucketData";
import { v4 as uuidv4 } from "uuid";

//커스텀 스토어
//버킷 데이터 관련을 store로 만들어 필요한 기능을 한번에 리턴
const setBucketData = () => {
    //데이터 담기 - 사용될 상태 변수를 묶은 데이터
    let initBucketData = {
        buckets: initialBuckets,
        editMode: ''
    }

    let bucketData = {...initBucketData};

    const { subscribe, update } = writable(bucketData);

    const onToggle = (id) => {
        update(
            datas => {
                const setDatas = datas.buckets.map((bucket) => {
                    return bucket.id === id ? { ...bucket, chk: !bucket.chk } : bucket;
                });
                datas.buckets = setDatas;
                return datas;
            }
        );
    }
    const onRemove = (id) => {
        update(
            datas => {
                const setDatas = datas.buckets.filter((bucket) => bucket.id !== id);
                datas.buckets = setDatas;
                return datas;
            }
        );
    };
    const onEditMode = (id) => {
        update(
            datas => {
                datas.editMode = id;
                return datas;
            }
        );
    }

    const offEditMode = () => {
        update(
            datas => {
                datas.editMode = '';
                return datas;
            }
        );
    }

    const onEditItem = (editBucket) => {
        update(
            datas => {
                const setDatas = datas.buckets.map(bucket => {
                    if(bucket.id === editBucket.id){
                        bucket = editBucket
                    }
                    return bucket;
                });
                datas.buckets = setDatas;
                return datas;
            }
        );
    }

    const onSubmit = (bucketText) => {
        if(bucketText){
            const bucket = {
                id: uuidv4(),
                text: bucketText,
                chk: false
            };

            update(
                datas => {
                    const setDatas = [...datas.buckets, bucket];
                    datas.buckets = setDatas;
                    return datas;
                }
            );
        }
        
    }

    //필요한 기능을 한번에 리턴
    return {
        subscribe,
        onToggle,
        onRemove,
        onEditMode,
        offEditMode,
        onEditItem,
        onSubmit
    }
}

//데이터 추가시 사용될 텍스트를 store로 만들어 필요한 기능을 한번에 리턴
const setFormBucket = () => {
    let formText = ''; 

    const { subscribe, update, set } = writable(formText);

    const resetFrom = () => { //값을 초기화
        set('');
    }

    //필요한 기능을 한번에 리턴
    return {
        subscribe,
        set,
        resetFrom
    }
}

//스토어로부터 파생된 새로운 스토어 생성
const setChkCount = () => {
    const count = derived(buckets, $buckets => {
        return $buckets.buckets.filter((bucket) => !bucket.chk).length;
    });
    return count;
}

export const bucketText = setFormBucket();
export const buckets = setBucketData();
export const chkCount = setChkCount();