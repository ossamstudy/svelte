import axios from 'axios';
import { writable } from "svelte/store";

//1. 프로미스
const setPromise = (url) => { 
    const options = {
		method: 'GET',
		url: url,
		params: {language: 'ko', page: '1'},
		headers: {
			accept: 'application/json',
    		Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzIzNWM5NDVmZWY5MjQ4MjYyMzcyYjQ3MDc3MWEwZiIsInN1YiI6IjY1MzExM2VmNTFhNjRlMDBjOGZkZDllZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HAM4KxHc1sW48Ff479mJR_TWwuHWStKla2NSEFsUM68'
		}
	};
	const getPromise = async () => {
		try {
			const res = await axios.request(options);
			return res;
		}catch(error) {
			throw new Error(error);
		}
	};

    const { subscribe } = writable(getPromise());

    return {
        subscribe,
    }
}

//2. 데이터
const setDatas = (url) => { 
    const options = {
		method: 'GET',
		url: url,
		params: {language: 'ko', page: '1'},
		headers: {
			accept: 'application/json',
    		Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzIzNWM5NDVmZWY5MjQ4MjYyMzcyYjQ3MDc3MWEwZiIsInN1YiI6IjY1MzExM2VmNTFhNjRlMDBjOGZkZDllZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HAM4KxHc1sW48Ff479mJR_TWwuHWStKla2NSEFsUM68'
		}
	};
	const getDatas = async () => {
		try {
			const res = await axios.request(options);
			return res.data.results;
		}catch(error) {
			throw new Error(error);
		}
	};

    const { subscribe } = writable(getDatas());

    return {
        subscribe,
    }
}

//3. 장르
const setGenres = (url) => { 
    const options = {
		method: 'GET',
		url: url,
		params: {language: 'ko'},
		headers: {
			accept: 'application/json',
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzIzNWM5NDVmZWY5MjQ4MjYyMzcyYjQ3MDc3MWEwZiIsInN1YiI6IjY1MzExM2VmNTFhNjRlMDBjOGZkZDllZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HAM4KxHc1sW48Ff479mJR_TWwuHWStKla2NSEFsUM68'
		}
	};
	const getGenres = async () => {
		try {
			const res = await axios.request(options);
			return res.data.genres;

		}catch(error) {
			throw new Error(error);
		}
	};

    const { subscribe } = writable(getGenres());

    return {
        subscribe,
    }
}

//내보내기
const basicURL = 'https://api.themoviedb.org/3/movie/';
export const nowPromise = setPromise(`${basicURL}now_playing`);
export const nows = setDatas(`${basicURL}now_playing`);
export const genres = setGenres('https://api.themoviedb.org/3/genre/movie/list');
export const popularPromise = setPromise(`${basicURL}popular`);
export const populars = setDatas(`${basicURL}popular`);
export const upcomingPromise = setPromise(`${basicURL}upcoming`);
export const upcomings = setDatas(`${basicURL}upcoming`);
export const topPromise = setPromise(`${basicURL}top_rated`);
export const tops = setDatas(`${basicURL}top_rated`);