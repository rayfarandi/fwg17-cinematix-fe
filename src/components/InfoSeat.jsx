function InfoSeat(){
    return(
        <>
        <p className="mt-6 text-[#000] text-[18px] font-semibold">
                  Seating Key
        </p>
        <div className="flex gap-x-8 w-full">
            <div className="py-4 flex gap-x-4 items-center">
            <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
            <p className="text-sm font-semibold text-secondary">
                Avalaible
            </p>
            </div>
            <div className="py-4 flex gap-x-4 items-center">
            <div className="w-[26px] h-[26px] bg-primary rounded"></div>
            <p className="text-sm font-semibold text-secondary">
                Selected
            </p>
            </div>
            <div className="py-4 flex gap-x-4 items-center">
            <div className="w-[26px] h-[26px] bg-[#F589D7] rounded"></div>
            <p className="text-sm font-semibold text-secondary">
                Love Nest
            </p>
            </div>
            <div className="py-4 flex gap-x-4 items-center">
            <div className="w-[26px] h-[26px] bg-[#6E7191] rounded"></div>
            <p className="text-sm font-semibold text-secondary">Sold</p>
            </div>
        </div>
        </>
    )
}

export default InfoSeat