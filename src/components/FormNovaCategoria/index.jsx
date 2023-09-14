/* eslint-disable react/prop-types */
import styles from "./FormNovaCategoria.module.css";
import TextField from "@mui/material/TextField";
import Button from "../../components/Button";

export default function FormNovaCategoria({
  onSave,
  name,
  onChangeName,
  onChangeDescription,
  onChangeColor,
  error,
  errorMessage,
  aoMudar,
  description,
  color,
  onClean,
  onFocus,
}) {
  return (
    <form className={styles.form} onSubmit={onSave}>
      <div className={styles.main}>
        <h1>Nova Categoria</h1>
        <TextField
          className={styles.textField}
          id="filled-basic"
          variant="filled"
          fullWidth
          required
          label="Nome"
          type="text"
          value={name}
          onChange={onChangeName}
          error={error}
          helperText={errorMessage}
          onBlur={aoMudar}
          onFocus={onFocus}
        />

        <TextField
          className={styles.multilineField}
          id="filled-basic"
          variant="filled"
          fullWidth
          required
          label="Descrição"
          multiline
          rows={4}
          type="text"
          value={description}
          onChange={onChangeDescription}
        />
        <div className={styles.inputColor}>
          <label>Cor:</label>
          <input
            type="color"
            label="Cor"
            value={color}
            onChange={onChangeColor}
          />
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.buttonsLeft}>
          <Button bgcolor="blue" onClick={onSave}>
            Salvar
          </Button>
          <Button bgcolor="grey" onClick={onClean}>
            Limpar
          </Button>
        </div>
      </div>
    </form>
  );
}
