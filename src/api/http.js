import axios from "axios";

const instance=axios.create({
    baseURL: 'http://localhost:8000/users/'  // 장고 drf 서버 주소
});

export default instance;