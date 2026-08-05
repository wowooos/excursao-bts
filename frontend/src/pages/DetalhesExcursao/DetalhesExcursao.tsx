// Busca a excursão pelo id e mostra o resumo antes de partir pro fluxo de reserva.
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { formatarDataDefault, formatarValorEmReais } from '../../utils/formatters';

import { Excursao } from '../../types';
import { excursoesService } from '../../services/excursoes.service';

import {
  Container,
    Conteudo,
    Titulo,
      NomeExcursao,
      Duracao,
    Informacoes,
      InfosPontuais,
        DataPrincipal,
        Embarque,
          EmbarqueLabel,
          EmbarqueLocal,
          EmbarqueDetalhe,
      InfosDetalhadas,
        Accordion,
          AccordionResumo,
            Seta,
          AccordionConteudo,
            Linha,
              LinhaLabel,
              LinhaValor,
              SubLinha,
              SubLinhaLabel,
              SubLinhaValor,
            SubLinhas,
            ImportanteBox,
              ImportanteLabel,
            IncluiLista,
              IncluiItem,
                IncluiIcone,
              AvisoItem,
                AvisoIcone,
            NotaEmpresas,
    BarraFixaWrapper,
      Puxador,
        PuxadorTraco,
      PrecoBloco,
        PrecoConteudo,
          PrecoIcone,
          PrecoLabelValor,
            PrecoLabel,
            PrecoValor,
      BotaoReservar,
} from './DetalhesExcursao.styles';

