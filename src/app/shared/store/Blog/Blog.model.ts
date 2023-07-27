export interface BlogModel{
    id:number,
    title:string,
    description:string
}

export interface Blogs{
   bloglist:BlogModel[],
   Errormessage:string
   //IsLoaded:boolean
}