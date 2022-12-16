import { useRemarkSync } from 'react-remark';
function Preview(value:string){
    const reactContent = useRemarkSync(value);
  
    return reactContent;
};
export default Preview;