import { useEffect, useState } from "react";
import { BoxInput } from "../../components/BoxInput/Index";
import { ContainerForm, ContainerInput, ScrollForm } from "./Style";
import reactNativeAxios from "axios"


// call da api

export function Home() {
  // states - variaveis
  const [cep, setCep] = useState("09290500");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [uf, setUF] = useState("");

  // effects - funções
  useEffect(() => {
    async function buscarCep() {
      try {
        if (cep != "" && cep.length === 8) {
          const endereco = await reactNativeAxios.get(
            `https://brasilaberto.com/api/v1/zipcode/${cep}`
          );

          

          if (endereco.error) {
            return;
          }

          setLogradouro(endereco.data.result.street);
          setBairro(endereco.data.result.district);
          setCidade(endereco.data.result.city);
          setEstado(endereco.data.result.state)
          setUF(endereco.data.result.stateShortName)
          // alert(logradouro)

          console.log(bairro);
        }
      } catch (error) {
        console.log('Erro ao buscar o cep')
      }
    }

    buscarCep();
  }, [cep]);

  return (
    <ScrollForm>
      <ContainerForm>
        <BoxInput
          textLabel="informar CEP"
          placeholder="CEP..."
          keytype="numeric"
          maxLength={9}
          editable={true}
          onChangeText={(tx) => setCep(tx)}
          fieldValue={cep}
          
        />
        <BoxInput
          textLabel="Logradouro"
          placeholder={logradouro}
          keytype="text"
          editable={true}
          onChangeText={(tx) => setLogradouro(tx)}
          fieldValue={logradouro}
        />
        <BoxInput
          textLabel="Bairro"
          placeholder={bairro}
          keytype="text"
          editable={true}
          onChangeText={(tx) => setBairro(tx)}
          fieldValue={bairro}
        />
        <BoxInput
          textLabel="Cidade"
          placeholder={cidade}
          keytype="text"
          editable={true}
          onChangeText={(tx) => setCidade(tx)}
          fieldValue={cidade}
        />

        <ContainerInput>
          <BoxInput
            textLabel="Estado"
            placeholder={estado}
            fieldWidth={60}
            editable={true}
            keytype="text"
            onChangeText={(tx) => setEstado(tx)}
            fieldValue={estado}
          />
          <BoxInput
            textLabel="UF"
            placeholder={uf}
            fieldWidth={20}
            maxLength={2}
            editable={true}
            keytype="text"
            onChangeText={(tx) => setUF(tx)}
            fieldValue={uf}
          />
        </ContainerInput>
      </ContainerForm>
    </ScrollForm>
  );
}
