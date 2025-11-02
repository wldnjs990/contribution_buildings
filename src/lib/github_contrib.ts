import { githubClient } from "@/lib/client"

// contribution 가져오는 쿼리
const query = `
  query($userName:String!, $from:DateTime!, $to:DateTime!) {
    user(login:$userName) {
      contributionsCollection(from : $from, to : $to) {
        contributionCalendar {
          totalContributions
          months{
            totalWeeks
          }
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

// graphQL은 반드시 POST 요청으로 데이터를 요청하며, 
// 아래와 같이 요청 데이터에 쿼리 문자열과 variables라는 명시적인 변수명에 $변수값을 담아서 http요청을 보내야 정상적으로 통신이 된다.
export const getGithubContributions = async (userName : string, from : Date, to : Date)=>{
  console.log(process.env.GITHUB_API_KEY)
  console.log(from.toISOString())
  console.log(to.toISOString())
  try {
    const userContributions = await githubClient.post(``, {
      query,
      variables : {
        userName : userName,
        from : from.toISOString(),
        to : to.toISOString()
      }
    })
    return userContributions.data
  } catch (error) {
    throw new Error(`깃허브 API 통신중 문제가 발생했습니다.`) 
  }
}