import { BsRocket, BsBook } from 'react-icons/bs';
import { BiTask } from 'react-icons/bi';
import { IconType } from 'react-icons/lib';

interface projectDataI {
  path: string;
  title: string;
  icon: IconType;
}

export const projectData: projectDataI[] = [
  { path: 'https://space-tourism-pqtc.vercel.app', title: 'Space tourism', icon: BsRocket },
  { path: 'https://todo-app-six-wine-89.vercel.app', title: 'To-do List', icon: BiTask },
  { path: 'https://books-catalog-taupe.vercel.app', title: 'Books-catalog', icon: BsBook },
];
