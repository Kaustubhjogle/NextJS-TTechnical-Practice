const DynamicPageOne = async({params} : {params: Promise<{idtypeone: string}>}) => {
    const {idtypeone} = await params
    console.log(idtypeone)
    return(
        <>
        <div>1.This is Dynamic page example by using params</div>
        <div>
            Data for id: {idtypeone}
        </div>
        </>
    )
}

export default DynamicPageOne;