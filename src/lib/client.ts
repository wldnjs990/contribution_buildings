import axios from "axios";

// 깃허브 graphQL 인스턴스
const githubClient = axios.create({
  baseURL : 'https://api.github.com/graphql',
  headers: {
    Authorization : `Bearer ${process.env.GITHUB_API_KEY}`
  }
})

export {githubClient}