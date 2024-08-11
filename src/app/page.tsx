import HomePageClient from './page.client'

const HomePage = async () => {
  const userData = await fetch('http://localhost:3001/api/user/me', {
    credentials: 'include',
  }).then((res) => res.json())
  console.log({ userData })
  return <HomePageClient userData={userData} />
}

export default HomePage
