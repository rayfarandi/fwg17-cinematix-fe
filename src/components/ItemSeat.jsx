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
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("A1") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("A1")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("A2") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("A2")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("A3") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("A3")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("A4") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("A4")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("A5") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("A5")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("A6") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("A6")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("A7") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("A7")}}></div>
          </td>
          <td className="px-1 w-32 flex justify-center relative -top-14">
            Screen
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("A8") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("A8")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("A9") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("A9")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("A10") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("A10")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("A11") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("A11")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("A12") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("A12")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("A13") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("A13")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("A14") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("A14")}}></div>
          </td>
        </tr>
        <tr className="flex items-center py-1">
          <td className="px-2 w-8">B</td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("B1") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("B1")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("B2") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("B2")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("B3") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("B3")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("B4") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("B4")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("B5") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("B5")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("B6") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("B6")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("B7") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("B7")}}></div>
          </td>
          <td className="px-1 w-32"></td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("B8") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("B8")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("B9") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("B9")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("B10") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("B10")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("B11") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("B11")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("B12") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("B12")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("B13") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("B13")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("B14") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("B14")}}></div>
          </td>
        </tr>
        <tr className="flex items-center py-1">
          <td className="px-2 w-8">C</td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("C1") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("C1")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("C2") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("C2")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("C3") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("C3")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("C4") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("C4")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("C5") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("C5")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("C6") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("C6")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("C7") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("C7")}}></div>
          </td>
          <td className="px-1 w-32"></td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("C8") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("C8")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("C9") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("C9")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("C10") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("C10")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("C11") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("C11")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("C12") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("C12")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("C13") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("C13")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("C14") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("C14")}}></div>
          </td>
        </tr>
        <tr className="flex items-center py-1">
          <td className="px-2 w-8">D</td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("D1") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("D1")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("D2") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("D2")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("D3") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("D3")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("D4") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("D4")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("D5") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("D5")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("D6") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("D6")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("D7") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("D7")}}></div>
          </td>
          <td className="px-1 w-32"></td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("D8") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("D8")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("D9") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("D9")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("D10") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("D10")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("D11") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("D11")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("D12") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("D12")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("D13") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("D13")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("D14") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("D14")}}></div>
          </td>
        </tr>
        <tr className="flex items-center py-1">
          <td className="px-2 w-8">E</td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("E1") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("E1")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("E2") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("E2")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("E3") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("E3")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("E4") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("E4")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("E5") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("E5")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("E6") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("E6")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("E7") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("E7")}}></div>
          </td>
          <td className="px-1 w-32"></td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("E8") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("E8")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("E9") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("E9")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("E10") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("E10")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("E11") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("E11")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("E12") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("E12")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("E13") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("E13")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("E14") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("E14")}}></div>
          </td>
        </tr>
        <tr className="flex items-center py-1">
          <td className="px-2 w-8">F</td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("F1") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("F1")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("F2") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("F2")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("F3") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("F3")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("F4") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("F4")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("F5") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("F5")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("F6") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("F6")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("F7") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("F7")}}></div>
          </td>
          <td className="px-1 w-32"></td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("F8") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("F8")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("F9") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("F9")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("F10") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("F10")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("F11") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("F11")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("F12") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("F12")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("F13") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("F13")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("F14") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("F14")}}></div>
          </td>
        </tr>
        <tr className="flex items-center py-1">
          <td className="px-2 w-8">G</td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("G1") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("G1")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("G2") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("G2")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("G3") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("G3")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("G4") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("G4")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("G5") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("G5")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("G6") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("G6")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("G7") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("G7")}}></div>
          </td>
          <td className="px-1 w-32"></td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("G8") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("G8")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("G9") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("G9")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("G10") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("G10")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("G11") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("G11")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("G12") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("G12")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("G13") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("G13")}}></div>
          </td>
          <td
            className="px-1 cursor-pointer"
  
          >
            <div className={`w-[26px] h-[26px] ${checkSeat("G14") ? "bg-primary" : "bg-[#D6D8E7]" } rounded`} onClick={() => {seatHandler("G14")}}></div>
          </td>
        </tr>
        <tr className="flex items-center py-1">
          <td className="px-2 w-8"></td>
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
          <td className="px-1 w-32"></td>
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