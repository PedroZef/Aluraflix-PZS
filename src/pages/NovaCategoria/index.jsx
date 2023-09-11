import styles from "./NovaCategoria.module.css";
import Container from "@mui/material/Container";
import { categories } from "../../data/db";
import VideosTable from "../../components/VideosTable";
import { useNavigate } from "react-router-dom";
import FormNovaCategoria from "../../components/FormNovaCategoria";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function NovaCategoria() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#000000");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const clean = () => {
    setDescription("");
    setName("");
    setColor("#000000");
  };

  const aoMudar = () => {
    setError(false);
    setErrorMessage("");

    const category = categories.find(
      (c) => c.categoryName === name.toLowerCase().replace(/\s/g, "")
    );

    if (category) {
      setError(true);
      setErrorMessage(
        "Categoria já existe, clique em editar ou digite uma nova categoria."
      );
      return;
    }
  };

  const onSave = (ev) => {
    ev.preventDefault();

    if (!errorMessage) {
      const novaCategoria = {
        categoryName: name.toLowerCase().replace(/\s/g, ""),
        categoryColor: color,
        categoryDescription: description,
        categoryDisplayName: name,
        id: uuidv4(),
      };

      categories.push(novaCategoria);
      alert("Categoria criada com sucesso!");
      clean();
    }
  };

  const onClean = (ev) => {
    clean();
    ev.preventDefault();
  };

  const onRemove = (ev) => {
    const category = categories.find((c) => c.id == String(ev.target.id));
    const index = categories.findIndex((c) => c.id === category.id);

    categories.splice(index, 1);
    alert("Categoria removida com sucesso!");
    navigate(`./`);
  };

  return (
    <Container className={styles.container}>
      <FormNovaCategoria
        onSave={onSave}
        name={name}
        onChangeName={(ev) => setName(ev.target.value)}
        onChangeDescription={(ev) => setDescription(ev.target.value)}
        onChangeColor={(ev) => setColor(ev.target.value)}
        error={error}
        errorMessage={errorMessage}
        aoMudar={aoMudar}
        description={description}
        color={color}
        onClean={onClean}
      />

      <VideosTable
        onRemove={onRemove}
        onEdit={(ev) => navigate(`./editar/${ev.target.id}`)}
      />
    </Container>
  );
}
