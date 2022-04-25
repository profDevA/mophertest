import axios from 'axios'

console.log("process env =>", process.env.NODE_ENV)

export default axios.create({
    baseURL: 'http://localhost:5000'
})