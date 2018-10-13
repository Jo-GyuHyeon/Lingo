import { fromJS } from 'immutable';
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
    hashtag: '#Python #개발'
  },
  {
    id: 1,
    title: 'angular2',
    category: '개발',
    url: 'https://www.udemy.com/the-complete-guide-to-angular-2/',
    hashtag: '#angular2 #개발'
  },
  {
    id: 2,
    title: '하나의 강좌에 MBA 과정',
    category: '비지니스',
    url: 'https://www.udemy.com/korean-an-antire-mba-in-1-course/',
    hashtag: '#MBA #비지니스'
  },
  {
    id: 3,
    title: '베트남 비즈니스 성공하기',
    category: '비지니스',
    url: 'https://www.udemy.com/vietnam_business_tips_for_korean/',
    hashtag: '#베트남 #비지니스'
  },
  {
    id: 4,
    title: 'Oracle Database',
    category: 'IT및 소프트웨어',
    url:
      'https://www.udemy.com/oracle-database-12c-backup-and-recovery-using-rman/',
    hashtag: '#it #오라클'
  },
  {
    id: 5,
    title: 'The Complete Cyber Security Course',
    category: 'IT및 소프트웨어',
    url:
      'https://www.udemy.com/the-complete-internet-security-privacy-course-volume-1/',
    hashtag: '#id'
  },
  {
    id: 6,
    title: 'Illustrator CC 2018 MasterClass',
    category: '디자인',
    url: 'https://www.udemy.com/illustrator-cc-masterclass/',
    hashtag: '#디자인 #2018'
  },
  {
    id: 7,
    title: 'Art Fundamentals: Drawing and Painting Essentials',
    category: '디자인',
    url:
      'https://www.udemy.com/art-fundamentals-drawing-and-painting-essentials/',
    hashtag: '#디자인 #drawing'
  },
  {
    id: 8,
    title: 'Instagram Marketing 2018',
    category: '마케팅',
    url: 'https://www.udemy.com/instagram-marketing-for-small-businesses/',
    hashtag: '#마케팅 #instagram'
  },
  {
    id: 9,
    title: '네이버 마케팅',
    category: '마케팅',
    url: 'https://www.udemy.com/guide_to_naver_maketing_with_keyword/',
    hashtag: '#마케팅 #네이버'
  }
]);

export default handleActions(
  {
    [INSERT]: (state, action) => {
      const { category, title, url } = action.payload;
      let { hashtag } = action.payload;
      id += 1;
      const regex = /#[^\s]*/g;
      hashtag = hashtag.toLowerCase().match(regex);

      if (hashtag) {
        hashtag = hashtag.filter((hashtag, idx, array) => {
          return array.indexOf(hashtag) === idx && hashtag.length > 1;
        });
      } else {
        hashtag = '';
      }
      return state.push(
        fromJS({
          id,
          category,
          hashtag,
          title,
          url
        })
      );
    },
    [REMOVE]: (state, action) => {
      const { category } = action.payload;
      return state.filter(item => item.get('category') !== category);
    }
  },
  initialState
);
