import {fromJS} from "immutable";
import { handleActions, createAction } from "redux-actions";

const INSERT = "categories/INSERT";
const REMOVE = "categories/REMOVE";

export const insert = createAction(INSERT);
export const remove = createAction(REMOVE);

let id = 11;

// 초기 상태를 정의합니다.
const initialState = fromJS([
  {
    id: 0,
    category: "개발",
    image: "http://image.itdonga.com/files/2016/05/24/00001.JPG"
  },
  {
    id: 1,
    category: "비즈니스",
    image: "http://farm4.staticflickr.com/3718/10721303523_39b32452d6_b.jpg"
  },
  {
    id: 2,
    category: "IT및 소프트웨어",
    image:
      "http://www.savethecat.com/wp-content/uploads/2018/01/it_ver3_xlg.jpg"
  },
  {
    id: 3,
    category: "디자인",
    image:
      "https://cdn.www.fastcampus.co.kr/wp-content/uploads/2015/10/dgn_camp_branding_blog1_img4.jpg"
  },
  {
    id: 4,
    category: "마케팅",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6NKteOu5BZP6vczEWgh-P6Zugq1eRuwRf9XVv2zkt9RtTOsCASg"
  },
  {
    id: 5,
    category: "자기 개발",
    image: "https://d81pi4yofp37g.cloudfront.net/wp-content/uploads/ted_2.png"
  },
  {
    id: 6,
    category: "사진",
    image:
      "https://dbbi7jasykh4f.cloudfront.net/media/category/parent_category_6/camera.png"
  },
  {
    id: 7,
    category: "음악",
    image: "http://img.wkorea.com/w/2017/01/style_587d8a507e138.jpg"
  },
  {
    id: 8,
    category: "언어",
    image:
      "https://pm1.narvii.com/6720/0985421b6d8161043e2ddfcf956c284ad9d2134f_hq.jpg"
  },
  {
    id: 9,
    category: "건강 및 운동",
    image:
      "https://png.pngtree.com/element_origin_min_pic/16/11/22/dffb650df590cd797d5f2f99f9a5daf3.jpg"
  },
  {
    id: 10,
    category: "사무 생산성",
    image:
      "https://blog.hmgjournal.com/upload/common/activeSquare/binary/201509211644762_NDOXV1EM.jpg"
  },
  {
    id: 11,
    category: "라이프스타일",
    image:
      "http://www.fashionnetkorea.com/__boardstyle/FASHION/MDREPORT/images/20150315222456_719984046.jpg"
  }
]);

export default handleActions(
  {
    [INSERT]: (state, action) => {
      const { category, image } = action.payload;

      const index = state.findIndex(
        item => item.get("category") === category
      );

      if (index === -1) {
        id += 1;
        return state.push(
          {
            id,
            category,
            image
          });
      }else {
  return state;
}
      
    },
[REMOVE]: (state, action) => {
  const id = action.payload;
  const index = state.findIndex(item => item.get("id") === id);
  return state.delete(index);
}
  },
initialState
);
