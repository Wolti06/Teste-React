function ComponenteCompetencia(props) {
    return (
        <div
            style={{
                background: "#000",
                color: "#fff",
                width: "#20%",
                marginLeft: "10%",
                marginRight: "10%",
                padding: "2%",
                border: "2px solid blue",
            }}
        >
            <div>{props.nome}</div>
            <div>{props.descricao}</div>
        </div>

    );
}
export { ComponenteCompetencia };