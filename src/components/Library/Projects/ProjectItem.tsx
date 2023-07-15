import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { IconType } from 'react-icons/lib';

type ProjectItemProps = {
  title: string;
  path: string;
  icon: IconType;
};
type Ref = HTMLAnchorElement;

const ProjectItem = forwardRef<Ref, ProjectItemProps>(({ title, path, icon }, ref) => {
  return (
    <a ref={ref} target="_blank" href={path} className="project__item" rel="noreferrer">
      <h6 className="project__item-title">{title}</h6>
      <div className="project__item-icon">{icon({ size: 48 })}</div>
    </a>
  );
});

export const MProjectItem = motion(ProjectItem);
export default ProjectItem;
