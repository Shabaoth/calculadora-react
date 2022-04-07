import React from "react";
import "./Botao.css";

const Botao = ({ children, onClick, isEntrada }) => {

    const isLimpar = (val) =>{        
        if (val === 'C'){
            console.log(val)
            return true;
        }
        return false;
     }

    const isIgual = (val) => {
        if (val === '=') {
          return true;
        }
        return false;
    };

    const isNumerico = (val) => {
      if (!isNaN(val) || val === '.')  {
        return true;
      }
      return false;
    };
    

    return (
        <>
          {isEntrada ? (
            <div className="input">{children}</div>
          ) : (
            <div
              className={`botao-wrapper botao ${isLimpar(children) ? "btn-limpar" : null } ${isIgual(children) ? "btn-igual" : null} ${isNumerico(children) ? null : "btn-operacao"}`}
              onClick={() => onClick(children)}>
              {children}
            </div>
          )}
        </>
      );

};

export default Botao;