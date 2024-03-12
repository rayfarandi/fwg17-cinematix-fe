function InfoSeat(){
    return(
        <>
        <p className="mt-6 text-[#000] text-[18px] font-semibold">
                  Seating Key
        </p>
        <div className="flex w-full gap-x-8">
            <div className="flex items-center py-4 gap-x-4">
            <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
            <p className="text-sm font-semibold text-secondary">
                Avalaible
            </p>
            </div>
            <div className="flex items-center py-4 gap-x-4">
            <div className="w-[26px] h-[26px] bg-primary rounded"></div>
            <p className="text-sm font-semibold text-secondary">
                Selected
            </p>
            </div>
            <div className="flex items-center py-4 gap-x-4">
            <div className="w-[26px] h-[26px] bg-[#F589D7] rounded"></div>
            <p className="text-sm font-semibold text-secondary">
                Love Nest
            </p>
            </div>
            <div className="flex items-center py-4 gap-x-4">
            <div className="w-[26px] h-[26px] bg-slate-400 rounded"></div>
            <p className="text-sm font-semibold text-secondary">Sold</p>
            </div>
        </div>
        </>
    )
}

export default InfoSeat