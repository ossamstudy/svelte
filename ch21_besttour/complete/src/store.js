import { writable } from "svelte/store";
import { initialBests } from './bestData';
import { v4 as uuidv4 } from 'uuid';

//커스텀 스토어
//데이터 관련을 store로 만들어 필요한 기능을 한번에 리턴
const setBestData = () => {
    //데이터 담기 - 사용될 상태
    const { subscribe, update } = writable(initialBests);

    const onToggle = (id) => {
        update(
            datas => {
                const setDatas = datas.map((best) => {
                    return best.id === id ? { ...best, like: !best.like } : best;
                });
                datas = setDatas;
                return datas;
            }
        );
    }

    const onRemove = (id) => {
        update(
            datas => {
                const setDatas = datas.filter((best) => best.id !== id);
                datas = setDatas;
                return datas;
            }
        );
    };

    const onSubmit = (bestTexts) => {
        if(bestTexts){
            const best = {
                id: uuidv4(),
                name: bestTexts.name,
                price: bestTexts.price,
                descript: bestTexts.descript,
                image: bestTexts.image,
                like: false
            };

            update(
                datas => {
                    const setDatas = [...datas, best];
                    datas = setDatas;
                    return datas;
                }
            );
        }
        
    }

    return {
        subscribe,
        onToggle,
        onRemove,
        onSubmit
    }
}

//데이터 추가시 사용될 텍스트를 store로 만들어 필요한 기능을 한번에 리턴
const setFormBest = () => {
    let formText = {
        name: '',
        price: '',
        image: '',
        descript: ''
    }; 

    const { subscribe, update, set } = writable(formText);

    const resetForm = () => { //값을 초기화
        set('');
    }

    //필요한 기능을 한번에 리턴
    return {
        subscribe,
        set,
        resetForm
    }
}

export const bestTexts = setFormBest();
export const bests = setBestData();