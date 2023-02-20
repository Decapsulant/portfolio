
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
    list:["HTML/CSS(SCSS)", "JavaScript/TypeScript", "React", "Redux", "Axios", "React-Router-Dom", "Motion-Framer", "React-Hooks-Form"]
},
{   id:1,
    title:"learning",
    content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio harum delectus, eligendi excepturi ratione voluptates, quis, consectetur atque eos dignissimos architecto blanditiis possimus recusandae rem suscipit et dolorum molestias ducimus bla bla bla."
},
{   id:2,
    title:"description",
    content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio harum delectus, eligendi excepturi ratione voluptates, quis, consectetur atque eos dignissimos architecto blanditiis possimus recusandae rem suscipit et dolorum molestias ducimus bla bla bla."
},
{   id:3,
    title:"about myself",
    content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio harum delectus, eligendi excepturi ratione voluptates, quis, consectetur atque eos dignissimos architecto blanditiis possimus recusandae rem suscipit et dolorum molestias ducimus bla bla bla."
},
]