import React from "react";
import Myinput from "../../../components/input/MyIiput";
import { useState } from "react";
import PostButton from "./PostButton";

export default function PostItem(props) {
  const [data, setData] = useState()
  const [date, setDate] = useState()

  return (
    <div className="post">
      <div className="post__content">
        <div className="post__title">
          <p>
            {props.number} {props.post.title}
          </p>
          <div className="post__button">
            <PostButton onClick={()=>props.remove(props.post) }/>
          </div>
        </div>
        <div className="post__item mb1">
          <p>{props.post.name}</p>
          <Myinput  value={data} onChange={event=>setData(event.target.value)}  placeholder="полностью через пробел" />
        </div>
        <div className="post__item post__item-big">
          <div className="post__item-sex">
            <p>{props.post.sex}</p>
            <ul>
              <li>
                <span>{props.post.man}</span>
              </li>
              <li>{props.post.female}</li>
            </ul>
          </div>

          <div className="post__item-date">
            <p>{props.post.date}</p>
            <Myinput value={date} onChange={event=>setDate(event.target.value)}  type="text" placeholder="00 00 0000" />
          </div>
        </div>
      </div>
    </div>
  );
}
