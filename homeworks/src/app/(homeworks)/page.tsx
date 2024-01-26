
import { HomeScreen } from '@/components/HomeScreen';
import { BASE_API_URL } from '@/utils/constant';

export default function Home() {
  if(!BASE_API_URL){
    return null;
  }
  return (
    <>
    <HomeScreen/>
    </>
  );
}
