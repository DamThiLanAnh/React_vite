//arrow function: () => {}
//component = html + css + js
import './style.css'

const MyComponents = () => { //tag
    return (
        <>
            <div>Lan Anh xinh gai</div>
            <div className="child">
                <img src="./img/anh_con_meo.jpg" alt="anh_meo" />
            </div>
        </>
    );
}

export default MyComponents