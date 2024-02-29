import Tags from "./Tags";

//Crear componente de Card
{/*Componente Hijo*/}
export const MyCard = (props) =>{
    const {imagen,nombre,descripcion,textoBadge,colorBadge} = props;
    return (
    <div className="card">
        {/*Imagen donde el prop sera la imagen*/}
        <img src={imagen} alt="Imagen" className="imagenPerrito" />

        {/*Descripcion de los perritos*/}
        <section>
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
        </section>
        {/*Tags*/}
        <Tags texto={textoBadge} color={colorBadge}/>
    </div>
    );
}
export default MyCard;