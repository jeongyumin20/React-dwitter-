// Dwitter.jsx

export default function Dwiiter(props) {
  return(
    <div className="dwitter_container">
      <div className="dwitter_inner">
        <img src={props.img} alt="" />
        <div className="dwitter_info">
          <span>{props.name}</span>
          <span>: {props.id} :</span>
          <span>{props.date}</span>
        </div>
        <div className="dwitter_btn">
          <button>편집</button>
          <button>삭제</button>
        </div>
      </div>
      <p className="content">{props.content}</p>
    </div>
  );
}