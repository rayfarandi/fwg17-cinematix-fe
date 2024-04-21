import getImageUrl from "../utils/imageGet";

const PageNavigator = ({totalPage, handlingNextPage, handlingPrevPage, handlingPage, currentPage, rounded}) => {
    const pages = []
    for(let i = 1; i <= totalPage; i++){
      pages.push(i)
    }

    return (
        <section className="pb-[63px] flex gap-x-5 justify-center font-nunito font-medium">
            {currentPage > 1 &&
                <button onClick={handlingPrevPage} className={`bg-primary rounded-${rounded} w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] flex justify-center items-center active:scale-95 transition-all`}>
                    <img src={getImageUrl("arrow-left", "svg")} alt="arrow" className="h-5 lg:h-6"/>
                </button>
            }


            {
              pages.map((item, index) => {
                let display = item >= currentPage - 1 && item <= currentPage + 1
                return ( display &&
                  <button onClick={(event) => handlingPage(event.target.innerText)} key={index} className={`${currentPage == item ? "text-light bg-primary" : "text-[#A0A3BD] bg-[#A0A3BD1A]"} rounded-${rounded} w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] flex justify-center items-center active:scale-95 transition-all`}>
                    {item}
                  </button>
                )
              })
            }


            {currentPage !== totalPage &&
            <button onClick={handlingNextPage} className={`bg-primary rounded-${rounded}  w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] flex justify-center items-center active:scale-95 transition-all`}>
              <img src={getImageUrl("arrow-right", "svg")} alt="arrow" className="h-5 lg:h-6"/>
            </button>
            }

      </section>
    )
}

export default PageNavigator