
import { HomeScreen } from '@/components/HomeScreen';

export default function Home() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL
  if(!BASE_URL){
    return null;
  }
  return (
    <>
    <HomeScreen/>
    </>
  );
}
