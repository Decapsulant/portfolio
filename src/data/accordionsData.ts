
interface AccordionDataI{
    id:number,
    title:string,
    content:string,
    list?:string[]

}

export const AccordionData:AccordionDataI[] = [{
    id:0,
    title:"My Skills",
    content:"",
    list:["HTML/CSS(SCSS)", "JavaScript/TypeScript", "React", "Redux", "Axios", "React-Router-Dom", "Framer-motion"]
},
{   id:1,
    title:"Learning",
    content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio harum delectus, eligendi excepturi ratione voluptates, quis, consectetur atque eos dignissimos architecto blanditiis possimus recusandae rem suscipit et dolorum molestias ducimus bla bla bla."
},
{   id:2,
    title:"Description",
    content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio harum delectus, eligendi excepturi ratione voluptates, quis, consectetur atque eos dignissimos architecto blanditiis possimus recusandae rem suscipit et dolorum molestias ducimus bla bla bla."
},
{   id:3,
    title:"About myself",
    content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio harum delectus, eligendi excepturi ratione voluptates, quis, consectetur atque eos dignissimos architecto blanditiis possimus recusandae rem suscipit et dolorum molestias ducimus bla bla bla."
},
]