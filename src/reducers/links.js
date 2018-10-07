import { fromJS } from "immutable";
import { handleActions, createAction } from 'redux-actions';

const INSERT = 'links/INSERT';
const REMOVE = 'links/REMOVE';

export const insert = createAction(INSERT);
export const remove = createAction(REMOVE);

let id = 9;
// 초기 상태를 정의합니다.
const initialState = fromJS([
  {
    id: 0,
    title: 'Python',
    category: '개발',
    url: 'https://www.udemy.com/complete-python-bootcamp/',
    hashTag: '#Python #개발'
  },
  {
    id: 1,
    title: 'angular2',
    category: '개발',
    url: 'https://www.udemy.com/the-complete-guide-to-angular-2/',
    hashTag: '#angular2 #개발'
  },
  {
    id: 2,
    title: '하나의 강좌에 MBA 과정',
    category: '비지니스',
    url: 'https://www.udemy.com/korean-an-antire-mba-in-1-course/',
    hashTag: '#MBA #비지니스'
  },
  {
    id: 3,
    title: '베트남 비즈니스 성공하기',
    category: '비지니스',
    url: 'https://www.udemy.com/vietnam_business_tips_for_korean/',
    hashTag: '#베트남 #비지니스'
  },
  {
    id: 4,
    title: 'Oracle Database',
    category: 'IT및 소프트웨어',
    url: 'https://www.udemy.com/oracle-database-12c-backup-and-recovery-using-rman/',
    hashTag: '#it #오라클'
  },
  {
    id: 5,
    title: 'The Complete Cyber Security Course',
    category: 'IT및 소프트웨어',
    url: 'https://www.udemy.com/the-complete-internet-security-privacy-course-volume-1/',
    hashTag: '#id'
  },
  {
    id: 6,
    title: 'Illustrator CC 2018 MasterClass',
    category: '디자인',
    url: 'https://www.udemy.com/illustrator-cc-masterclass/',
    hashTag: '#디자인 #2018'
  },
  {
    id: 7,
    title: 'Art Fundamentals: Drawing and Painting Essentials',
    category: '디자인',
    url: 'https://www.udemy.com/art-fundamentals-drawing-and-painting-essentials/',
    hashTag: '#디자인 #drawing'
  },
  {
    id: 8,
    title: 'Instagram Marketing 2018',
    category: '마케팅',
    url: 'https://www.udemy.com/instagram-marketing-for-small-businesses/',
    hashTag: '#마케팅 #instagram'
  },
  {
    id: 9,
    title: '네이버 마케팅',
    category: '마케팅',
    url: 'https://www.udemy.com/guide_to_naver_maketing_with_keyword/',
    hashTag: '#마케팅 #네이버'
  },

])

export default handleActions({
  [INSERT]: (state, action) => {
    const { category, hashTag, title, url } = action.payload;
    id += 1;
    const regex = /#[^\s]*/g;
    let hashTags = hashTag.toLowerCase().match(regex);

    if (hashTags !== null) {
      hashTags = hashTags.filter((hashTag, idx, array) => {
        return array.indexOf(hashTag) === idx && hashTag.length > 1
      })
    }
    return state.push(Map({
      id,
      category,
      hashTag: hashTags,
      title,
      url,

    }))
  },
  [REMOVE]: (state, action) => {
    const { index, category } = action.payload;
    if (index !== undefined) {
      return state.delete(index);
    } else {
      return state.filter(item => item.get('category') !== category)
    }

  }
}, initialState)
