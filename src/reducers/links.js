import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const INSERT = 'links/INSERT';
const REMOVE = 'links/REMOVE';

export const insert = createAction(INSERT);
export const remove = createAction(REMOVE);

let id = 9;
// 초기 상태를 정의합니다.
const initialState = List([
  Map({
    id: 0,
    title: 'Python',
    category: '개발',
    url: 'https://www.udemy.com/complete-python-bootcamp/',
    hash_tag: '#Python #개발'
  }),
  Map({
    id: 1,
    title: 'angular2',
    category: '개발',
    url: 'https://www.udemy.com/the-complete-guide-to-angular-2/',
    hash_tag: '#angular2 #개발'
  }),
  Map({
    id: 2,
    title: '하나의 강좌에 MBA 과정',
    category: '비지니스',
    url: 'https://www.udemy.com/korean-an-antire-mba-in-1-course/',
    hash_tag: '#MBA #비지니스'
  }),
  Map({
    id: 3,
    title: '베트남 비즈니스 성공하기',
    category: '비지니스',
    url: 'https://www.udemy.com/vietnam_business_tips_for_korean/',
    hash_tag: '#베트남 #비지니스'
  }),
  Map({
    id: 4,
    title: 'Oracle Database',
    category: 'IT및 소프트웨어',
    url: 'https://www.udemy.com/oracle-database-12c-backup-and-recovery-using-rman/',
    hash_tag: '#it #오라클'
  }),
  Map({
    id: 5,
    title: 'The Complete Cyber Security Course',
    category: 'IT및 소프트웨어',
    url: 'https://www.udemy.com/the-complete-internet-security-privacy-course-volume-1/',
    hash_tag: '#id'
  }),
  Map({
    id: 6,
    title: 'Illustrator CC 2018 MasterClass',
    category: '디자인',
    url: 'https://www.udemy.com/illustrator-cc-masterclass/',
    hash_tag: '#디자인 #2018'
  }),
  Map({
    id: 7,
    title: 'Art Fundamentals: Drawing and Painting Essentials',
    category: '디자인',
    url: 'https://www.udemy.com/art-fundamentals-drawing-and-painting-essentials/',
    hash_tag: '#디자인 #drawing'
  }),
  Map({
    id: 8,
    title: 'Instagram Marketing 2018',
    category: '마케팅',
    url: 'https://www.udemy.com/instagram-marketing-for-small-businesses/',
    hash_tag: '#마케팅 #instagram'
  }),
  Map({
    id: 9,
    title: '네이버 마케팅',
    category: '마케팅',
    url: 'https://www.udemy.com/guide_to_naver_maketing_with_keyword/',
    hash_tag: '#마케팅 #네이버'
  }),

])

export default handleActions({
  [INSERT]: (state, action) => {
    const { category, hash_tag, title, url } = action.payload;
    id += 1;
    const regex = /#[^\s]*/g;
    let hash_tags = hash_tag.toLowerCase().match(regex);

    if (hash_tags !== null) {
      hash_tags = hash_tags.filter((hash_tag, idx, array) => {
        return array.indexOf(hash_tag) === idx && hash_tag.length > 1
      })
    }
    return state.push(Map({
      id,
      category,
      hash_tag: hash_tags,
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
