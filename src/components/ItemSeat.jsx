/* eslint-disable react/prop-types */

import { useState } from "react";

function ItemSeat() {
    const [selectedSeats, setSelectedSeats] = useState([]);

    const checkSeat = (seat) => {
        return selectedSeats.includes(seat);
    };

    const seatHandler = (seat) => {
        if (!checkSeat(seat)) {
            setSelectedSeats([...selectedSeats, seat]);
        } else {
            setSelectedSeats(selectedSeats.filter(selectedSeat => selectedSeat !== seat));
        }
    };

    return (
        <table className="text-sm font-semibold">
            
            <tr className="flex items-center py-1">
                
                <td className="px-2 w-8">A</td>
                {[...Array(7)].map((_, index) => (
                    <td key={index} className="px-1 cursor-pointer">
                        <div className={`w-[26px] h-[26px] ${checkSeat("A" + (index + 1)) ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={() => seatHandler("A" + (index + 1))}></div>
                    </td>
                ))}
                <td className="px-1 w-32 flex justify-center font-semibold relative -top-14">
                Screen
                </td>
                {[...Array(7)].map((_, index) => (
                    <td key={index+8} className="px-1 cursor-pointer">
                        <div className={`w-[26px] h-[26px] ${checkSeat("A" + (index + 8)) ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={() => seatHandler("A" + (index + 8))}></div>
                    </td>
                ))}
                
            </tr>
            <tr className="flex items-center py-1">
                
                <td className="px-2 w-8">B</td>
                {[...Array(7)].map((_, index) => (
                    <td key={index} className="px-1 cursor-pointer">
                        <div className={`w-[26px] h-[26px] ${checkSeat("B" + (index + 1)) ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={() => seatHandler("B" + (index + 1))}></div>
                    </td>
                ))}
                <td className="px-1 w-32"></td>
                {[...Array(7)].map((_, index) => (
                    <td key={index+8} className="px-1 cursor-pointer">
                        <div className={`w-[26px] h-[26px] ${checkSeat("B" + (index + 8)) ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={() => seatHandler("B" + (index + 8))}></div>
                    </td>
                ))}
                
            </tr>
            <tr className="flex items-center py-1">
                
                <td className="px-2 w-8">C</td>
                {[...Array(7)].map((_, index) => (
                    <td key={index} className="px-1 cursor-pointer">
                        <div className={`w-[26px] h-[26px] ${checkSeat("C" + (index + 1)) ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={() => seatHandler("C" + (index + 1))}></div>
                    </td>
                ))}
                <td className="px-1 w-32"></td>
                {[...Array(7)].map((_, index) => (
                    <td key={index+8} className="px-1 cursor-pointer">
                        <div className={`w-[26px] h-[26px] ${checkSeat("C" + (index + 8)) ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={() => seatHandler("C" + (index + 8))}></div>
                    </td>
                ))}
                
            </tr>
            <tr className="flex items-center py-1">
                
                <td className="px-2 w-8">D</td>
                {[...Array(7)].map((_, index) => (
                    <td key={index} className="px-1 cursor-pointer">
                        <div className={`w-[26px] h-[26px] ${checkSeat("D" + (index + 1)) ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={() => seatHandler("D" + (index + 1))}></div>
                    </td>
                ))}
                <td className="px-1 w-32"></td>
                {[...Array(7)].map((_, index) => (
                    <td key={index+8} className="px-1 cursor-pointer">
                        <div className={`w-[26px] h-[26px] ${checkSeat("D" + (index + 8)) ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={() => seatHandler("D" + (index + 8))}></div>
                    </td>
                ))}
                
            </tr>
            <tr className="flex items-center py-1">
                
                <td className="px-2 w-8">E</td>
                {[...Array(7)].map((_, index) => (
                    <td key={index} className="px-1 cursor-pointer">
                        <div className={`w-[26px] h-[26px] ${checkSeat("E" + (index + 1)) ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={() => seatHandler("E" + (index + 1))}></div>
                    </td>
                ))}
                <td className="px-1 w-32"></td>
                {[...Array(7)].map((_, index) => (
                    <td key={index+8} className="px-1 cursor-pointer">
                        <div className={`w-[26px] h-[26px] ${checkSeat("E" + (index + 8)) ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={() => seatHandler("E" + (index + 8))}></div>
                    </td>
                ))}
                
            </tr>
            <tr className="flex items-center py-1">
                
                <td className="px-2 w-8">F</td>
                {[...Array(7)].map((_, index) => (
                    <td key={index} className="px-1 cursor-pointer">
                        <div className={`w-[26px] h-[26px] ${checkSeat("F" + (index + 1)) ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={() => seatHandler("F" + (index + 1))}></div>
                    </td>
                ))}
                <td className="px-1 w-32"></td>
                {[...Array(7)].map((_, index) => (
                    <td key={index+8} className="px-1 cursor-pointer">
                        <div className={`w-[26px] h-[26px] ${checkSeat("F" + (index + 8)) ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={() => seatHandler("F" + (index + 8))}></div>
                    </td>
                ))}
                
            </tr>
            <tr className="flex items-center py-1">
                
            <td className="px-2 w-8">G</td>
            {[...Array(7)].map((_,index)=>(
                <td key={index} className="px-1 cursor-pointer">
                    <div className={`w-[26px] h-[26px] ${checkSeat("G"+(index + 1)) ? "bg-[#6E7191]" : "bg-[#D6D8E7]"} rounded`}
                        onClick={()=> seatHandler("G" + (index + 1))}></div>
                </td>
            ))}
            <td className="px-1 w-32"></td>
            {[...Array(7)].map((_,index)=>(
                <td key={index} className="px-1 cursor-pointer">
                    <div className={`w-[26px] h-[26px] ${checkSeat("G"+(index + 8)) ? "bg-[#6E7191]" : "bg-[#D6D8E7]"} rounded`}
                        onClick={()=> seatHandler("G" + (index + 8))}></div>
                </td>
            ))}
                
            </tr>

        </table>
        
    );
}

export default ItemSeat;