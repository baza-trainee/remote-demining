import member1 from '@/public/images/team/member1.jpg';
import member2 from '@/public/images/team/member2.jpg';
import member3 from '@/public/images/team/member3.jpg';
import member4 from '@/public/images/team/member4.jpg';

interface Team {
  id: number,
  img: string,
  name: string,
  projectPosition: string,
  phone: string,
  email: string,
}


export const teamData: Team[] = [
  {
    id: 1,
    img: member1.src,
    name: 'Name',
    projectPosition: 'Президент, засновник',
    phone: '+380000000000',
    email: 'example@example.com'
  },
  {
    id: 2,
    img: member2.src,
    name: 'Name',
    projectPosition: 'Президент, засновник',
    phone: '+380000000000',
    email: 'example@example.com'
  },
  {
    id: 3,
    img: member3.src,
    name: 'Name',
    projectPosition: 'Президент, засновник',
    phone: '+380000000000',
    email: 'example@example.com'
  },
  {
    id: 4,
    img: member4.src,
    name: 'Name',
    projectPosition: 'Президент, засновник',
    phone: '+380000000000',
    email: 'example@example.com'
  }
]
