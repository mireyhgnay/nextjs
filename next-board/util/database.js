import { MongoClient } from 'mongodb';
const url =
  'mongodb+srv://hyerimiya1216:<password>@cluster0.yf9vrko.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const options = { useNewUrlParser: true };
let connectDB;

// NextJS로 개발할 땐 파일저장할 때 마다 자바스크립트 파일들이 재실행됨
// 그래서 개발중 상태면 global 이라는 전역변수 저장소에 보관해주세요. 라고 조건 추가
if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  // production
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
