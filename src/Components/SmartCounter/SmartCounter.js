import { useState } from 'react';



function SmartCounter() {
    //retorna um vetor
    //1. vairavel stateful
    //2. funcao amarrada a essa variavel que atualiza esse valor
    const [quantity, stateQuantity] = useState(1);

    return (
        <>
            <h1>{quantity}</h1>
            <button onClick={() => stateQuantity(quantity + 1)}>Aumentar</button>
            <button onClick={() => stateQuantity(quantity - 1)}>Diminuir</button>
        </>
    )
}

export default SmartCounter;