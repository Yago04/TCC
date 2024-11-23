import "./tags.css";

const Tags = () => {

    const Tag = ({text}) => (
        <div className="tag">
            <p>{text}</p>
        </div>
    )

    return (
        <div className="main-tag">
            <div className="topo-tag">
                <h2>Tags</h2>
            </div>
            <div className="tags">
                <Tag text={'Frango'}/>
                <Tag text={'Fácil'}/>
                <Tag text={'<30 minutos'}/>
                <Tag text={'Tomate'}/>
                <Tag text={'Queijo'}/>
                <Tag text={'Farinha'}/>
                <Tag text={'Saudável'}/>
                <Tag text={'Italiana'}/>
                <Tag text={'Apimentada'}/>
            </div>
        </div>
    )
}

export default Tags