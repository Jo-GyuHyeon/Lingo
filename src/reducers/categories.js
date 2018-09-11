import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const INSERT = 'categories/INSERT';
const REMOVE = 'categories/REMOVE';

export const insert = createAction(INSERT);
export const remove = createAction(REMOVE);

// 초기 상태를 정의합니다.
const initialState = List([
    Map({
        id: 0,
        category: '개발',
        image: 'http://image.itdonga.com/files/2016/05/24/00001.JPG'
    }),
    Map({
        id: 1,
        category: '비즈니스',
        image: 'http://farm4.staticflickr.com/3718/10721303523_39b32452d6_b.jpg'
    }),
    Map({
        id: 2,
        category: 'IT및 소프트웨어',
        image: 'http://www.savethecat.com/wp-content/uploads/2018/01/it_ver3_xlg.jpg'
    }),
    Map({
        id: 3,
        category: '디자인',
        image: 'https://cdn.www.fastcampus.co.kr/wp-content/uploads/2015/10/dgn_camp_branding_blog1_img4.jpg'
    }),
    Map({
        id: 4,
        category: '마케팅',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6NKteOu5BZP6vczEWgh-P6Zugq1eRuwRf9XVv2zkt9RtTOsCASg'
    }),
    Map({
        id: 5,
        category: '자기 개발',
        image: 'https://d81pi4yofp37g.cloudfront.net/wp-content/uploads/ted_2.png'
    }),
    Map({
        id: 6,
        category: '사진',
        image: 'https://dbbi7jasykh4f.cloudfront.net/media/category/parent_category_6/camera.png'
    }),
    Map({
        id: 7,
        category: '음악',
        image: 'http://img.wkorea.com/w/2017/01/style_587d8a507e138.jpg'
    }),
    Map({
        id: 8,
        category: '언어',
        image: 'https://pm1.narvii.com/6720/0985421b6d8161043e2ddfcf956c284ad9d2134f_hq.jpg'
    }),
    Map({
        id: 9,
        category: '건강 및 운동',
        image: 'https://png.pngtree.com/element_origin_min_pic/16/11/22/dffb650df590cd797d5f2f99f9a5daf3.jpg'
    }),
    Map({
        id: 10,
        category: '사무 생산성',
        image: 'https://blog.hmgjournal.com/upload/common/activeSquare/binary/201509211644762_NDOXV1EM.jpg'
    }),
    Map({
        id: 11,
        category: '라이프스타일',
        image: 'http://www.fashionnetkorea.com/__boardstyle/FASHION/MDREPORT/images/20150315222456_719984046.jpg'
    })
])

export default handleActions({
    [INSERT]: (state, action) => {
        const { id, category, image } = action.payload;
        return state.push(Map({
            id, 
            category, 
            image
        }))
    },
    [REMOVE]: (state, action) => {
        const { payload: index } = action;
        return state.delete(index);
    }
}, initialState)