export function DetalhesExcursao() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [expandido, setExpandido] = useState(true);

  const [excursao, setExcursao] = useState<Excursao | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(null);

    excursoesService.buscarDetalhes(id).then(setExcursao)
    .catch((e: Error) => {
      setError(e.message);
    })
    .finally(() => {
      setLoading(false);
    });
  }, [id]);

  if (!id) return <div>Excursão não encontrada.</div>;
  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;
  if (!excursao) return <div>Excursão não encontrada.</div>;

  const esgotado = excursao.vagasDisponiveis <= 0;

  return (
    <Container>
      <Conteudo>
        <Titulo>
          <NomeExcursao>{excursao.nome}</NomeExcursao>
          <Duracao>Duração: bate-volta</Duracao>
        </Titulo>
        
        <Informacoes>
          <InfosDetalhadas>
            <Accordion>
              <AccordionResumo>
                ROTEIRO
                <Seta className="seta">▾</Seta>
              </AccordionResumo>
              <AccordionConteudo>
                <Linha>
                  <LinhaLabel>Data</LinhaLabel>
                  <LinhaValor>{formatarDataDefault(excursao.dataEvento)}</LinhaValor>
                </Linha>
                <Linha>
                  <LinhaLabel>Horário de saída</LinhaLabel>
                  <LinhaValor>07h30 da manhã</LinhaValor>
                </Linha>
                <Linha className='sublinha'>
                  <LinhaLabel className='sublinha'>Tolerância de atraso</LinhaLabel>
                  <SubLinhas>
                    <SubLinha>
                      <SubLinhaLabel>IDA</SubLinhaLabel>
                      <SubLinhaValor>15min.</SubLinhaValor>
                    </SubLinha>
                    <SubLinha>
                      <SubLinhaLabel>VOLTA</SubLinhaLabel>
                      <SubLinhaValor>45min. após o término do show</SubLinhaValor>
                    </SubLinha>
                  </SubLinhas>
                </Linha>
                <Linha>
                  <LinhaLabel>Local de embarque/desembarque</LinhaLabel>
                  <LinhaValor>{excursao.localEmbarque}</LinhaValor>
                </Linha>
                <Linha>
                  <LinhaLabel>Local do evento</LinhaLabel>
                  <LinhaValor>Estádio MorumBIS/SP</LinhaValor>
                </Linha>
                <Linha>
                  <LinhaLabel>Previsão de chegada</LinhaLabel>
                  <LinhaValor>13h00. Podendo variar conforme o trânsito</LinhaValor>
                </Linha>
                <Linha>
                  <LinhaLabel>Retorno</LinhaLabel>
                  <LinhaValor>Após o término do show</LinhaValor>
                </Linha>

                <ImportanteBox>
                  <ImportanteLabel>Importante</ImportanteLabel>
                  Não paramos na porta do estádio, não é permitido. Paramos no local mais próximo que
                  conseguimos, que fica a mais ou menos 20 minutos de caminhada. Isso acontece porque a
                  CET fecha as ruas ao redor do Morumbis, dificultando o acesso direto. No dia do show,
                  a monitora enviará no grupo da excursão a localização do ponto de encontro e passará
                  todas as orientações necessárias. Após o fim do show, ela estará disponível para
                  auxiliar quem precisar de suporte.
                </ImportanteBox>
              </AccordionConteudo>
            </Accordion>
            
            <Accordion>
              <AccordionResumo>
                O QUE INCLUI
                <Seta className="seta">▾</Seta>
              </AccordionResumo>
              <AccordionConteudo>
                <IncluiLista>
                  <IncluiItem>
                    <IncluiIcone>✓</IncluiIcone>
                    Transporte ida e volta para o evento em veículo executivo com ar condicionado,
                    poltronas soft e seguro passageiro
                  </IncluiItem>
                  <IncluiItem>
                    <IncluiIcone>✓</IncluiIcone>
                    Água mineral e biscoitos enquanto durar o estoque
                  </IncluiItem>
                  <AvisoItem>
                    <AvisoIcone>✕</AvisoIcone>
                    O INGRESSO NÃO ESTÁ INCLUSO
                  </AvisoItem>
                </IncluiLista>

                <NotaEmpresas>
                  Trabalhamos com empresas renomadas, com veículos legalizados, regulamentados e
                  segurados.
                </NotaEmpresas>
              </AccordionConteudo>
            </Accordion>
          </InfosDetalhadas>

          <InfosPontuais>
            <DataPrincipal>Data: {formatarDataDefault(excursao.dataEvento)}</DataPrincipal>

            <Embarque>
              <EmbarqueLabel>EMBARQUE</EmbarqueLabel>
              <EmbarqueLocal>{excursao.localEmbarque}</EmbarqueLocal>
              <EmbarqueDetalhe>15 minutos de tolerância</EmbarqueDetalhe>
              <EmbarqueDetalhe>
                {formatarDataDefault(excursao.dataEvento)} às {excursao.horarioEmbarque}
              </EmbarqueDetalhe>
            </Embarque>
          </InfosPontuais>
        </Informacoes>
      </Conteudo>

      {/* <Espacador style={{ height: alturaBarra }} /> */}

      <BarraFixaWrapper>
        <Puxador
          onClick={() => setExpandido((atual) => !atual)}
          aria-expanded={expandido}
          aria-label={expandido ? 'Recolher preço' : 'Mostrar preço'}
        >
          <PuxadorTraco />
        </Puxador>

        <PrecoBloco $expandido={expandido}>
          <PrecoConteudo>
            <PrecoIcone>$</PrecoIcone>
            <PrecoLabelValor>
              <PrecoLabel>a partir de</PrecoLabel>
              <PrecoValor>
                {formatarValorEmReais(excursao.valorCentavos)} <span>/por pessoa</span>
              </PrecoValor>
            </PrecoLabelValor>
          </PrecoConteudo>
        </PrecoBloco>

        <BotaoReservar
          $esgotado={esgotado}
          disabled={esgotado}
          onClick={() => !esgotado && navigate('/aceite-contrato')}
        >
          {esgotado ? 'ESGOTADO' : 'RESERVAR'}
        </BotaoReservar>
      </BarraFixaWrapper>
    </Container>
  );
}