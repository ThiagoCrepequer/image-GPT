import Button from "../Button";
import Input from "../Input";

export default function Form({onSubmit}) {
    return (
        <form onSubmit={onSubmit}>
            <Input placeholder="O que quer ver?"/>
            <Button>Enviar</Button>
        </form>
    )
}