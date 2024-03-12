/* eslint-disable react/prop-types */

import { useState } from "react";

function ItemSeat({reservedSeat, choose, price, setTotal}) {
  const [selectedSeats, setSelectedSeats] = useState([]);

    const setId = [
      "A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11","A12","A13","A14",
      "B1","B2","B3","B4","B5","B6","B7","B8","B9","B10","B11","B12","B13","B14",
      "C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12","C13","C14",
      "D1","D2","D3","D4","D5","D6","D7","D8","D9","D10","D11","D12","D13","D14",
      "E1","E2","E3","E4","E5","E6","E7","E8","E9","E10","E11","E12","E13","E14",
      "F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","F13","F14",
      "G1","G2","G3","G4","G5","G6","G7","G8","G9","G10","G11","G12","G13","G14",
    ]


    const checkSeat = (seat) => {
        return selectedSeats?.includes(seat);
    };

    const seatHandler = (seat) => {
      if(selectedSeats.length < 1){
        setTotal('0')
      }
      if (!checkSeat(seat)) {
          setSelectedSeats([...selectedSeats, seat]);
          choose([...selectedSeats, seat]);
          setTotal(price * (selectedSeats.length + 1))
        } else {
          setSelectedSeats(selectedSeats.filter(selectedSeat => selectedSeat !== seat));
          choose(selectedSeats.filter(selectedSeat => selectedSeat !== seat));
          setTotal(price * (selectedSeats.length - 1))
          console.log(selectedSeats)
      }
    };

    return (
        <table className="text-sm font-semibold">
        <tr className="flex items-center py-1">
          <td className="w-8 px-2">A</td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[0]} disabled={reservedSeat?.includes(setId[0]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("A1") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[0]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("A1")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[1]} disabled={reservedSeat?.includes(setId[1]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("A2") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[1]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("A2")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[2]} disabled={reservedSeat?.includes(setId[2]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("A3") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[2]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("A3")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[3]} disabled={reservedSeat?.includes(setId[3]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("A4") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[3]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("A4")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[4]} disabled={reservedSeat?.includes(setId[4]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("A5") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[4]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("A5")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[5]} disabled={reservedSeat?.includes(setId[5]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("A6") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[5]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("A6")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[6]} disabled={reservedSeat?.includes(setId[6]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("A7") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[6]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("A7")}}></button>
          </td>
          <td className="relative flex justify-center w-32 px-1 -top-14">
            Screen
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[7]} disabled={reservedSeat?.includes(setId[7]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("A8") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[7]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("A8")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[8]} disabled={reservedSeat?.includes(setId[8]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("A9") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[8]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("A9")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[9]} disabled={reservedSeat?.includes(setId[9]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("A10") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[9]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("A10")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[10]} disabled={reservedSeat?.includes(setId[10]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("A11") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[10]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("A11")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[11]} disabled={reservedSeat?.includes(setId[11]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("A12") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[11]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("A12")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[12]} disabled={reservedSeat?.includes(setId[12]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("A13") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[12]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("A13")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[13]} disabled={reservedSeat?.includes(setId[13]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("A14") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[13]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("A14")}}></button>
          </td>
        </tr>
        <tr className="flex items-center py-1">
          <td className="w-8 px-2">B</td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[14]} disabled={reservedSeat?.includes(setId[14]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("B1") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[14]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("B1")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[15]} disabled={reservedSeat?.includes(setId[15]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("B2") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[15]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("B2")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[16]} disabled={reservedSeat?.includes(setId[16]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("B3") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[16]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("B3")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[17]} disabled={reservedSeat?.includes(setId[17]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("B4") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[17]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("B4")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[18]} disabled={reservedSeat?.includes(setId[18]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("B5") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[18]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("B5")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[19]} disabled={reservedSeat?.includes(setId[19]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("B6") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[19]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("B6")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[20]} disabled={reservedSeat?.includes(setId[20]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("B7") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[20]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("B7")}}></button>
          </td>
          <td className="w-32 px-1"></td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[21]} disabled={reservedSeat?.includes(setId[21]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("B8") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[21]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("B8")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[22]} disabled={reservedSeat?.includes(setId[22]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("B9") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[22]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("B9")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[23]} disabled={reservedSeat?.includes(setId[23]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("B10") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[23]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("B10")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[24]} disabled={reservedSeat?.includes(setId[24]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("B11") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[24]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("B11")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[25]} disabled={reservedSeat?.includes(setId[25]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("B12") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[25]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("B12")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[26]} disabled={reservedSeat?.includes(setId[26]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("B13") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[26]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("B13")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[27]} disabled={reservedSeat?.includes(setId[27]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("B14") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[27]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("B14")}}></button>
          </td>
        </tr>
        <tr className="flex items-center py-1">
          <td className="w-8 px-2">C</td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[28]} disabled={reservedSeat?.includes(setId[28]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("C1") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[28]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("C1")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[29]} disabled={reservedSeat?.includes(setId[29]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("C2") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[29]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("C2")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[30]} disabled={reservedSeat?.includes(setId[30]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("C3") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[30]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("C3")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[31]} disabled={reservedSeat?.includes(setId[31]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("C4") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[31]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("C4")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[32]} disabled={reservedSeat?.includes(setId[32]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("C5") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[32]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("C5")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[33]} disabled={reservedSeat?.includes(setId[33]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("C6") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[33]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("C6")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[34]} disabled={reservedSeat?.includes(setId[34]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("C7") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[34]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("C7")}}></button>
          </td>
          <td className="w-32 px-1"></td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[35]} disabled={reservedSeat?.includes(setId[35]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("C8") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[35]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("C8")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[36]} disabled={reservedSeat?.includes(setId[36]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("C9") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[36]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("C9")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[37]} disabled={reservedSeat?.includes(setId[37]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("C10") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[37]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("C10")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[38]} disabled={reservedSeat?.includes(setId[38]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("C11") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[38]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("C11")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[39]} disabled={reservedSeat?.includes(setId[39]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("C12") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[39]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("C12")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[40]} disabled={reservedSeat?.includes(setId[40]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("C13") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[40]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("C13")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[41]} disabled={reservedSeat?.includes(setId[41]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("C14") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[41]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("C14")}}></button>
          </td>
        </tr>
        <tr className="flex items-center py-1">
          <td className="w-8 px-2">D</td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[42]} disabled={reservedSeat?.includes(setId[42]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("D1") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[42]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("D1")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[43]} disabled={reservedSeat?.includes(setId[43]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("D2") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[43]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("D2")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[44]} disabled={reservedSeat?.includes(setId[44]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("D3") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[44]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("D3")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[45]} disabled={reservedSeat?.includes(setId[45]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("D4") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[45]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("D4")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[46]} disabled={reservedSeat?.includes(setId[46]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("D5") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[46]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("D5")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[47]} disabled={reservedSeat?.includes(setId[47]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("D6") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[47]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("D6")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[48]} disabled={reservedSeat?.includes(setId[48]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("D7") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[48]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("D7")}}></button>
          </td>
          <td className="w-32 px-1"></td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[49]} disabled={reservedSeat?.includes(setId[49]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("D8") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[49]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("D8")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[50]} disabled={reservedSeat?.includes(setId[50]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("D9") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[50]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("D9")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[51]} disabled={reservedSeat?.includes(setId[51]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("D10") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[51]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("D10")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[52]} disabled={reservedSeat?.includes(setId[52]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("D11") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[52]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("D11")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[53]} disabled={reservedSeat?.includes(setId[53]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("D12") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[53]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("D12")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[54]} disabled={reservedSeat?.includes(setId[54]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("D13") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[54]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("D13")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[55]} disabled={reservedSeat?.includes(setId[55]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("D14") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[55]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("D14")}}></button>
          </td>
        </tr>
        <tr className="flex items-center py-1">
          <td className="w-8 px-2">E</td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[56]} disabled={reservedSeat?.includes(setId[56]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("E1") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[56]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("E1")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[57]} disabled={reservedSeat?.includes(setId[57]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("E2") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[57]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("E2")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[58]} disabled={reservedSeat?.includes(setId[58]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("E3") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[58]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("E3")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[59]} disabled={reservedSeat?.includes(setId[59]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("E4") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[59]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("E4")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[60]} disabled={reservedSeat?.includes(setId[60]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("E5") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[60]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("E5")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[61]} disabled={reservedSeat?.includes(setId[61]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("E6") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[61]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("E6")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[62]} disabled={reservedSeat?.includes(setId[62]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("E7") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[62]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("E7")}}></button>
          </td>
          <td className="w-32 px-1"></td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[63]} disabled={reservedSeat?.includes(setId[63]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("E8") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[63]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("E8")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[64]} disabled={reservedSeat?.includes(setId[64]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("E9") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[64]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("E9")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[65]} disabled={reservedSeat?.includes(setId[65]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("E10") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[65]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("E10")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[66]} disabled={reservedSeat?.includes(setId[66]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("E11") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[66]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("E11")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[67]} disabled={reservedSeat?.includes(setId[67]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("E12") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[67]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("E12")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[68]} disabled={reservedSeat?.includes(setId[68]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("E13") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[68]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("E13")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[69]} disabled={reservedSeat?.includes(setId[69]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("E14") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[69]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("E14")}}></button>
          </td>
        </tr>
        <tr className="flex items-center py-1">
          <td className="w-8 px-2">F</td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[70]} disabled={reservedSeat?.includes(setId[70]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("F1") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[70]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("F1")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[71]} disabled={reservedSeat?.includes(setId[71]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("F2") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[71]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("F2")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[72]} disabled={reservedSeat?.includes(setId[72]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("F3") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[72]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("F3")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[73]} disabled={reservedSeat?.includes(setId[73]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("F4") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[73]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("F4")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[74]} disabled={reservedSeat?.includes(setId[74]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("F5") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[74]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("F5")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[75]} disabled={reservedSeat?.includes(setId[75]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("F6") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[75]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("F6")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[76]} disabled={reservedSeat?.includes(setId[76]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("F7") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[76]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("F7")}}></button>
          </td>
          <td className="w-32 px-1"></td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[77]} disabled={reservedSeat?.includes(setId[77]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("F8") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[77]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("F8")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[78]} disabled={reservedSeat?.includes(setId[78]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("F9") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[78]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("F9")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[79]} disabled={reservedSeat?.includes(setId[79]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("F10") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[79]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("F10")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[80]} disabled={reservedSeat?.includes(setId[80]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("F11") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[80]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("F11")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[81]} disabled={reservedSeat?.includes(setId[81]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("F12") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[81]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("F12")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[82]} disabled={reservedSeat?.includes(setId[82]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("F13") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[82]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("F13")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[83]} disabled={reservedSeat?.includes(setId[83]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("F14") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[83]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("F14")}}></button>
          </td>
        </tr>
        <tr className="flex items-center py-1">
          <td className="w-8 px-2">G</td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[84]} disabled={reservedSeat?.includes(setId[84]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("G1") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[84]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("G1")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[85]} disabled={reservedSeat?.includes(setId[85]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("G2") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[85]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("G2")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[86]} disabled={reservedSeat?.includes(setId[86]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("G3") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[86]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("G3")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[87]} disabled={reservedSeat?.includes(setId[87]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("G4") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[87]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("G4")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[88]} disabled={reservedSeat?.includes(setId[88]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("G5") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[88]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("G5")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[89]} disabled={reservedSeat?.includes(setId[89]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("G6") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[89]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("G6")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[90]} disabled={reservedSeat?.includes(setId[90]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("G7") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[90]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("G7")}}></button>
          </td>
          <td className="w-32 px-1"></td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[91]} disabled={reservedSeat?.includes(setId[91]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("G8") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[91]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("G8")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <button type='button' id={setId[92]} disabled={reservedSeat?.includes(setId[92]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("G9") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[92]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("G9")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[93]} disabled={reservedSeat?.includes(setId[93]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("G10") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[93]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("G10")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[94]} disabled={reservedSeat?.includes(setId[94]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("G11") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[94]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("G11")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[95]} disabled={reservedSeat?.includes(setId[95]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("G12") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[95]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("G12")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[96]} disabled={reservedSeat?.includes(setId[96]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("G13") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[96]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("G13")}}></button>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <button type='button' id={setId[97]} disabled={reservedSeat?.includes(setId[97]) ? true : false} className={`w-[26px] h-[26px] ${checkSeat("G14") ? "bg-primary" : "bg-[#D6D8E7]" } ${reservedSeat?.includes(setId[97]) ? "bg-[#716D90]": ""} rounded`} onClick={() => {seatHandler("G14")}}></button>
          </td>
        </tr>
        <tr className="flex items-center py-1">
          <td className="w-8 px-2"></td>
          <td className="px-1">
            <div className="w-[26px] h-[26px] text-center">1</div>
          </td>
          <td className="px-1">
            <div className="w-[26px] h-[26px] text-center">2</div>
          </td>
          <td className="px-1">
            <div className="w-[26px] h-[26px] text-center">3</div>
          </td>
          <td className="px-1">
            <div className="w-[26px] h-[26px] text-center">4</div>
          </td>
          <td className="px-1">
            <div className="w-[26px] h-[26px] text-center">5</div>
          </td>
          <td className="px-1">
            <div className="w-[26px] h-[26px] text-center">6</div>
          </td>
          <td className="px-1">
            <div className="w-[26px] h-[26px] text-center">7</div>
          </td>
          <td className="w-32 px-1"></td>
          <td className="px-1">
            <div className="w-[26px] h-[26px] text-center">8</div>
          </td>
          <td className="px-1">
            <div className="w-[26px] h-[26px] text-center">9</div>
          </td>
          <td className="px-1">
            <div className="w-[26px] h-[26px] text-center">10</div>
          </td>
          <td className="px-1">
            <div className="w-[26px] h-[26px] text-center">11</div>
          </td>
          <td className="px-1">
            <div className="w-[26px] h-[26px] text-center">12</div>
          </td>
          <td className="px-1">
            <div className="w-[26px] h-[26px] text-center">13</div>
          </td>
          <td className="px-1">
            <div className="w-[26px] h-[26px] text-center">14</div>
          </td>
        </tr>
      </table>
        
    );
}

export default ItemSeat;