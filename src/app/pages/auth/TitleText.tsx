
type TitleProps = {
     title?: string
     text?: string
}

export default function TitleText({title = "Welcome Back", text = "Login to your apps"}: TitleProps){
     return (
          <div className="flex flex-col items-center text-center">
               <h1 className="text-2xl font-bold">{title}</h1>
               <p className="text-balance text-muted-foreground">
                    {text}
               </p>
          </div>
     )
}