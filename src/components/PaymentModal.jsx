
const PaymentModel = ({ paymentModelShow }) => {
    const exampleNoRekening = '54321'

    const copyString = () => {
        navigator.clipboard.writeText(exampleNoRekening); // Menyalin nomor rekening ke clipboard
        alert('Account number copied to clipboard!');
      };
    return (
        <div
            className={`${paymentModelShow ? "block" : "hidden"
                } font-mulish absolute bg-[#00000099] left-0 top-0 h-full w-full z-40 flex justify-center items-center`}
        >
            <div className="bg-white h-fit w-[30%] max-w-[30%] rounded-[10px]">
                <div className=" flex flex-col items-center gap-6 p-4 rounded-[10px] ">
                    <div className='font-bold'>Payment Info</div>
                    <div className='text-[12px] w-full items-center flex justify-between'>
                        <span className='text-secondary'>No Rekening Virtual</span>
                        <div className='flex items-center gap-[20px]'>
                            <span className='font-bold'>{exampleNoRekening}</span>
                            <button className='text-secondary border-secondary border-2 p-2' onClick={copyString}>Copy</button>
                        </div>
                    </div>
                    <div className='text-[12px] w-full items-center flex justify-between'>
                        <span className='text-secondary'>Total Payment</span>
                        <div className='text-primary font-bold'>$30</div>
                    </div>
                    <div className='text-[12px] w-full items-center flex justify-between'>
                        <span className='text-secondary'>Pay this payment bill before it is due, <span className='text-danger'>on June 23, 2023</span>. If the bill has not been paid by the specified time, it will be forfeited</span>
                    </div>
                    <form className=" flex flex-col items-center w-full gap-8">
                        <div className=" flex flex-col items-center w-full gap-4">
                            <button
                                type="submit"
                                className="p-1 text-xs sm:text-base text-white bg-[#764abc] flex justify-center items-center rounded w-full hover:bg-secondary active:scale-95 transition-all duration-500"
                            >
                                Check Payment
                            </button>
                            <button
                                type="submit"
                                className="p-1 text-xs sm:text-base text-white hover:text-[#764abc] flex justify-center items-center rounded w-full active:scale-95 transition-all duration-500"
                            >
                                Pay Leter
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PaymentModel