"use client";
import { useEffect, useState } from "react";

const KEY = "velvet_age_verified";

export function AgeGate(){
  const [open,setOpen]=useState(false);
  useEffect(()=>{
    setOpen(localStorage.getItem(KEY)!=="yes");
  },[]);
  if(!open) return null;
  return <div className="ageOverlay" role="dialog" aria-modal="true">
    <div className="ageBox">
      <div className="ageMark">18+</div>
      <div className="kicker">Adults only</div>
      <h2>Before you enter</h2>
      <p>This website contains content intended for adults. Please confirm that you are 18 years of age or older.</p>
      <div className="ageBtns">
        <button className="btn" onClick={()=>{localStorage.setItem(KEY,"yes");setOpen(false)}}>I am 18 or older</button>
        <button className="btn secondary" onClick={()=>window.location.href="https://www.google.com"}>Exit site</button>
      </div>
      <p className="ageFine">By entering, you confirm that you meet the minimum legal age required to view adult-oriented content in your jurisdiction.</p>
    </div>
  </div>
}
